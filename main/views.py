from django.shortcuts import render
from .models import Experience , Project ,About ,Homeimg , Skills ,Services ,Contact ,Email

def homepage(request):
    experiences = Experience.objects.all()
    project = Project.objects.all()
    about = About.objects.first()
    homeimg = Homeimg.objects.first()
    skill = Skills.objects.all()
    service = Services.objects.all()
    email = Email.objects.first()

    if request.method == "POST":
        Contact.objects.create(
             name = request.POST.get("name"),

             email = request.POST.get("email"),

             subject = request.POST.get("subject"),

             message = request.POST.get("message"),

             phone = request.POST.get("mobile")

        )

    return render(request ,"index.html",{
        "experiences" : experiences,
        "project":project,
        "about":about,
        "homeimg":homeimg,
        "skill":skill,
        "service":service,
        "email":email
    })

