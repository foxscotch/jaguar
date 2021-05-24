import os
from django.conf import settings
from django.http import HttpResponse
from django.http.response import HttpResponseServerError


with open(
    os.path.join(os.path.dirname(__file__), "client", "build", "index.html")
) as f:
    CACHED = f.read()


def serve(request):
    if settings.DEBUG:
        return HttpResponse(CACHED)
    else:
        return HttpResponseServerError(
            "This view should never be called when running under production; "
            "use another server to serve the website's static content."
        )
