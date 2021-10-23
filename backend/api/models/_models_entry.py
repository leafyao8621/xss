from django.db import models

class Entry(models.Model):
    created = models.DateTimeField(auto_now_add=True, blank=False)
    sender = models.TextField(blank=False)
    content = models.TextField(blank=False)
