from flask import Flask, request, jsonify, send_from_directory
import pymongo

app = Flask(__name__, static_url_path='')
client = pymongo.MongoClient('mongodb+srv://root:eWZ4RelgMAQoxxDw@rookiehacks2020-hmb4b.azure.mongodb.net/test?retryWrites=true&w=majority')
db = client['development']

@app.route('/projects')
def get_projects():
    return jsonify(db['projects'].find().)

@app.route('/<path:path>')
def root(path):
    return send_from_directory('./build', path)

if (__name__ == "__main__"):
    app.run()
    print("Application has loaded!")



"""
---> Code template for JSON APIs

@app.route('/api/auth')
def auth():
    json_data = request.get_json()
    email = json_data['email']
    password = json_data['password']
    return jsonify(token=generate_token(email, password))

with app.test_client() as c:
    rv = c.post('/api/auth', json={
        'email': 'flask@example.com', 'password': 'secret'
    })
    json_data = rv.get_json()
    assert verify_token(email, json_data['token'])
    """

"""
---> Code template for collection query
"""

# app = flask.Flask(__name__)
# app.config["DEBUG"] = True

# # Create some test data for our catalog in the form of a list of dictionaries.
# books = [
#     {'id': 0,
#      'title': 'A Fire Upon the Deep',
#      'author': 'Vernor Vinge',
#      'first_sentence': 'The coldsleep itself was dreamless.',
#      'year_published': '1992'},
#     {'id': 1,
#      'title': 'The Ones Who Walk Away From Omelas',
#      'author': 'Ursula K. Le Guin',
#      'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
#      'published': '1973'},
#     {'id': 2,
#      'title': 'Dhalgren',
#      'author': 'Samuel R. Delany',
#      'first_sentence': 'to wound the autumnal city.',
#      'published': '1975'}
# ]


# @app.route('/', methods=['GET'])
# def home():
#     return '''<h1>Distant Reading Archive</h1>
# <p>A prototype API for distant reading of science fiction novels.</p>'''


# # A route to return all of the available entries in our catalog.
# @app.route('/api/v1/resources/books/all', methods=['GET'])
# def api_all():
#     return jsonify(books)
