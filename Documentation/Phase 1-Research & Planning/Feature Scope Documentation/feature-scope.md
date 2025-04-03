# 🚀 Feature Scope

## 🔹 v1.0 Features (MVP)
✅ **JSX to Dart Conversion** (Basic HTML elements, Components)  
✅ **State & Props Mapping** (`useState`, `props`)  
✅ **Event Handlers Conversion** (`onClick`, `onChange`)  
✅ **Basic Styling (Inline, Tailwind)**  
✅ **Downloadable `.dart` Files**  

## 🔹 v2.0 Features (Advanced)
✅ **Next.js Routing (`Link` → Flutter Navigator)**  
✅ **API Calls (`fetch/axios` → Flutter http)**  
✅ **Styled Components / CSS Modules Conversion**  
✅ **Global State Management (`Redux/Zustand` → `Provider` / `Riverpod`)**  

## 🔹 Future Roadmap
🚀 **v3.0+ Features (Long-term Goals)**  
✅ **Server-side Data Fetching Support (Limited SSR Handling)**  
✅ **Authentication (`next-auth` → Firebase Auth)**  
✅ **Multi-Page Support (Complex Conversions)**  
✅ **AI-Powered Optimization (Improve UI/UX in Flutter Code)**  

## 📌 Feature Breakdown

| Feature | Next.js (Input) | Flutter (Output) |
|---------|---------------|----------------|
| Basic JSX Elements | `<div>`, `<span>`, `<button>` | `Container`, `Text`, `ElevatedButton` |
| React State | `useState`, `useEffect` | `StatefulWidget`, `setState()` |
| Event Handlers | `onClick={fn}` | `onPressed: fn` |
| API Calls | `fetch(url)`, `axios.get(url)` | `http.get(Uri.parse(url))` |
| Routing | `<Link href="/about">` | `Navigator.push(context, MaterialPageRoute())` |
| Global State | `Redux`, `Context API` | `Provider`, `Riverpod` |
| Styling | `className="..."`, `styled.div` | `ThemeData`, `BoxDecoration` |

