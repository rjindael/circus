"""
Define web routes for your Circus application.
"""
from srv.http.router import router
from srv.http.response import Response
from srv.view import view

def home(request):
    return Response(view('welcome'))

router.get('/', home, name='home')
