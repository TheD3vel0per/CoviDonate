from server.App import app
from server.App import db
from flask import jsonify

@app.route('/api/projects')
def get_projects():

    projects = db.projects.find({})
    resulting_array = []
    for project in projects:
        resulting_object = {}
        for key in project.keys():
            if (key == '_id'):
                resulting_object[key] = str(project.get(key))
            else:
                resulting_object[key] = project.get(key)
        resulting_array.append(resulting_object)
        pass
    return jsonify(resulting_array)

@app.route('/api/projects/recommended', methods=['POST'])
def get_recommended_projects():

    # get tags
    json_data = request.get_json()
    tags = json_data['tags']
    query = { 'tags': { '$all': tags } }

    projects = db.projects.find(query)
    resulting_array = []
    for project in projects:
        resulting_object = {}
        for key in project.keys():
            if (key == '_id'):
                resulting_object[key] = str(project.get(key))
            else:
                resulting_object[key] = project.get(key)
        resulting_array.append(resulting_object)
        pass
    return jsonify(resulting_array)

@app.route('/api/project/<id>')
def get_project(id):

    projects = db.projects.find({
        '_id': ObjectId(id) # wrap this part with `ObjectId()`
    })
    resulting_array = []
    for project in projects:
        resulting_object = {}
        for key in project.keys():
            if (key == '_id'):
                resulting_object[key] = str(project.get(key))
            else:
                resulting_object[key] = project.get(key)
        resulting_array.append(resulting_object)
        break
    return jsonify(resulting_array[0])