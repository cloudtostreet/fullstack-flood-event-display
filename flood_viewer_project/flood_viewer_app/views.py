from django.contrib.auth.models import Group, User
from django.http import HttpResponse
from django.views.generic.base import View
from rest_framework import permissions, viewsets

from flood_viewer_app.ghana_geometry import ghana_geometry
from flood_viewer_app.serializers import (
    GroupSerializer,
    UserSerializer,
)


# from https://www.django-rest-framework.org/tutorial/quickstart/
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


# from https://www.django-rest-framework.org/tutorial/quickstart/
class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class GhanaGeometryView(View):
    """
    Returns JSON that describes the geometry of Ghana and its regions.
    """

    def get(self, request, *args, **kwargs):
        return HttpResponse(ghana_geometry, content_type="application/json")
