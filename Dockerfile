FROM rocker/r-ver:latest

RUN apt-get update && \
    apt-get install -y librsvg2-dev

RUN R -e "options(warn=2); install.packages(c('httpuv', 'jsonlite', 'openssl', 'mime', 'zip', 'base64enc', 'rsvg', 'pwr', 'devtools'))"

WORKDIR /app
COPY . .

ENTRYPOINT ["R", "-f", "run-backend.R"]
EXPOSE 7788
