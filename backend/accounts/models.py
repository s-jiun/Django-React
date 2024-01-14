from django.contrib.auth.validators import UnicodeUsernameValidator
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


class User(AbstractBaseUser, PermissionsMixin):
    username_validator = UnicodeUsernameValidator()
    username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        help_text=_(
            "150자 미만의 영문, 숫자,  @/./+/-/_ 기호만 포함해야 합니다."
        ),
        validators=[username_validator],
        error_messages={
            "unique": _("이미 존재하는 아이디입니다."),
        },
    )
    email = models.EmailField(_("email address"), blank=True)
    name = models.CharField(_("name"), max_length=150, blank=True)
    address = models.CharField(_("address"), max_length=1024, blank=True)
    zip_code = models.CharField(_("zip code"), max_length=10, blank=True)
    date_joined = models.DateTimeField(default=timezone.now)
    point = models.IntegerField(default=0)
    is_seller = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "name", "address", "zip_code"]


