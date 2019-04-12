# What even is this?

A thorough demo of everything you might want to configure for typescript library development in VS Code, along with a small example and unit tests.

Configures:
* TypeScript, for type checking etc.
* TypeDoc, for library documentation generation.
* Karma, for multi-browser unit testing.
* Jasmine, for writing the unit tests.
* NPM, for distribution of libraries.
* modularize-namespace, for global *and* modular libraries.

# Possible usage

```cmd
git clone https://github.com/MaulingMonkey/template_ts_library_vscode.git
mkdir NEW_PROJECT
cd NEW_PROJECT
npm init
robocopy ..\template_ts_library_vscode  .  *.* /S
```
* `package.json`:  Change `name`, then disable `private`.
* `.vscode/tasks.json`:  Replace/remove links to `github.com/MaulingMonkey/template_ts_library_vscode`, replace/remove `mmk.example` with your own namespace
* `{src,tests_global}/*.ts`:  Replace `mmk.example` with your own namespace
* `tasks/build_typescript.cmd`:  Replace `mmk.example` with your own namespace
* `npm install`
