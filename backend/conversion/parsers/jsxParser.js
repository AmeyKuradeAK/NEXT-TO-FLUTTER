const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

/**
 * Parses JSX code and extracts elements, attributes, and props.
 * @param {string} nextjsCode - JSX/TSX code input.
 * @returns {object[]} Parsed JSX elements.
 */
function parseJSX(nextjsCode) {
    const ast = parser.parse(nextjsCode, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
    });

    let elements = [];

    traverse(ast, {
        JSXElement(path) {
            const elementType = path.node.openingElement.name.name;
            let attributes = {};

            // Extract props/attributes
            path.node.openingElement.attributes.forEach(attr => {
                if (attr.type === "JSXAttribute") {
                    attributes[attr.name.name] = attr.value?.value || "";
                }
            });

            elements.push({ type: elementType, attributes });
        }
    });

    return elements;
}

module.exports = { parseJSX };
