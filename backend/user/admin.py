from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin


@admin.register(User)
class UserAdmin(UserAdmin):
    readonly_fields = ('created', 'updated',)
    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2')}
         ),
    )
    # fields when reading / updating an instance
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'company', 'banner', 'location', 'avatar')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        ('Important dates', {'fields': ('created', 'updated',)}),
        ('Groups', {'fields': ('groups',)}),
    )
    # fields which are shown when looking at an list of instances
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    ordering = ('email',)
