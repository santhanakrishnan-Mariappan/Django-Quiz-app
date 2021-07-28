from django.contrib import admin

# Register your models here.
from django.contrib import admin
from questions.models import Answers,Questions

# Register your models here.
class AnswerInline(admin.TabularInline):
    model = Answers

class QuestionAdmin(admin.ModelAdmin):  
    inlines = [AnswerInline]  

admin.site.register(Questions, QuestionAdmin)      
admin.site.register(Answers)   