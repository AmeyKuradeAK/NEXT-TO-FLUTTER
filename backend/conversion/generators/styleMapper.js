/**
 * Converts inline styles and Tailwind classes to Flutter BoxDecoration and TextStyle.
 */
function mapStylesToFlutter(props) {
    let decoration = ""; // BoxDecoration styles for Container
    let textStyle = ""; // TextStyle properties

    let padding = "";
    let margin = "";

    if (props.className) {
        const tailwindMap = {
            "bg-gray-500": "Colors.grey[500]",
            "p-4": "EdgeInsets.all(4)",
            "p-5": "EdgeInsets.all(20)",
            "m-2": "EdgeInsets.all(2)",
            "m-5": "EdgeInsets.all(10)",
            "text-lg": "fontSize: 18",
            "text-xl": "fontSize: 20",
            "font-bold": "fontWeight: FontWeight.bold"
        };

        props.className.split(" ").forEach(cls => {
            if (tailwindMap[cls]) {
                if (cls.startsWith("bg-")) decoration = `BoxDecoration(color: ${tailwindMap[cls]})`;
                if (cls.startsWith("p-")) padding = `padding: ${tailwindMap[cls]}`;
                if (cls.startsWith("m-")) margin = `margin: ${tailwindMap[cls]}`;
                if (cls.startsWith("text-")) textStyle += `${tailwindMap[cls]}, `;
                if (cls.startsWith("font-")) textStyle += `${tailwindMap[cls]}, `;
            }
        });
    }

    if (props.style) {
        if (props.style.margin) margin = `margin: EdgeInsets.all(${parseInt(props.style.margin)})`;
        if (props.style.padding) padding = `padding: EdgeInsets.all(${parseInt(props.style.padding)})`;
        if (props.style.fontSize) textStyle += `fontSize: ${parseInt(props.style.fontSize)}, `;
        if (props.style.fontWeight === "bold") textStyle += `fontWeight: FontWeight.bold, `;
    }

    // Cleanup textStyle
    if (textStyle.trim().length > 0) {
        textStyle = `TextStyle(${textStyle.trim().replace(/,$/, "")})`;
    } else {
        textStyle = "TextStyle()";
    }

    // Cleanup final styles
    let finalDecoration = [decoration, padding, margin].filter(Boolean).join(", ");
    return {
        decoration: finalDecoration ? `decoration: ${finalDecoration}` : "",
        textStyle
    };
}

module.exports = { mapStylesToFlutter };
