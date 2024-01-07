import {basicSetup, EditorView} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"


export function setupEditor(parent: HTMLDivElement) {
  new EditorView({
    doc: "console.log('hello')\n",
    extensions: [basicSetup, javascript()],
    parent: parent
  })
}
