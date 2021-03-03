Deno.env.set('PLUGIN_URL', 'hello')

import { config, Webview } from "./deps.ts";

let URL = "";
let TITLE = "";
try {
  URL = config().URL;
  TITLE = config().TITLE;
} catch (error) {
  console.error(error);
  Deno.exit(1);
}

const webview = new Webview({
  url: URL,
  title: TITLE,
  width: 1000,
  height: 800,
});

const copyPasteShortcut = `
window.addEventListener("keypress", (event) => {
  if (event.metaKey && event.key === 'c') {
    document.execCommand("copy")
    navigator.clipboard.writeText(window.getSelection().toString())
    event.preventDefault();
  }
  if (event.metaKey && event.key === 'v') {
    document.execCommand("paste")
    event.preventDefault();
  }
})
`;

const evalResult = webview.eval(copyPasteShortcut);
console.log('evalResult', evalResult)

try {
  await webview.run();
  console.log('closed webview');
} catch (error) {
  console.log('error', error)
}

Deno.exit(0);
