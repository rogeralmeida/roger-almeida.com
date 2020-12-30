build:
	yarn build
.PHONY: build

clear:
	docker-compose run --rm deploy s3 rm s3://roger-almeida.com --recursive
.PHONY: clear

deploy: build clear
	docker-compose run --rm deploy s3 sync out/ s3://roger-almeida.com
.PHONY: deploy