Installation
NPM / Yarn
npm install vue-input-tag --save
yarn add vue-input-tag
Then you need to import and register it:

import InputTag from 'vue-input-tag'
Vue.component('input-tag', InputTag)
CDN

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-input-tag"></script>

Then you need to register it:

Vue.component('input-tag', vueInputTag.default)

Usage
<input-tag v-model="tags"></input-tag>
Props
Name Type Default Description
value Array [] Tags to be render in the input
placeholder String "" Placeholder to be shown when no tags
read-only Boolean false Set input to readonly
add-tag-on-blur Boolean false Add tag on input blur
limit String or Number -1 (none) Set a limit for the amount of tags
validate String or Function (allows async) or Object "" Apply certain validator for user input. Choose from email, url, text, digits or isodate. Or pass a function or a RegExp object for custom validation
add-tag-on-keys Array [ 13 (return), 188 (comma), 9 (tab) ] Keys that are going to add the new tag
allow-duplicates Boolean false Allow duplicate tags
before-adding Function null Function (allows async) to normalize tag before adding. E.g (tag) => tag.toUpperCase()

{
"editor.wordWrap": "on",
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
"liveServer.settings.CustomBrowser": "chrome",
"workbench.statusBar.visible": true,
"liveServer.settings.donotShowInfoMsg": true,
// Define o tema do VSCode
"workbench.colorTheme": "Dracula",
// Configura tamanho e família da fonte
"editor.fontSize": 12,
"editor.lineHeight": 25,
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
// Aplica linhas verticais para lembrar de quebrar linha em códigos muito grandes
"editor.rulers": [
80,
120
],
// Aplica um sinal visual na esquerda da linha selecionada
"editor.renderLineHighlight": "gutter",
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true,
"eslint.validate": [
{
"language": "vue",
"autoFix": true
},
{
"language": "html",
"autoFix": true
},
{
"language": "css",
"autoFix": true
},
{
"language": "sass",
"autoFix": true
},
{
"language": "scss",
"autoFix": true
},
{
"language": "js",
"autoFix": true
},
{
"language": "json",
"autoFix": true
},
{
"language": "javascript",
"autoFix": true
},
{
"language": "javascriptreact",
"autoFix": true
},
{
"language": "javascriptvue",
"autoFix": true
},
{
"language": "typescript",
"autoFix": true
},
{
"language": "typescriptreact",
"autoFix": true
}
],
// Aumenta a fonte do terminal
"terminal.integrated.fontSize": 14,
// Define o tema dos ícones na sidebar
"workbench.iconTheme": "material-icon-theme",
"workbench.startupEditor": "newUntitledFile",
"editor.tabSize": 2,
"window.zoomLevel": 0,
"extensions.ignoreRecommendations": false,
"emmet.syntaxProfiles": {
"javascript": [
"js",
"jsx"
],
"nunjucks": "html"
},
"emmet.includeLanguages": {
"javascript": "javascriptreact",
"nunjucks": "html"
},
"javascript.updateImportsOnFileMove.enabled": "never",
"gitlens.codeLens.recentChange.enabled": false,
"gitlens.codeLens.authors.enabled": false,
"gitlens.codeLens.enabled": false,
"breadcrumbs.enabled": true,
"git.enableSmartCommit": true,
"editor.parameterHints.enabled": false,
"typescript.updateImportsOnFileMove.enabled": "never",
"terminal.integrated.shell.osx": "/bin/zsh",
"explorer.confirmDragAndDrop": false,
"liveshare.featureSet": "insiders",
"explorer.confirmDelete": false,
"typescript.tsserver.log": "verbose",
"workbench.sideBar.location": "left",
"workbench.activityBar.visible": true,
"vsicons.dontShowNewVersionMessage": true,
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"workbench.colorCustomizations": {
"terminal.background": "#1D2021",
"terminal.foreground": "#A89984",
"terminalCursor.background": "#A89984",
"terminalCursor.foreground": "#A89984",
"terminal.ansiBlack": "#1D2021",
"terminal.ansiBlue": "#0D6678",
"terminal.ansiBrightBlack": "#665C54",
"terminal.ansiBrightBlue": "#0D6678",
"terminal.ansiBrightCyan": "#8BA59B",
"terminal.ansiBrightGreen": "#95C085",
"terminal.ansiBrightMagenta": "#8F4673",
"terminal.ansiBrightRed": "#FB543F",
"terminal.ansiBrightWhite": "#FDF4C1",
"terminal.ansiBrightYellow": "#FAC03B",
"terminal.ansiCyan": "#8BA59B",
"terminal.ansiGreen": "#95C085",
"terminal.ansiMagenta": "#8F4673",
"terminal.ansiRed": "#FB543F",
"terminal.ansiWhite": "#A89984",
"terminal.ansiYellow": "#FAC03B"
// "terminal.background": "#282936",
// "terminal.foreground": "#E9E9F4",
// "terminalCursor.background": "#E9E9F4",
// "terminalCursor.foreground": "#E9E9F4",
// "terminal.ansiBlack": "#282936",
// "terminal.ansiBlue": "#62D6E8",
// "terminal.ansiBrightBlack": "#626483",
// "terminal.ansiBrightBlue": "#62D6E8",
// "terminal.ansiBrightCyan": "#A1EFE4",
// "terminal.ansiBrightGreen": "#EBFF87",
// "terminal.ansiBrightMagenta": "#B45BCF",
// "terminal.ansiBrightRed": "#EA51B2",
// "terminal.ansiBrightWhite": "#F7F7FB",
// "terminal.ansiBrightYellow": "#00F769",
// "terminal.ansiCyan": "#A1EFE4",
// "terminal.ansiGreen": "#EBFF87",
// "terminal.ansiMagenta": "#B45BCF",
// "terminal.ansiRed": "#EA51B2",
// "terminal.ansiWhite": "#E9E9F4",
// "terminal.ansiYellow": "#00F769"
},
"[css]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"code-runner.clearPreviousOutput": true,
"[scss]": {
"editor.defaultFormatter": "dweber019.vscode-style-formatter"
},
"[vue]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[html]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[sql]": {
"editor.defaultFormatter": "adpyke.vscode-sql-formatter"
},
"[jsonc]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"eslint.migration.2_x": "off",
"editor.formatOnPaste": true,
"editor.formatOnType": true,
"terminal.integrated.rendererType": "dom",
"liveServer.settings.donotVerifyTags": true,
"editor.suggestSelection": "first",
"vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
"todo-tree.tree.showScanModeButton": false
}
