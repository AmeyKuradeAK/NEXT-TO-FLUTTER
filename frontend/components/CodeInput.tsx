"use client";
import { useState } from "react";

export default function CodeInput({ onConvert }: { onConvert: (code: string) => void }) {
  const [jsxCode, setJsxCode] = useState("");

  return (
    <div className="p-4 border rounded-lg shadow">
      <textarea
        className="w-full h-40 p-2 border rounded"
        placeholder="Enter JSX/TSX code here..."
        value={jsxCode}
        onChange={(e) => setJsxCode(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => onConvert(jsxCode)}
      >
        Convert
      </button>
    </div>
  );
}
