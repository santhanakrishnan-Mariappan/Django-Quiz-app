
from django.db import models
from quizes.models import Quiz

# Create your models here.
class Questions(models.Model):
    text = models.CharField(max_length=200)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text

    def get_answers(self):
        return self.answers_set.all()  
   

class Answers(models.Model):
    text = models.CharField(max_length=200)
    correct = models.BooleanField(default=False)
    questions = models.ForeignKey(Questions, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"question:{self.questions.text}, answer: {self.text}, correct {self.correct}"
    

