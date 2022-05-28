# Load .env to the Makefile
ifneq (,$(wildcard ./.env))
    include .env
    export
endif

# Docker
up:
	sh -c "docker-compose --file docker-compose.yml up -d"

down:
	sh -c "docker-compose --file docker-compose.yml down --volumes"

build:
	sh -c "docker-compose --file docker-compose.yml build ${service}"
