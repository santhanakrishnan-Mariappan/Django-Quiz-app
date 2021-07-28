from django.db import models
import random

# Create your models here.
app_name = "quizes"

DIFF_CHOICES = (
    ("EASY", "easy"),
    ("MEDIUM", "medium"),
    ("HARD", "hard"),
)


class Quiz(models.Model):
    name = models.CharField(max_length=200)
    topic = models.CharField(max_length=200)
    number_of_questions = models.IntegerField()
    time = models.IntegerField(help_text="duration of quiz in minutes")
    required_core_to_pass = models.IntegerField(help_text="required score")
    difficulty = models.CharField(max_length=6, choices=DIFF_CHOICES)

    def __str__(self):
        return f"{self.topic} {self.name}"
    
    def get_questions(self):
        questions = list(self.questions_set.all())
        random.shuffle(questions)
        return questions[:self.number_of_questions]

 


