# Day 22

## Angular project architecture

### Main Directories

- **node_modules/**:
  - Role: Contains all third party libraries and dependencies necessary for the project, all packages listed in `package.json` downloaded in it.
  - Important: NEVER MODIFY IT!!!
- **src/**:
  - Role: Core of api, All source files in it
- **src/app/**:
  - Role: Where the logic is developped. Components, services, modules and other app specific elements are in here
- **src/assets/**:
  - Role: This directory is for static files your application uses, such as images, icons, configuration JSON files, fonts, etc. The Angular CLI is configured to automatically copy the contents of this folder into your build output folder (dist/) during compilation.
- **src/environments/**:
  - Role: This directory contains files that allow you to define different configurations for various environments (e.g., development, production, staging).

### Key Files

- **`angular.json`**:
  - **Role**: This is the main configuration file for the entire Angular project. It's used by the Angular CLI.
  - **Content**: It defines build configurations, generation schematics (how `ng generate` should work), testing options, asset paths, global styles, and much more. This is where you configure the CLI's behavior.
  - **Example Information**: What the source directory is (`src/`), where compiled files should be placed (`outputPath`), what global style files are used, etc.

- **`package.json`**:
  - **Role**: This file is a standard in the Node.js/npm ecosystem. It contains your project's metadata (name, version, description) and, most importantly, all its dependencies and scripts.
  - **Key Content**:
    - `"dependencies"`: Packages required for your application to run in production.
    - `"devDependencies"`: Packages required only during development (like TypeScript, the Angular CLI, linters, testing tools).
    - `"scripts"`: Command shortcuts you can run with `npm run` (e.g., `npm start`, `npm build`).

- **`tsconfig.json`**:
  - **Role**: The configuration file for the TypeScript compiler for your project. It tells TypeScript how to transpile your `.ts` code into `.js`.
  - **Key Content**: `compilerOptions` (target JavaScript version, module system, strict typing options, etc.), and files to include or exclude.

- **`src/main.ts`**:
  - **Role**: This is the **main entry point** of your Angular application. It's the first TypeScript file executed when the application starts.
  - **What it does**: It initializes the Angular environment, enables production mode if necessary, and, crucially, it "bootstraps" (starts) your application's root module (generally `AppModule`).

- **`src/index.html`**:
  - **Role**: This is the **single HTML file** of your Single Page Application (SPA). Angular takes control of this page and dynamically injects all your application's content into it.
  - **Important**: It contains the `<app-root></app-root>` tag (if your root component is named `AppComponent`), which is the anchor point where your Angular application is loaded.

- **`src/app/app.module.ts`**:
  - **Role**: This is your application's **root module** (by default). Every Angular application has at least one root module.
  - **What it does**: It declares the components, services, pipes, and directives that belong to this module. It also imports other Angular modules or third-party modules your application needs (`BrowserModule`, `HttpClientModule`, `FormsModule`, `RouterModule`, etc.). It's the "orchestrator" of your application.

- **`src/app/app.component.ts`, `app.component.html`, `app.component.css`**:
  - **Role**: These are the files for the **root component** (`AppComponent`). This component is the first one the root module loads and displays.
  - **`app.component.ts`**: The logic (TypeScript class).
  - **`app.component.html`**: The HTML template for this component.
  - **`app.component.css`**: The styles specific to this component.

## Single Page Application

**What is an SPA?**

An SPA is a web application that loads only once at the beginning and then **interacts with the user by dynamically rewriting the current web page's content** rather than loading entirely new pages from a server with each interaction.

**How Angular implements the SPA:**

1. **Single Initial Load (`index.html`):** At startup, the browser loads a single HTML file (`index.html`) and a bundle of JavaScript files (your compiled Angular application).
2. **JavaScript Takes Control:** Once your Angular application's JavaScript is loaded, it takes control of the `index.html`'s DOM (Document Object Model) (primarily via the `<app-root>` tag).
3. **Client-Side Rendering:** All subsequent interactions (navigating to other "pages," clicking buttons, submitting forms) are handled by Angular's JavaScript, which dynamically modifies the DOM. The browser **does not make full requests** to the server to get new HTML pages.
4. **Backend API (RESTful):** To get or submit data, the SPA communicates with a server via API requests (often RESTful) that return data (generally in JSON format) rather than complete HTML pages. Angular provides the `HttpClient` module to facilitate these requests.
5. **Performance and User Experience:** SPAs offer a smoother and faster user experience, as "page" loading times are almost instantaneous after the initial load.
