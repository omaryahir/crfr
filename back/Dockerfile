FROM python:3.8.1

ADD . /back
WORKDIR /back

RUN python3 -m venv env 
RUN source env/bin/activate
COPY requirements.txt requirements.txt 
RUN pip3 install -r requirements.txt
#CMD ["gunicorn", "-w 2", "-b", ":8000", "app:app"]
CMD gunicorn -w 2 -b :8000 app:app
