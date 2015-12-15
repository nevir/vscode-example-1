# https://github.com/Microsoft/vscode/issues/1312

Setup:

```sh
nvm install $(cat .node-version)
npm install -g npm@$(cat .npm-version)
npm install
```

Repro Steps:

1. `code .`
2. `⇧⌘B` 
3. Modify `tasks.json`. _For example, comment out `"showOutput": "always",`._
4. `⇧⌘B` _note that VS Code doesn't ask to terminate the running task_ 
5. Observe that there are now two running `gulp` processes: `ps -A | grep gulp`.
6. Make a change to `tasks.json` again. _Note that you only see one "changed" message._
7. `⇧⌘B` (again, no termination; 3 `gulp` processes are active)
8. Make another change to `tasks.json`. _Notice that you now get two "changed" messages._