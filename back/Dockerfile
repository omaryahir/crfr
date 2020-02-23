FROM python:3.8.1

RUN python -m pip install --upgrade pip

COPY requirements.txt requirements.txt 

RUN python -m install -r requirements.txt

COPY . . 

