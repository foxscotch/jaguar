# This Dockerfile assembles the Jaguar Postgres database.
#
# Image used:
# https://hub.docker.com/_/postgres/
#
FROM postgres

# Some secrets are insecurely stored here for now.
#
# See the "Docker Secrets" section of the image documentation to improve this in the future.
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB postgres

COPY init.sql /docker-entrypoint-initdb.d/
