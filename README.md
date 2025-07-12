# EnterpriseApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Project structure

The application follows a feature-based architecture:

- **core** – singleton services and layout components (e.g. `HeaderComponent`).
- **shared** – reusable UI components such as buttons.
- **features** – lazy loaded modules (e.g. `dashboard`, `employee`).

Global SCSS files under `src/assets/scss` define variables, mixins and utilities used across the app. Bootstrap is imported for basic styling.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

