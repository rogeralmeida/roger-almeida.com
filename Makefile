build:
	yarn build
.PHONY: build

clear:
	docker-compose run --rm deploy s3 rm s3://roger-almeida.com --recursive
.PHONY: clear

deploy: build clear
	docker-compose run --rm deploy s3 sync out/ s3://roger-almeida.com
.PHONY: deploy

dev:
	docker-compose run --rm app yarn dev
.PHONY: dev

install:
	rm -rf node_modules/
	docker-compose run --rm app yarn install
.PHONY: install