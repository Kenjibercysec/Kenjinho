---
title: Django SINGED
published: 2025-02-20
updated: 2025-03-04
description: 'Django version of the SINGED application'
image: ''
tags: [Projects]
category: 'Projects'
draft: false 
---

## GitHub Repository 
::github{repo="Kenjibercysec/Singed_ButInDjango"}

--- 


# Django Project - FreshStart  

This is a Django project named **FreshStart**. This project was generated using Django 5.1.6 and serves as a starting point for web application development.


## Project Structure  
```bash
📦FreshStart
├─📂projeto/ # Core Django configurations
└─📂home/ # Main app (views, models, templates, static)
```


## 🛠️ Setup and Installation  

### Prerequisites  
- Python 3.8+  
- Django 5.1.6  
- SQLite (or another database)  

___ 

### Quick Start  
1. Clone the repository:  
```bash
git clone https://github.com/seu-usuario/FreshStart.git
cd FreshStart
```
2. Create and activate virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```
3. Install dependencies
```bash
pip install -r requirements.txt
```
4. Apply migrations
```bash
python manage.py migrate
```
5. Start the development server
```bash
python manage.py runserver
```
6. Access in your browser
```bash
"🌐 http://127.0.0.1:8000"
```
---

# Directory Structure
```bash
"📂 Directory Structure"
"projeto/"
"├─ settings.py    # Django configurations"
"├─ urls.py        # URL routing"
"└─ wsgi.py        # WSGI setup"
""
"home/"
"├─ static/        # CSS, JS, images"
"├─ templates/     # HTML templates"
"├─ views.py       # Application logic"
"└─ models.py      # Database models"
```
# Important Configurations
```bash
"⚙️ Important Configurations"
"Static Files Setup"
"Add this to projeto/settings.py:"
"STATIC_URL = '/static/'"
"STATICFILES_DIRS = [BASE_DIR / 'home' / 'static']"
```
# Pro Tip
```bash
"🔄 Pro Tip: Use python manage.py makemigrations after modifying models to generate new migrations."
```