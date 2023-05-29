from django.contrib import admin
from .models import Book
# Register your models here.

class BookAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'time', 'date')
    search_fields = ['full_name']
    list_filter = ['time', 'date']
    
admin.site.register(Book, BookAdmin)