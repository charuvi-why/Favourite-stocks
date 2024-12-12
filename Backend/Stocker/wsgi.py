"""
WSGI config for project
"""
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Stocker.settings')

application = get_wsgi_application()
