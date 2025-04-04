"use client";
import { useState } from "react";
import CodeInput from "@/components/CodeInput";
import CodeOutput from "@/components/CodeOutput";
import axios from "axios";

export default function Home() {
  const [flutterCode, setFlutterCode] = useState("");

  const handleConvert = async (jsxCode: string) => {
    try {
      const response = await axios.post("http://localhost:5000/convert", { jsxCode });
      setFlutterCode(response.data.dartCode);
    } catch (error) {
      console.error("Conversion failed:", error);
      setFlutterCode("Error converting code.");
    }
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Next.js to Flutter Converter</h1>
      <div style={{
        backgroundColor: "#282c34", // Dark background
        color: "black", // White text
        padding: "20px",
        borderRadius: "5px",
        overflowX: "auto"
      }}>
        <CodeInput onConvert={handleConvert} />
        <pre>{flutterCode && <CodeOutput dartCode={flutterCode} />}</pre>
      </div>
    </main>
  );
}
