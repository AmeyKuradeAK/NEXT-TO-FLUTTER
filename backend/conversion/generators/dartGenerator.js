/**
 * Generates a complete Dart file from mapped Flutter widgets.
 * @param {string[]} flutterWidgets - List of converted Flutter widgets.
 * @returns {string} Full formatted Dart code.
 */
function generateDartFile(flutterWidgets) {
    return `import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Converted UI')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
${flutterWidgets.map(widget => "              " + widget).join(",\n")}
            ],
          ),
        ),
      ),
    );
  }
}`;
}

module.exports = { generateDartFile };
