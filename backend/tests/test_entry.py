import unittest
import json

from api import create_app, db

BASE_URL = '/api/v0.1/entries'
GOOD_ENTRY = {
    'id': 1,
    'customer': 'good_customer',
    'hourly_rate': 50,
    'length': 60
}
BAD_ENTRY = {
    'id': 1,
    'customer': 'bad_customer',
    'hourly_rate': 'twenty',
    'length': 60
}

class EntryTestCase(unittest.TestCase):
    """Test cases for Entry api resource"""

    def setUp(self):
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()
        self.client = self.app.test_client()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_get_all(self):
        self.client.post(BASE_URL, data=GOOD_ENTRY)
        rv = self.client.get(BASE_URL)
        json_rv = json.loads(rv.data.decode('utf-8'))
        self.assertEqual(rv.status_code, 200)
        self.assertEqual(len(json_rv), 1)
        self.assertEqual(GOOD_ENTRY, json_rv[0])

    def test_get_one(self):
        self.client.post(BASE_URL, data=GOOD_ENTRY)
        rv = self.client.get(BASE_URL+'/1')
        json_rv = json.loads(rv.data.decode('utf-8'))
        self.assertEqual(rv.status_code, 200)
        self.assertEqual(GOOD_ENTRY, json_rv)

    def test_get_all_is_empty(self):
        rv = self.client.get(BASE_URL)
        json_rv = json.loads(rv.data.decode('utf-8'))
        self.assertEqual(rv.status_code, 200)
        self.assertEqual(json_rv, [])

    def test_get_one_not_exist(self):
        rv = self.client.get(BASE_URL+'/1')
        self.assertEqual(rv.status_code, 404)

    def test_post(self):
        rv = self.client.post(BASE_URL, data=GOOD_ENTRY)
        json_rv = json.loads(rv.data.decode('utf-8'))
        self.assertEqual(rv.status_code, 201)
        self.assertEqual(GOOD_ENTRY, json_rv)

    def test_post_invalid_params(self):
        rv = self.client.post(BASE_URL, data=BAD_ENTRY)
        self.assertEqual(rv.status_code, 400)

    def test_put(self):
        rv = self.client.post(BASE_URL, data=GOOD_ENTRY)
        entry = json.loads(rv.data.decode('utf-8'))
        entry['customer'] = 'modified_customer'
        rv = self.client.put(BASE_URL+'/1', data=entry)
        json_rv = json.loads(rv.data.decode('utf-8'))
        self.assertEqual(rv.status_code, 201)
        self.assertEqual(entry['customer'], json_rv['customer'])

    def test_put_invalid_params(self):
        self.client.post(BASE_URL, data=GOOD_ENTRY)
        rv = self.client.put(BASE_URL+'/1', data=BAD_ENTRY)
        self.assertEqual(rv.status_code, 400)

    def test_put_not_exist(self):
        rv = self.client.post(BASE_URL)

    def test_delete(self):
        self.client.post(BASE_URL, data=GOOD_ENTRY)
        rv = self.client.delete(BASE_URL+'/1')
        self.assertEqual(rv.status_code, 204)

    def test_delete_not_exist(self):
        rv = self.client.delete(BASE_URL + '/1')
        self.assertEqual(rv.status_code, 404)

    def test_overview(self):
        self.client.post(BASE_URL, data=GOOD_ENTRY)
        rv = self.client.get(BASE_URL+'/overview')
        json_rv = json.loads(rv.data.decode('utf-8'))
        self.assertEqual(rv.status_code, 200)
        self.assertEqual(json_rv[0]['customer'], GOOD_ENTRY['customer'])
        self.assertEqual(json_rv[0]['total_length'], GOOD_ENTRY['length'])
        self.assertEqual(json_rv[0]['total_due'], GOOD_ENTRY['hourly_rate'])
