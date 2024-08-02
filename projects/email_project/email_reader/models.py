# email_reader/models.py
from django.db import models

class EmailData(models.Model):
    email_id = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    detail = models.TextField()

    def __str__(self):
        return self.email_id
