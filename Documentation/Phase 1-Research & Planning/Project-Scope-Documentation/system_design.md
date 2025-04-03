# 🏗️ System Design

## 🔹 Architecture Overview  
```
[ Next.js Web UI ] -----> [ Node.js/Python Backend ]
                          | 
                          V
                  [ Flutter Code Generator ]
                          |
                   [ .dart File Output ]
```

## 🔹 Components  
1️⃣ **Next.js Web UI** → Upload TSX files, View Converted Code  
2️⃣ **Node.js/Python Backend** → Parses JSX & Generates Flutter Code  
3️⃣ **Conversion Engine** → Handles Component & Style Conversion  
4️⃣ **Storage** → Stores previous conversions & allows downloads  

## 🔹 Folder Structure  
```
/nextjs-to-flutter
│── frontend/        # Next.js UI
│── backend/         # Node.js API
│── conversion/      # JSX → Dart Engine
│── docs/            # Documentation
│── scripts/         # Automation
```
