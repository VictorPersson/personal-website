from bottle import route, run, static_file

@route('/')
def hello():
    return "./index.html"

@route('/static/<filename>')

run(host='localhost', port="8080", debug=True)