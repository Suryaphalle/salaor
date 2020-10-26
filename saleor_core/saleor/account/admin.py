from django.apps import apps
from django.contrib import admin

models = apps.get_models()
    
for model in models:
    try:
        if model.__name__ in ['ConversionRate', 'VAT']:
            continue
        admin.site.register(model)
    except Exception as e:
        pass