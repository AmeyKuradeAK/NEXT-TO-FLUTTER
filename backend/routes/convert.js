const express = require("express");
const { convertToFlutter } = require("../conversion/conversionEngine");

const router = express.Router();

router.post("/", (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: "No JSX code provided" });
    }

    try {
        const flutterCode = convertToFlutter(code);
        res.json({ dartCode: flutterCode });
    } catch (error) {
        console.error("Conversion error:", error);
        res.status(500).json({ error: "Conversion failed" });
    }
});

module.exports = router;
