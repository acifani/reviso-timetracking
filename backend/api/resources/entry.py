from flask_restful import Resource


class EntryAPI(Resource):
    """API definition for a single entry"""

    def get(self, entry_id):
        pass

    def put(self, entry_id):
        pass

    def delete(self, entry_id):
        pass


class EntryListAPI(Resource):
    """API definition for list of entries"""

    def get(self):
        pass
