FROM python:3.6.1
ADD . /pelican-site
WORKDIR /pelican-site
RUN pip install pelican markdown
