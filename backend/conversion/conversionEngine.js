const { parseJSX } = require("./parsers/jsxParser");
const { mapToFlutter } = require("./generators/flutterMapper");
const { generateDartFile } = require("./generators/dartGenerator");

/**
 * Converts JSX to Flutter Dart code.
 * @param {string} nextjsCode - JSX/TSX input code.
 * @returns {string} Generated Dart code.
 */
function convertToFlutter(nextjsCode) {
    const parsedJSX = parseJSX(nextjsCode);
    const flutterWidgets = mapToFlutter(parsedJSX);
    return generateDartFile(flutterWidgets);
}

module.exports = { convertToFlutter };
