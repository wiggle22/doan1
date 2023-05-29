from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import *
from .models import Book
# Create your views here.

@login_required
def dashboard(request):
    books = Book.objects.all()
    context = {
        'books': books
    }
    return render(request, 'registration/dashboard.html', context)

def register(request):
    if request.method == 'POST':
        user_form = UserRegistrationsForm(request.POST)
        if user_form.is_valid():
            # Create a new user object but avoid saving it yet
            new_user = user_form.save(commit=False)
            # Set the choosen password
            new_user.set_password(
                user_form.cleaned_data['password']
            )
            # Save the user object
            new_user.save()
            return render(request, 'registration/register_done.html', {'new_user': new_user})
    else:
        user_form = UserRegistrationsForm()
    return render(request, 'registration/register.html', {'user_form': user_form})

def reserve(request):
    if request.method == 'POST':
        my_form = BookForm(request.POST)
        if my_form.is_valid():
            full_name = request.POST['full_name']
            email = request.POST['email']
            time = request.POST['time']
            slot = request.POST['slot']
            date = request.POST['date']
            phone_num = request.POST['phone_num']
            # Lưu đối tượng vào cơ sở dữ liệu
            my_object = Book(full_name=full_name, email=email, time=time, slot=slot, date=date, phone_num=phone_num)
            my_object.save()
            print(my_object)
            return render(request, 'registration/reserve_done.html', {'user_reserve': my_object})
    else:
        my_form = BookForm()
    return render(request, 'registration/reserve.html', {'my_form': my_form})