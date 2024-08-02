# email_reader/forms.py
from django import forms
from .models import EmailData

class EmailDataForm(forms.ModelForm):
    class Meta:
        model = EmailData
        fields = ['email_id', 'name', 'price', 'detail']
        widgets = {
            'email_id': forms.EmailInput(attrs={'class': 'form-control', 'readonly': False}),
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'price': forms.NumberInput(attrs={'class': 'form-control', 'step': '0.01'}),
            'detail': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
        }
    
    def clean_email_id(self):
        email_id = self.cleaned_data.get('email_id')
        if '@' not in email_id or '.' not in email_id:
            raise forms.ValidationError("Enter a valid email address.")
        return email_id

    # def clean_name(self):
    #     name = self.cleaned_data.get('name')
    #     if not name.isalpha():
    #         raise forms.ValidationError("Name should only contain letters.")
    #     return name

class EmailSearchForm(forms.Form):
    email_id = forms.EmailField(label='Email ID', max_length=255)
