import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export const ShowEditorState = () => {
  const [editor] = useLexicalComposerContext();
  return <button onClick={() => {
    const stateJson = editor.getEditorState().toJSON();
    console.log('');
    console.log(stateJson);
    console.log(JSON.stringify(stateJson));

  }}>Show editor state</button>
}