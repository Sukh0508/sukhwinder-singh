from django.contrib import admin
from .models import Experience
from .models import Project
from .models import About
from .models import Homeimg
from . models import Skills
from .models import Services
from .models import Contact
from .models import Email
# Register your models here.
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(About)
admin.site.register(Homeimg)
admin.site.register(Skills)
admin.site.register(Services)
admin.site.register(Contact)
admin.site.register(Email)
