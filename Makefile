.PHONY: build build-python build-rust build-typescript lint lint-python lint-rust lint-typescript test test-python test-rust test-typescript

build: build-python build-rust build-typescript

build-python:
	cd python && uv run python -m compileall src tests

build-rust:
	cd rust && cargo build --locked

build-typescript:
	cd typescript && npm run build

lint: lint-python lint-rust lint-typescript

lint-python:
	cd python && uv run ruff check .
	cd python && uv run ruff format --check .

lint-rust:
	cd rust && cargo fmt --check
	cd rust && cargo clippy --all-targets --all-features -- -D warnings

lint-typescript:
	cd typescript && npm run typecheck

test: test-python test-rust test-typescript

test-python:
	cd python && uv run pytest

test-rust:
	cd rust && cargo test --locked

test-typescript:
	cd typescript && npm test
