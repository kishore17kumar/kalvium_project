// 



// import { Box, VStack, HStack } from "@chakra-ui/react";
// import { useState, useRef } from "react";
// import CodeEditor from "./components/CodeEditor";
// import Output from "./components/Output";
// import Navbar from "./components/Navbar";
// import { CODE_SNIPPETS } from "./constants";
// import { executeCode } from "./api";

// function App() {
//   const editorRef = useRef();
//   const [language, setLanguage] = useState("javascript");
//   const [value, setValue] = useState(CODE_SNIPPETS[language]);
//   const [output, setOutput] = useState(null);
//   const [isError, setIsError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const onMount = (editor) => {
//     editorRef.current = editor;
//     editor.focus();
//   };

//   const onSelect = (language) => {
//     setLanguage(language);
//     setValue(CODE_SNIPPETS[language]);
//   };

//   const runCode = async () => {
//     const sourceCode = editorRef.current.getValue();
//     if (!sourceCode) return;
//     try {
//       setIsLoading(true);
//       const result = await executeCode(language, sourceCode);
//       setOutput(result.output.split("\n"));
//       result.stderr ? setIsError(true) : setIsError(false);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const downloadCode = () => {
//     const element = document.createElement("a");
//     const file = new Blob([editorRef.current.getValue()], { type: "text/plain" });
//     element.href = URL.createObjectURL(file);
//     element.download = `${language}_code.${language === "javascript" ? "js" : language}`;
//     document.body.appendChild(element);
//     element.click();
//   };

//   return (
//     <Box minH="100vh" bg="#0f0a19" color="gray.500">
//       <Navbar
//         language={language}
//         onSelect={onSelect}
//         onRunCode={runCode}
//         onDownload={downloadCode}
//       />
//       <HStack spacing={4} px={6} py={4}>
//         <Box w="50%">
//           <CodeEditor
//             value={value}
//             language={language}
//             onMount={onMount}
//             onChange={(value) => setValue(value)}
//           />
//         </Box>
//         <Box w="50%">
//           <Output output={output} isError={isError} isLoading={isLoading} />
//         </Box>
//       </HStack>
//     </Box>
//   );
// }

// export default App;


import { Box, VStack, HStack } from "@chakra-ui/react";
import { useState, useRef } from "react";
import CodeEditor from "./components/CodeEditor";
import Output from "./components/Output";
import Navbar from "./components/Navbar";
import { CODE_SNIPPETS } from "./constants";
import { executeCode } from "./api";

function App() {
  const editorRef = useRef();
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS[language]);
  const [output, setOutput] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      console.log(`Running code for language: ${language}`);
      const result = await executeCode(language, sourceCode);
      console.log("Execution result:", result);

      // Ensure the result has the expected structure
      if (result && result.run) {
        const output = result.run.output;
        const stderr = result.run.stderr;

        // If there is stderr, mark it as an error
        if (stderr) {
          setIsError(true);
          setOutput(stderr.split("\n"));
        } else {
          setIsError(false);
          setOutput(output ? output.split("\n") : ["No output"]);
        }
      } else {
        setIsError(true);
        setOutput(["Unexpected API response structure"]);
      }
    } catch (error) {
      console.error("Error running code:", error);
      setIsError(true);
      setOutput(["Error running code"]);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([editorRef.current.getValue()], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${language}_code.${language === "javascript" ? "js" : language}`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500">
      <Navbar
        language={language}
        onSelect={onSelect}
        onRunCode={runCode}
        onDownload={downloadCode}
      />
      <HStack spacing={4} px={6} py={4}>
        <Box w="50%">
          <CodeEditor
            value={value}
            language={language}
            onMount={onMount}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Box w="50%">
          <Output output={output} isError={isError} isLoading={isLoading} />
        </Box>
      </HStack>
    </Box>
  );
}

export default App;
