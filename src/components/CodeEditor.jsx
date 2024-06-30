// \





import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../constants";

const CodeEditor = ({ value, language, onMount, onChange }) => {
  return (
    <Box>
      <Editor
        options={{
          minimap: {
            enabled: false,
          },
        }}
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
        onMount={onMount}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default CodeEditor;
