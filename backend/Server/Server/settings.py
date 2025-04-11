from pathlib import Path
import os


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-r!6zn-6ug7-69i$-p8sg((i=be3v4$899x&k4gd49c(^c@ml)e'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    # Admin Third Party
    'jazzmin',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-Parties 
    'rest_framework',
    'corsheaders',

    # Custom-Apps
    'Projects.apps.ProjectsConfig',
    'Blogs.apps.BlogsConfig',
    'Contacts.apps.ContactsConfig',
    'Skills.apps.SkillsConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'Server.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Server.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = 'static/'
MEDIA_URL = 'media/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'




# Jazzmin
JAZZMIN_SETTINGS = {
    "site_title": "Mobin Developer",  # Site title in Persian
    "site_header": "Admin",  # Site header in Persian
    "site_brand": "Mobin Heydari",  # Site brand in Persian
    "welcome_sign": "Wellcom",  # Welcome sign in Persian
    "copyright": "Mobin_Developer",  # Copyright in Persian
    "search_model": "auth.User",  # Model to search in admin
    "show_docs": False,
    
    # Top menu settings
    "topmenu_links": [
        {"name": "Dashboard", "url": "admin:index", "permissions": ["auth.view_user"]},  # Dashboard in Persian
        {"model": "auth.User"},
        {"model": "auth.Group"},
    ],

    # Customizing the sidebar
    "user_menu": "django.contrib.auth.models.User",
    "show_sidebar": True,
    "sidebar": True,
    "sidebar_menu": [
        {"name": "Dashboard", "url": "admin:index"},  # Dashboard in Persian
    ],

    # Theme settings
    "theme": "dark",  # Choose from 'default', 'dark', 'light', or custom themes
    "color_scheme": "default",  # You can set a color scheme here

    # Other settings
    "show_ui_builder": True,  # Show the UI builder button
    "show_settings": True,     # Show the settings button
    "show_logout": True,       # Show the logout button

    # RTL and Language settings
    "default": {
        "language": "fa",  # Set default language to Persian
        "rtl": True,       # Enable RTL layout
    },
    
    "custom_css": "css/admin.css",
    "custom_js": "js/admin.js",
}

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',  # Example: Your frontend's URL
]

CORS_ALLOW_ALL_ORIGINS = True