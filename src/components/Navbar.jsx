// import { Box, Button, HStack, Heading } from "@chakra-ui/react";
// import LanguageSelector from "./LanguageSelector";

// const Navbar = ({ language, onSelect, onRunCode, onDownload }) => {
//   return (
//     <HStack spacing={4} alignItems="center" p={4} bg="gray.800" color="white">
//       <Heading size="md" textAlign="center" flex="1">Online Compiler</Heading>
//       <LanguageSelector language={language} onSelect={onSelect} />
//       <Button variant="outline" colorScheme="green" onClick={onRunCode}>
//         Run Code
//       </Button>
//       <Button variant="outline" colorScheme="blue" onClick={onDownload}>
//         Download
//       </Button>
//     </HStack>
//   );
// };
import { Box, Button, Flex, Heading, Spacer,Text } from "@chakra-ui/react";
import LanguageSelector from "./LanguageSelector";

const Navbar = ({ language, onSelect, onRunCode, onDownload }) => {
    return (
        <Box bg="gray.800" color="white" p={4}>
            <Flex justifyContent="center" alignItems="center" mb={4}>
                <Heading size="md">Online Compiler</Heading>
            </Flex>
            <Flex alignItems="center">
                <Text mr={1} mb={5} color="gray.400" fontSize="lg" alignSelf="center">
                    Language:
                </Text>
                <LanguageSelector language={language} onSelect={onSelect} />
                <Spacer />
                <Button variant="outline" colorScheme="green" onClick={onRunCode} mr={2}>
                    Run Code
                </Button>
                <Button variant="outline" colorScheme="blue" onClick={onDownload}>
                    Download
                </Button>
            </Flex>
        </Box>
    );
};

export default Navbar;



// export default Navbar;



// import { Box, HStack, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { LANGUAGE_VERSIONS } from "../constants";

// const languages = Object.entries(LANGUAGE_VERSIONS);

// const Navbar = ({ language, onSelect, onRunCode, onDownload }) => {
//   return (
//     <Box bg="blue.900" color="white" px={4} py={2} shadow="md">
//       <HStack justifyContent="space-between">
//         <Text fontSize="2xl" fontWeight="bold">
//           Online Compiler
//         </Text>
//         <HStack spacing={4}>
//           <Menu>
//             <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="blue.700" _hover={{ bg: "blue.600" }}>
//               {language}
//             </MenuButton>
//             <MenuList bg="blue.800" borderColor="blue.600">
//               {languages.map(([lang, version]) => (
//                 <MenuItem
//                   key={lang}
//                   onClick={() => onSelect(lang)}
//                   _hover={{ bg: "blue.600" }}
//                   _focus={{ bg: "blue.600" }}
//                 >
//                   {lang} <Text as="span" color="gray.400" fontSize="sm">({version})</Text>
//                 </MenuItem>
//               ))}
//             </MenuList>
//           </Menu>
//           <Button
//             onClick={onRunCode}
//             colorScheme="green"
//             variant="solid"
//             _hover={{ bg: "green.500" }}
//           >
//             Run Code
//           </Button>
//           <Button
//             onClick={onDownload}
//             colorScheme="yellow"
//             variant="solid"
//             _hover={{ bg: "yellow.500" }}
//           >
//             Download
//           </Button>
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// export default Navbar;

