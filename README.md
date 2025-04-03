# Setting up Backend

```powershell
cd path\to\your\project
mkdir backend
cd backend

# npm init
npm init -y

# Create the Directory Structure
mkdir routes, controllers, utils, middleware
New-Item server.js, .env, README.md -ItemType File

# Create API Route & Controller Files
New-Item routes\convert.js -ItemType File
New-Item controllers\convertController.js -ItemType File



```