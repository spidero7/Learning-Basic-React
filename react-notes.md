# React Notes

## npm

**Uruchomienie środowiska + instalacja prettier**

1. npm init -y
2. npm install -D prettier
3. "format": "prettier --write \"src/\*_/_.{js, jsx}\"" - dodajemy w "script" w package.json
4. npm run format
5. install Prettier - Code formatter in VS Code extension if you don't have it

**Instalacja ESlint**

1. npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0
2. "lint": "eslint \"src/\*_/_.{js,jsx}\" --quiet" - dodajemy w "script" w package.json
3. npm run lint
4. Instalacja ESLint - in VS Code extension if you don't have it
