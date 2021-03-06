from django.db import models


class FoodItem(models.Model):
    name = models.CharField(max_length=32)
    brand = models.ForeignKey("main.Brand", models.CASCADE)
    cost = models.IntegerField()
    gtin = models.CharField(max_length=14)

    serving_size = models.FloatField()
    serving_unit = models.CharField(max_length=16)
    serving_size_alt = models.CharField(
        max_length=32, help_text="Alternate human-readable serving size, e.g. '1 box'"
    )
    calories = models.IntegerField()
    nutrition = models.ManyToManyField("Nutrition")


class Nutrition(models.Model):
    field = models.ForeignKey("Nutrient", models.PROTECT)
    value = models.FloatField()


class Nutrient(models.Model):
    name = models.CharField(max_length=32)
    unit = models.CharField(max_length=16)
