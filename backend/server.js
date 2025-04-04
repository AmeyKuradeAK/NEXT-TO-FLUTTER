const express = require("express");
const bodyParser = require("express");
const { mapToFlutter } = require("./conversion/generators/flutterMapper");
const cors = require("cors");

const app = express();
app.use(express.json()); // ✅ Ensure JSON parsing is enabled


app.use(cors());


app.post("/convert", (req, res) => {
    console.log("Received request:", req.body); // Debugging log
    const jsxCode = req.body.jsxCode;

    if (!jsxCode) {
        return res.status(400).json({ error: "No JSX code provided" });
    }

    try {
        const flutterCode = mapToFlutter([{ type: "div", children: [{ type: "h1", props: { children: "Hello" } }, { type: "button", props: { children: "Click" } }] }]);
        return res.json({ dartCode: flutterCode });
    } catch (error) {
        console.error("Conversion error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
