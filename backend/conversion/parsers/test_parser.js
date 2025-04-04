const { parseJSX } = require("./jsxParser");

const jsxCode = `
    <div className="bg-gray-500 p-4 text-white">
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Hello World</h1>
        <button className="px-4 py-2 bg-blue-600 text-white">Click Me</button>
    </div>
`;

console.log("🔍 Parsed JSX Output:\n", JSON.stringify(parseJSX(jsxCode), null, 2));
