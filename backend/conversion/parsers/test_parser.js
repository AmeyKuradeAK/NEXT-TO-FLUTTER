const { parseJSX } = require("./jsxParser");

const sampleJSX = `
function App() {
    return <div className="container">
        <h1>Hello, World!</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>;
}
`;

console.log("Parsed JSX:", JSON.stringify(parseJSX(sampleJSX), null, 2));
