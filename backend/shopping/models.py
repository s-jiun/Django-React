from django.db import models
from django.conf import settings
from django.urls import reverse
from django_ckeditor_5.fields import CKEditor5Field
from django.utils.translation import gettext_lazy as _


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Shop(TimestampedModel):
    manager = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    shop_name = models.CharField(max_length=100)
    caption = models.CharField(max_length=1024)
    like_shop_set = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name="like_shop_set")
    image = models.ImageField(upload_to="shopping/shop/%Y/%m/%d", default="shopping/shop/baseimg.jpg")

    def __str__(self):
        return self.shop_name

    def get_absolute_url(self):
        return reverse("shopping:product_list", args=[self.pk])

    def is_like_shop(self, user):
        return self.like_shop_set.filter(pk=user.pk).exists()


class Product(TimestampedModel):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    image = models.FileField(upload_to="shopping/product/%Y/%m/%d", default="shopping/shop/baseimg.jpg")
    product_name = models.CharField(max_length=500)
    price = models.IntegerField()
    content = CKEditor5Field(_("content"), blank=True, null=True, config_name='extends')

    def __str__(self):
        return self.product_name

    def get_absolute_url(self):
        return reverse("shopping:product_detail", args=[self.pk])


class Cart(TimestampedModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()


class Order(TimestampedModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
