# Day 20

## Difference between Node and NPM

- **Node**: Runtime Environment, -> Special program, allows t execute JS outside of a web browser.
- **NPM (Node Package Manager)**: Package Manager -> bundled with Node.js; Manage external libraries.

Need Node.js to run JS code and NPM helps manage it.

## NPM, Yarn and PNPM

- NPM: Default package manager
- Yarn: Developped by Facebook, now community run. Faster install time and safer than npm
- PNPM: More efficient with disk space and faster install times.

### Differences between each one

| Feature            | NPM                                       | Yarn                                      | PNPM                                         |
| :----------------- | :---------------------------------------- | :---------------------------------------- | :------------------------------------------- |
| **Installation** | Comes with Node.js                         | Needs to be installed separately          | Needs to be installed separately             |
| **Speed** | Improved significantly over time; generally good | Often faster than NPM for initial installs | Claimed to be the fastest, especially with many projects |
| **Disk Space** | Creates duplicate `node_modules`         | Creates duplicate `node_modules`         | Efficient; uses a single store and hard links |
| **Consistency** | `package-lock.json` ensures consistency | `yarn.lock` ensures consistency           | `pnpm-lock.yaml` ensures consistency         |
| **Community** | Largest                                   | Large                                     | Growing                                      |

#### Quick Summary

- **NPM:** The default, widely used, and reliable choice.
- **Yarn:** Historically offered performance and consistency advantages, still a strong alternative.
- **PNPM:** Focuses on disk space efficiency and speed through unique linking mechanisms, gaining popularity for monorepos and multiple projects.

### Choosing a Package Manager

- **NPM:** A solid default for most projects, especially if you're new to Node.js.
- **Yarn:** Consider if you need consistently fast installs or prefer its specific CLI syntax.
- **PNPM:** Ideal if you manage many Node.js projects on your machine and want to optimize disk usage and installation times.

### What a Node Package is

- Reusable piece of code that someone else wrote and published.

- Share solutions to common problems.

## Basic NodeJS commands

### Initialize Node Project

- create `package.json` file:

```bsh
npm init
```

- Answer the questions asked

### Understand `package.json` file

- Heart of node.js project

Includes:

- name: Name of project
- version: Current version of project
- description: Short description of project
- main: Entry point of application
- scripts: Custom commands you can run
- keywords: Array of strings that describe your project
- author: Project's author
- license: License under which the project is distributed
- dependencies: Object; list production dependencies -> mandatory for code to run
- devDependencies: Object; list dev dependencies -> only for testing
- engines: Specify node.js version necessary
- repository: Where source code is hosted

### Install a package

- Local install: Install the package directly inside of the project.

- Global Install: Install package globally on the machine

### Uninstall package

- Local: Remove package from node_module and from dependencies and devDependencies in package.json

- Global: Remove whole package

### Update package

```bsh
npm update <package name>
```

## Linters and Formatters

**Linters**: Tools that analyzes code for errors. Identifies unused variables, security vulnerabilities or anti-patterns.

**Formatters**: Automatically reformat code to match specific style guide. Focus only on aesthetic.

### Differences

| Feature     | Linter (e.g., ESLint)                                       | Formatter (e.g., Prettier)                                  |
| :---------- | :---------------------------------------------------------- | :---------------------------------------------------------- |
| **Purpose** | **Code Quality & Style Adherence:** Finds potential errors, enforces best practices, and identifies stylistic issues that might lead to bugs. | **Code Aesthetics & Consistency:** Automatically adjusts code layout, spacing, and formatting to a predefined style. |
| **Focus** | Behavior, potential bugs, code structure, code correctness. | Readability, consistent visual presentation.                |
| **Action** | Warns, errors, suggests fixes. Can often auto-fix some issues. | Automatically rewrites code formatting.                     |
| **Example** | "You have an unused variable." "Avoid using `var`." "This function is too complex." | "Add a semicolon." "Change indentation from 2 to 4 spaces." "Wrap this line if it's too long." |

### Key Differences & Synergy

- **Linters** are about **code correctness and best practices**, helping you write *better* code by catching logical and structural issues.
- **Formatters** are about **code presentation and consistency**, making your code *prettier* and easier to read across a team.

It's common and highly recommended to use both together (e.g., **ESLint + Prettier**) to achieve both high code quality and consistent formatting. You typically configure them to work in harmony, with the formatter handling stylistic rules and the linter focusing on potential errors and semantic issues.

### Global or Local?

Local install is almost always going to be prefered for the following reasons:

- Different rules for different projects
- Version control: Specify version of linters, formatters and dependencies, so that people who join can see them.
- Dependency management: Keep global environment clean and avoids conflict

## Nodemon

- Utility that monitors any changes in the source code and automatically restart the app when it detects changes.

- Boost developer productivity during development

-> Automates restart process

## TypeScript

- Strongly typed language based on javascript

It offers:

- Static Typing: Specify type of variables
- Early Error Detection: Code doesn't compile if errors
