export default function CodeOutput({ dartCode }: { dartCode: string }) {
    return (
      <div className="p-4 border rounded-lg shadow mt-4">
        <h2 className="text-lg font-bold">Flutter Code:</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-auto">{dartCode}</pre>
      </div>
    );
  }
  