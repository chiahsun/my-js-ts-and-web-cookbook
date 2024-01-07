import {basicSetup, EditorView} from "codemirror"
import {javascript} from "@codemirror/lang-javascript" // <1>


export function setupEditor(parent: HTMLDivElement) {
  new EditorView({
    doc: "console.log('hello')\n",
    extensions: [basicSetup, javascript()], // <2>
    parent: parent
  })
}
