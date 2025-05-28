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
