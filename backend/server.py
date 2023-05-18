from flask import Flask, jsonify, request
from flask_cors import CORS
import mariadb

app = Flask(__name__)
CORS(app)

# Database connection configuration
db_config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'password': '',
    'database': 'turfcoach'
}


def get_db_connection():
    return mariadb.connect(**db_config)


@app.route('/', methods=['GET'])
def health_check():
    return "Connected!"


@app.route('/activities', methods=['GET'])
def get_activities():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM activities')
        activities = cursor.fetchall()
        conn.close()
        return jsonify(activities)
    except mariadb.Error as e:
        print(f'Error connecting to MariaDB: {e}')
        return jsonify([]), 500


@app.route('/activities', methods=['POST'])
def add_activity():
    try:
        activity = request.json
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('INSERT INTO activities (user, type, datetime, pitchId) VALUES (?, ?, ?, ?)',
                       (activity['user'], activity['type'], activity['datetime'], activity['pitchId']))
        conn.commit()
        conn.close()
        return jsonify({'message': 'Activity added successfully'})
    except mariadb.Error as e:
        print(f'Error connecting to MariaDB: {e}')
        return jsonify({'message': 'Failed to add activity'}), 500


@app.route('/activities/<int:activity_id>', methods=['PUT'])
def update_activity(activity_id):
    try:
        activity = request.json
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('UPDATE activities SET user = ?, type = ?, datetime = ?, pitchId = ? WHERE id = ?',
                       (activity['user'], activity['type'], activity['datetime'], activity['pitchId'], activity_id))
        conn.commit()
        conn.close()
        return jsonify({'message': 'Activity updated successfully'})
    except mariadb.Error as e:
        print(f'Error connecting to MariaDB: {e}')
        return jsonify({'message': 'Failed to update activity'}), 500


@app.route('/activities/<int:activity_id>', methods=['DELETE'])
def delete_activity(activity_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('DELETE FROM activities WHERE id = ?', (activity_id,))
        conn.commit()
        conn.close()
        return jsonify({'message': 'Activity deleted successfully'})
    except mariadb.Error as e:
        print(f'Error connecting to MariaDB: {e}')
        return jsonify({'message': 'Failed to delete activity'}), 500


if __name__ == '__main__':
    app.run(debug=True)
