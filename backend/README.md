# Back end

This is the back end for this sample app.

## Configuration

### Windows

```bash
python3 -m venv env
.\env\Scripts\activate
pip install -r requirements.txt
```

## Setup

### Database

You will need the `.pg_service.conf` file. Follow [this guide](https://www.postgresql.org/docs/current/libpq-pgservice.html) to create it.

Then you'll need to run the following commands once before starting
```bash
python manage.py migrate
python manage.py createsuperuser --email youremail@email.com --username admin
```

## Starting

```bash
python manage.py runserver
```