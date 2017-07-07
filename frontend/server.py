from flask import Flask, render_template

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='', static_folder='build')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

if __name__ == "__main__":
    app.run()