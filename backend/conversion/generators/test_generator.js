const { mapToFlutter } = require("./flutterMapper");

const jsxInput = [
    {
        type: "div",
        props: {
            style: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }
        },
        children: [
            {
                type: "h1",
                props: { children: "Hello" }
            },
            {
                type: "button",
                props: { children: "Click", onClick: "handleClick" }
            }
        ]
    }
];

console.log("🔥 Converted Flutter Code:");
console.log(mapToFlutter(jsxInput).join("\n"));
