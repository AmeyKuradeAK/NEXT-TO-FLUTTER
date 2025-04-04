const babel = require('@babel/parser');
const traverse = require('@babel/traverse').default;

/**
 * Extracts JSX elements, props, and styles from JSX code
 */
function parseJSX(jsxCode) {
    const ast = babel.parse(jsxCode, { sourceType: "module", plugins: ["jsx", "typescript"] });

    let elements = [];

    traverse(ast, {
        JSXElement(path) {
            const openingElement = path.node.openingElement;
            const tagName = openingElement.name.name;
            let props = {};
            let styles = {};
            let classes = [];

            // Extract props (like onClick, href, etc.)
            openingElement.attributes.forEach(attr => {
                if (attr.name.name === "style" && attr.value.expression) {
                    styles = extractInlineStyles(attr.value.expression.properties);
                } else if (attr.name.name === "className") {
                    classes = extractClassNames(attr.value.value);
                } else {
                    props[attr.name.name] = attr.value.value;
                }
            });

            elements.push({ tagName, props, styles, classes });
        }
    });

    return elements;
}

/**
 * Extract inline styles from JSX style objects
 */
function extractInlineStyles(styleProperties) {
    let styles = {};
    styleProperties.forEach(prop => {
        styles[prop.key.name] = prop.value.value;
    });
    return styles;
}

/**
 * Extract class names (Tailwind or CSS classes)
 */
function extractClassNames(classString) {
    return classString ? classString.split(" ") : [];
}

module.exports = { parseJSX };
