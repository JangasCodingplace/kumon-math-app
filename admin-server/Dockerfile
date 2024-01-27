FROM python:3.12-slim

# Kopieren Sie die Anwendungsabhängigkeiten in das Arbeitsverzeichnis
COPY requirements.txt .

# Installieren Sie die Anwendungsabhängigkeiten
RUN pip install --no-cache-dir -r requirements.txt

# Kopieren Sie den Rest des Anwendungsquellcodes in das Arbeitsverzeichnis
COPY ./app /app

# Legen Sie das Arbeitsverzeichnis innerhalb des Containers fest
WORKDIR /app

# Exponieren Sie den Port, auf dem die Anwendung ausgeführt wird
EXPOSE 80

# Starten Sie die Anwendung beim Containerstart
CMD ["python", "manage.py", "migrate", "&", "python", "manage.py", "runserver", "0.0.0.0:80"]
