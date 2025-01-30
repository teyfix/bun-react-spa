# Experimentals

This is a single-page React application created with Bun. It uses a `taskfile.yaml` for managing scripts instead of a `package.json` to avoid lockfile updates.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.2.1 or later)

### Installation

To install dependencies, run:

```bash
bun install
```

### Running the Application

To run the application, use:

```bash
task dev
```

## Taskfile

This project uses a `taskfile.yaml` to manage common tasks. Below are the available tasks:

### `build`

**Description:** Build the project for production.

**Command:**

```bash
task build
```

**Actions:**

- Clears the `dist` directory.
- Builds the project using `bun build` with minification and code splitting.

### `build:dev`

**Description:** Build the project for development.

**Command:**

```bash
task build:dev
```

**Actions:**

- Clears the `dist` directory.
- Builds the project using `bun build` with code splitting and watch mode enabled.

### `serve`

**Description:** Serve the built project.

**Command:**

```bash
task serve
```

**Actions:**

- Serves the contents of the `dist` directory using `bunx serve`.

### `dev`

**Description:** Serve the project for development.

**Command:**

```bash
task dev
```

**Actions:**

- Runs `build:dev` to build the project in development mode.
- Serves the built project using `serve`.

## Project Structure

- `src/`: Contains the source code of the application.
- `public/`: Contains static assets like `index.html`.
- `dist/`: The output directory for built files (created during build tasks).

## Version

This project is using version **3**.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute or report issues!
