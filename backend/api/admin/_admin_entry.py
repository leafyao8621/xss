from django.contrib import admin
from ..models import Entry

class EntryAdmin(admin.ModelAdmin):
    list_display = (
        "created",
        "content"
    )

admin.site.register(Entry, EntryAdmin)
