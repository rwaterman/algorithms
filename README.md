# Algorithms

Personal algorithm and data structure implementations grouped by language.
The repository is organized as a small multi-language workspace for practice,
reference, and cross-language implementation notes.

## Layout

- `python/` - Python package source and tests, managed with `uv`.
- `rust/` - Rust crate source, tests, and Cargo metadata.
- `typescript/` - TypeScript package source and tests, managed with npm.
- `Makefile` - root entry points for build, lint, and test workflows.

Language versions are pinned with project-local version files where applicable.

## Prerequisites

- `make`
- `uv`
- Rust toolchain with Cargo, rustfmt, and Clippy
- Node.js 24 or newer with npm

Install TypeScript dependencies before running the root commands for the first
time:

```zsh
cd typescript
npm install
```

Python dependencies are resolved by `uv` when the Python commands run.

## Root Commands

Run all project checks from the repo root:

```zsh
make build
make lint
make test
```

The root commands delegate to each language workspace:

- `make build` compiles or builds the Python, Rust, and TypeScript projects.
- `make lint` runs formatting, linting, and type-checking checks.
- `make test` runs the language-specific test suites.

## Language Commands

Use these when working in a single workspace.

### Python

```zsh
cd python
uv run python src/main.py
uv run pytest
uv run ruff check .
uv run ruff format --check .
```

### Rust

```zsh
cd rust
cargo build --locked
cargo test --locked
cargo fmt --check
cargo clippy --all-targets --all-features -- -D warnings
```

### TypeScript

```zsh
cd typescript
npm install
npm run build
npm test
npm run typecheck
```
