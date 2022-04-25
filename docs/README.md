# Backend - Documentation

This directory serves as a home base for the documentation.

## Overview

Our backend service is compromised of a few key resources:

* **Express**: Express is the library we are using to host our server
* **Jest**: Used for unit tests

## Repository Architecture

In order to maintain organization across our app, we have organized 
our repository in the following manner:

| Name    | Directory                 | Description                                               |
| ------- | ------------------------- | --------------------------------------------------------- |
| Utility | [`utils/`](./utility.md)  | `/utils/` maintains all our of utility functions          |
| Routing | [`www/`](./routing.md)    | `/www/` maintains all our routing logic for our endpoints |

## General Styling Rules

* All lines must end in a semicolon.
* Indentation uses two spaces.
* Component and interface names, imported assets, static functions, and static variables must be in PascalCase.
* Non-static functions, non-static variables, interface fields, and style classes must be in camelCase.
* For multiline blocks, opening braces/brackets must be on the same line as the preceding code, while closing braces/brackets must be on their own line.
* For interfaces, JSON files, etc. the last field **must** have a trailing comma in order to have clean file diffs.
* Local `import` statements must use relative file paths.