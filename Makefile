dev:
	docker compose up --build

format:
	docker compose run --rm --build mailfang_com npm run format
