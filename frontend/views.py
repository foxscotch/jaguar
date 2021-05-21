import os
from django.http import HttpResponse
from django.conf import settings


with open(
    os.path.join(os.path.dirname(__file__), "client", "build", "index.html")
) as f:
    CACHED = f.read()


def serve(request):
    return HttpResponse(CACHED)
