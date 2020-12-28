FROM drupal:latest

RUN apt-get update \
  && apt-get install -y vim git unzip

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs


COPY "./docker-egemsa.ini" "/usr/local/etc/php/conf.d/memory-limit-php.ini"