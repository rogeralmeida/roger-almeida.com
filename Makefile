build:
	yarn build
.PHONY: build

deploy: build
	docker-compose run --rm deploy s3 sync out/ s3://roger-almeida.com
.PHONY: deploy