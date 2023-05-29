from django.db import models

# Create your models here.

class Book(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, null=False)
    time = models.CharField(max_length=10, null=False)
    slot = models.CharField(max_length=3, null=True)
    date = models.CharField(max_length=12, null=False)
    phone_num = models.CharField(max_length=10, null=False)
    
    
    def __str__(self):
        return f"{self.full_name}, {self.email}, {self.time}, {self.slot}, {self.date}, {self.phone_num}"
