from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from ..models import Entry
from ..serializers import EntrySerializer

class EntryView(ModelViewSet):
    serializer_class = EntrySerializer
    queryset = Entry.objects.all()
    @action(detail=False, methods=["GET"])
    def get_entries(self, request):
        res = self.queryset.order_by("-id").values()
        return Response(data={"result": res})
    @action(detail=False, methods=["POST"])
    def create_entry(self, request):
        Entry.objects.create(\
            sender=request.data["sender"],
            content=request.data["content"]
        )
        return Response(data={"success": True})
