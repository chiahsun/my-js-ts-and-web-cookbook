import {basicSetup, EditorView} from "codemirror"

export function setupEditor(parent: HTMLDivElement) {
  new EditorView({
    doc: "console.log('hello')\n", // <1>
    extensions: [basicSetup], // <2>
    parent: parent // <3>
  })
}
