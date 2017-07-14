from flask_restful import Resource, fields, marshal_with, reqparse
from sqlalchemy import func, cast, Float

from api import db
from api.models import Entry

# Templates for the marshal function.
# Transforms data to match the given type.
entry_fields = {
    'id': fields.Integer,
    'customer': fields.String,
    'hourly_rate': fields.Float,
    'length': fields.Integer
}

# Template for the reqparse function.
# Validates the incoming parameters.
entry_parser = reqparse.RequestParser()
entry_parser.add_argument('customer', type=str, required=True,)
entry_parser.add_argument('hourly_rate', type=float, required=True)
entry_parser.add_argument('length', type=int, required=True)


class EntryAPI(Resource):
    """API definition for a single entry"""

    @marshal_with(entry_fields)
    def get(self, entry_id):
        """
        Returns the entry with the given ID

        :param entry_id: ID of the entry to be returned
        :return: Entry with the given ID
        """
        return Entry.query.get_or_404(entry_id)

    @marshal_with(entry_fields)
    def put(self, entry_id):
        """
        Modifies the entry with the given ID

        :param entry_id: ID of the entry to be modified
        :return: The modified entry
        """
        args = entry_parser.parse_args()
        entry = Entry.query.get_or_404(entry_id)
        for key, value in args.items():
            # This is the same as entry[key] = value
            setattr(entry, key, value)
        db.session.commit()
        return entry, 201

    def delete(self, entry_id):
        """
        Deletes the entry with the given ID

        :param entry_id: ID of the entry to be deleted
        :return: Empty return
        """
        entry = Entry.query.get_or_404(entry_id)
        db.session.delete(entry)
        db.session.commit()
        return '', 204


class EntryListAPI(Resource):
    """API definition for list of entries"""

    @marshal_with(entry_fields)
    def get(self):
        """
        Returns all the entries

        :return: All the entries
        """
        return Entry.query.all()

    @marshal_with(entry_fields)
    def post(self):
        """
        Creates a new entry

        :return: The created entry
        """
        args = entry_parser.parse_args()
        # Python black magic: unpacks the arguments by name.
        # Equivalent to Entry(customer='customer_name',...)
        entry = Entry(**args)
        db.session.add(entry)
        db.session.commit()
        return entry, 201

summary_fields = {
    'customer': fields.String,
    'total_length': fields.Integer,
    'total_due': fields.Float
}

class EntryListOverviewAPI(Resource):
    """API definition for entries overview"""

    @marshal_with(summary_fields)
    def get(self):
        """
        For each customer compute the total minutes and total due as:
        (length / 60) * hourly_rate

        :return: Overview for each customer
        """
        results = db.session\
            .query(Entry.customer.label('customer'),
                   func.sum(Entry.length).label('total_length'),
                   func.sum(cast(Entry.length * Entry.hourly_rate / 60 , Float)).label('total_due')) \
            .group_by(Entry.customer).all()

        # See http://docs.sqlalchemy.org/en/rel_1_0/orm/query.html#sqlalchemy.util.KeyedTuple
        return [result._asdict() for result in results]