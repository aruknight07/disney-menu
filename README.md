# Disney Menu Project

This project is a front-end application built using [Vite](https://vitejs.dev/) and [Vitest](https://vitest.dev/) for testing. It is designed to display a menu for a Disney-themed application. The project includes development, build, and testing commands, and utilizes Vite for a fast and efficient development workflow. The project will generate a release bundle that will support chrome version 38.

## Constraints:
Chrome version 38 doesn't support the following features, thus, they were not implemented in the code:
- Web Components
- Intersection Observer API
- CSS Grid Layout

## Project Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/disney-menu.git
cd disney-menu
```

### 2. Install dependencies
```
npm install
```
This installs all the necessary dependencies, including Vite and Vitest.

### 3. Running the development server
To run the development server and see your changes live, use:
```
npm run dev
```
### 4. Building the project
To build the project for production, use:
```
npm run build

```
This will create an optimized build in the dist directory.


### 5. Previewing the production build
To preview the production build locally, use:
```
npm run preview
```

## Testing
### 1. Running tests
To run tests, use the following command:
```
npm run test
```
This will run Vitest, the testing framework used in this project.

### 2. Running browser-based tests
For browser-based tests, use:
```
npm run test:browser
```
This runs tests in a browser environment using Vitest's browser testing capabilities.


### 3. Running UI-based tests
To run UI tests with a visual interface, use:
```
npm run test:ui
```
This command enables Vitest's UI and coverage reporting, allowing you to interact with the test results in a browser.

## Development Tools
This project includes the following key development dependencies:

- Vite: A fast development server and build tool.
- Vitest: A testing framework with support for unit tests, browser tests, and UI-based testing.
- Playwright: A browser automation tool for end-to-end testing.
- Happy-Dom: A DOM implementation for testing.


