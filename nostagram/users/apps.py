from django.apps import AppConfig


class UsersAppConfig(AppConfig):

    name = "nostagram.users"
    verbose_name = "Users"

    def ready(self):
        from .signals import user_signed_up
