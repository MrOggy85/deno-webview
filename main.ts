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
    event.preventDefault();
  }
  if (event.metaKey && event.key === 'v') {
    document.execCommand("paste")
    event.preventDefault();
  }
})
`;

webview.eval(copyPasteShortcut);

await webview.run();
