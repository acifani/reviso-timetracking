from flask import Flask, current_app

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='', static_folder='public')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return current_app.send_static_file('index.html')

if __name__ == "__main__":
    app.run()
