# React Notes

## npm prettier ESLint Git Parcel Babel

1. Uruchomienie środowiska

**instalacja prettier**

- npm init -y
- npm install -D prettier
- "format": "prettier --write \"src/\*_/_.{js, jsx}\"" - dodajemy w "script" w package.json
- npm run format
- install Prettier - Code formatter in VS Code extension if you don't have it

**Instalacja ESlint**

- npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0
- "lint": "eslint \"src/\*_/_.{js,jsx}\" --quiet" - dodajemy w "script" w package.json
- npm run lint
- instalacja ESLint - in VS Code extension if you don't have it

**Uruchomienie git**

- git init
- stworzenie pliku .gitignore
