/**
 * Maps JSX elements to Flutter widgets.
 * @param {object[]} parsedJSX - Parsed JSX AST elements.
 * @returns {string[]} List of Flutter widget representations.
 */
function mapToFlutter(parsedJSX) {
    return parsedJSX.map(element => {
        const { type, props, children = [] } = element; // Ensure children is always an array

        if (type === "div") {
            return `Container(
  child: Column(
    children: [
${children.length > 0 ? children.map(child => "      " + mapToFlutter([child])).join(",\n") : ""}
    ],
  ),
)`;
        }

        if (type === "h1") {
            return `Text(
  "${props?.children || ''}",
  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
)`;
        }

        if (type === "button") {
            return `ElevatedButton(
  onPressed: () {
    ${props?.onClick ? `${props.onClick}();` : "print('Button clicked!');"}
  },
  child: Text("${props?.children || 'Click'}"),
)`;
        }

        return `Text("${props?.children || ''}")`; // Default for unknown elements
    });
}

module.exports = { mapToFlutter };
