-include .env
NODE_VERSION ?= 24

dev:
	docker compose up --build

format:
	docker compose run --rm --build mailfang_com npm run format

lock:
	docker run --rm \
		-v "$(CURDIR)":/app \
		-w /app \
		-u "$(shell id -u):$(shell id -g)" \
		-e HOME=/tmp \
		node:$(NODE_VERSION)-alpine \
		sh -c "npm install --package-lock-only && npm ci --dry-run"
