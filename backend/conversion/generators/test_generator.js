const { parseJSX } = require("../parsers/jsxParser");
const { mapToFlutter } = require("../generators/flutterMapper");
const { generateDartFile } = require("../generators/dartGenerator");

const sampleJSX = `
function App() {
    return <div className="container">
        <h1>Hello, World!</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>;
}
`;

const parsedJSX = parseJSX(sampleJSX);
const flutterWidgets = mapToFlutter(parsedJSX);
const dartCode = generateDartFile(flutterWidgets);

console.log("🚀 Generated Dart Code:\n", dartCode);
