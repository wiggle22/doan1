from django import forms
from django.contrib.auth.models import User
from .models import Book

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)

class UserRegistrationsForm(forms.ModelForm):
    password = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Repeat Password', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')

    def clean_passwrod(self):
        cd = self.cleaned_data
        if cd['password'] != cd['password2']:
            raise forms.ValidationError('Password don\'t match.')
        return cd['password2']
    
class BookForm(forms.ModelForm):
    full_name = forms.CharField(label='full_name', widget=forms.TextInput)
    email = forms.CharField(label='email', widget=forms.TextInput)
    time = forms.CharField(label='time', widget=forms.TextInput)
    slot = forms.CharField(label='slot', widget=forms.TextInput)
    date = forms.CharField(label='date', widget=forms.TextInput)
    phone_num = forms.CharField(label='phone_num', widget=forms.TextInput)

    class Meta:
        model = Book
        fields = ('full_name', 'email', 'time', 'date', 'phone_num')