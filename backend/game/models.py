from django.db import models


class Game(models.Model):
    game_id = models.AutoField(primary_key=True)
    game_name = models.CharField(max_length=100)
    max_players = models.IntegerField()
    min_players = models.IntegerField()
    double_court_only = models.BooleanField(default=False)
    game_genre = models.CharField(max_length=100)
    game_image = models.ImageField(upload_to='game_images', null=True, blank=True)
    description = models.CharField(max_length=500)
    play_time = models.IntegerField()

    def __str__(self):
        return f'{self.game_name} - {self.game_genre} - {self.description}'
