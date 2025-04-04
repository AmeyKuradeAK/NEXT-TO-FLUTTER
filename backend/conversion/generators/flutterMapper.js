/**
 * Maps JSX elements to Flutter widgets.
 * @param {object[]} parsedJSX - Parsed JSX AST elements.
 * @returns {string[]} List of Flutter widget representations.
 */
function mapToFlutter(parsedJSX) {
  return parsedJSX.map(element => {
      const { type, props, children = [] } = element;
      const style = props?.style || {}; // Ensure style is defined

      // Extract styling properties
      const width = style.width ? `width: ${style.width},` : "";
      const height = style.height ? `height: ${style.height},` : "";
      const padding = style.padding ? `padding: EdgeInsets.all(${style.padding}),` : "";
      const margin = style.margin ? `margin: EdgeInsets.all(${style.margin}),` : "";
      const bgColor = style.backgroundColor ? `color: ${convertColor(style.backgroundColor)},` : "";

      // Border and border-radius
      const borderRadius = style.borderRadius ? `borderRadius: BorderRadius.circular(${style.borderRadius}),` : "";
      const border = style.border ? `border: Border.all(color: ${convertColor(style.borderColor || 'black')}, width: ${style.borderWidth || 1}),` : "";

      if (type === "div") {
          if (style.display === "flex") {
              const flexDirection = style.flexDirection === "column" ? "Column" : "Row";
              const mainAxis = style.justifyContent === "space-between" ? "MainAxisAlignment.spaceBetween" :
                               style.justifyContent === "center" ? "MainAxisAlignment.center" :
                               "MainAxisAlignment.start";

              const crossAxis = style.alignItems === "center" ? "CrossAxisAlignment.center" :
                                "CrossAxisAlignment.start";

              // Handle "gap" (add SizedBox between children)
              const childrenFlutter = children.map((child, index) => {
                  let mappedChild = mapToFlutter([child]);
                  if (style.gap && index !== children.length - 1) {
                      mappedChild += `,\n    SizedBox(${flexDirection === "Row" ? "width" : "height"}: ${style.gap})`;
                  }
                  return mappedChild;
              }).join(",\n    ");

              return `${flexDirection}(
mainAxisAlignment: ${mainAxis},
crossAxisAlignment: ${crossAxis},
children: [
  ${childrenFlutter}
],
)`;
          } else {
              return `Container(
${width} ${height}
${padding} ${margin}
decoration: BoxDecoration(
  ${bgColor}
  ${border} ${borderRadius}
),
child: Column(
  children: [
    ${children.map(child => mapToFlutter([child])).join(",\n      ")}
  ],
),
)`;
          }
      }

      if (type === "h1" || type === "p" || type === "span") {
          return `Text(
"${props?.children || ''}",
style: TextStyle(
  fontSize: ${style.fontSize || 16}, 
  fontWeight: ${style.fontWeight === "bold" ? "FontWeight.bold" : "FontWeight.normal"},
  ${style.color ? `color: ${convertColor(style.color)},` : "color: Colors.black,"} // ✅ Ensure text is black by default
),
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

// Helper function to convert CSS color values to Flutter Colors
function convertColor(color) {
  const colorMap = {
      "black": "Colors.black",
      "white": "Colors.white",
      "red": "Colors.red",
      "blue": "Colors.blue",
      "green": "Colors.green",
      "yellow": "Colors.yellow",
      "gray": "Colors.grey",
  };
  return colorMap[color] || "Colors.transparent"; // Default to transparent if not mapped
}

module.exports = { mapToFlutter };
