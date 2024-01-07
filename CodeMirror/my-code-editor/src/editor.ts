import {basicSetup, EditorView} from "codemirror"

export function setupEditor(parent: HTMLDivElement) {
  new EditorView({
    doc: "console.log('hello')\n",
    extensions: [basicSetup],
    parent: parent
  })
}
