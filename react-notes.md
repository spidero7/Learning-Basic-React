# React Notes

## 1. Uruchomienie środowiska - npm prettier ESLint Git Parcel Babel

**instalacja prettier**

- `npm init -y`
- `npm install -D prettier`
- `"format": "prettier --write \"src/\*_/_.{js, jsx}\""` - dodajemy w "script" w package.json
- `npm run format`
- install Prettier - Code formatter in VS Code extension if you don't have it

**ESlint**

- `npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0`
- `"lint": "eslint \"src/\*_/_.{js,jsx}\" --quiet"` - dodajemy w "script" w package.json
- `npm run lint`
- instalacja ESLint - in VS Code extension if you don't have it
- prettier has to be the last one in "extends" in .eslintrc.json

- "plugins": ["react", "import", "jsx-a11y"] - w .eslintrc.json (modyfication: knowing react, importing things, accessibility)

**Uruchomienie git**

- `git init`
- stworzenie pliku .gitignore

**Instalacja parcela**

- `npm install -D parcel@1.12.3`
- `"dev": "parcel src/index.html"` - w scrpit w package.json
- `npm install react@17.0.1 react-dom@17.0.1`
- `npm run dev`

**Instalacja babel**

- stworzyć plik .babelrc
- zatrzymać server jeśli jest uruchomiony (w terminal wpisać `ctr + c`)
- `npm install -D` @babel/core@7.12.16 @babel/preset-react@7.12.13

**package.json**

"browserslist": [
"last 2 Chrome versions" // Określenie jakie wersje przeglądarek chcemy wspierać
]

- `npm install` - install npm package in project "dependencies" (default)
- `npm install --save-dev`
- `-D`, `--save-dev`: Package will appear in your devDependencies
- `-O`, `--save-optional`: Package will appear in your optionalDependencies.
- `--no-save`: Prevents saving to dependencies.

## 2. Package

**NPM**

- `node -v, npm -v` -- sprawdzenie wersji node i npm
- `npm install nazwa_paczki` - instalacja paczki lokalnie
- `npm install -g nazwa_paczki` - instalacja paczki globalnie
- `npm install `- sprawdza jakie paczki są w pliku package.json i je instaluje
- `npm init -y` - inicjalizuje plik package.json
- `npm list` - lista wszystkich zainstalowanych paczek
- `npm view nazwa_paczki versions` - wszystkie wersje paczek jakie wyszły od początku
- `npm update` - update paczek do najnowszych wersji
- e.g. `"react": "^17.0.1"` - "^" przed wersją oznacza, że jeśli będziemy używać npm update to zrobi na update do najnowżej wersji, ale nie major, czyli nie do 18.0.0
- `npm install nazwa_paczki@latest` or e.g. (`npm install react@18.0.0`) - update do najnowżej wersji (nawet jeśli jest major update)
- `npm instal nazwa_paczki@~2.2` - update wersji 2.2 do najnowszego patcha

**Webpack**

- `npm install` --save-dev webpack webpack-cli - instalacja webpacka
- `"build": "webpack"` w script w package.json
- `npm run build` - run webpack (compile code in src code to dist - production code (code that we ship to the user in the browser))

**Loader & Plugins**

- `npm install` -save-dev css-loader style-loader sass-loader - instaling a loader
- `npm install` --save-dev webpack-bundle-analyzer
- `npm install` --save-dev sass - instalacja sass'a
- `npm install` -save-dev webpack-dev-server - instalacja dev server

**Build A React App**

- `npx create-react-app .`
- npx - konfiguruje wszystko za nas i możemy zacząc od razu z gotową templatką
- `npm start` - starting a development server

ReactDOM.render(
<React.StrictMode> // JSX Object - React define component (StrictMode is for testing)
<App /> // App from App.js file
</React.StrictMode>,
document.getElementById('root') // Targeting root div in HTML file
);

- `Ctr + C` - start a development server
- `npm run build`

**React**

- Główne przeznaczenie -> `Budowanie UI`
- `Komponenty` -> reużywalne cześci UI

**Virtual DOM**

- Kopia DOM zapisana w formie obiektu
- Kiedy React.js aktualizuje DOM? -> Kiedy zmieni się stan aplikacji (komponentów)
- Virtual DOM aktualizuje się częściej niż zwykły DOM
- Komponent w React.js może być zapisany jako `Funkcja` lub `Klasa`

**JavaScript Bundler**

- Łączą wiele plików z kodem ze sobą
- Korzystają ze ścieżek importów/eksportów, aby określić, w jaki sposób połączyć pliki ze sobą
- Pozwalają dopasować wykonywane transformacje zależnie od typów plików

**Update naming convention**

- z `11.3.1` na `12.0.0`

  - Zawiera zmiany, które nie są wstecznie kompatybilne
  - Wprowadza nowe funkcjonalności, które są wstecznie kompatybilne
  - Nie zawiera już czegoś, co było dostępne w poprzedniej wersji paczki

- z `11.3.1` na `11.4.0`

  - Wprowadza nowe funkcjonalności, które są wstecznie kompatybilne

- z `11.3.1` na `11.3.2`
  - Zawiera jedynie rozwiązania pomniejszych bug'ów (patche)

## 3. JSX

**JSX expression**

- JSX expression must have exactly one outermost element
- The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element
- If JSX has a more that one lines we have to use parentheses

**Rendering JSX**

- To render a JSX expression means to make it appear onscreen
- `ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'))`; - render a JSX expression
- `ReactDOM.render()` is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen
- `ReactDOM.render()`‘s first argument should be a JSX expression, and it will be rendered to the screen
- The first argument could also be a variable, so long as that variable evaluates to a JSX expression.
- The first argument is appended to whatever element is selected by the second argument
- `ReactDOM.render()` is that it only updates DOM elements that have changed

## 4. React Hooks

- useState - to jest hook
  - State allows us as developers to keep track of changes inside of our React components
- pierwsza wartość w useState jest to wartoś domyślna - useState("Seattle, WA")
- onChange - whenever user does sth function will be back e.g. onChange={(e) => setLocation(e.target.value)}
- never add hooks in if statement or loop

- `npm install -D eslint-plugin-react-hooks@4.2.0` - package that specific applies to react hooks
- `"plugin: react-hooks/recommended",` - in .eslintrc.json (chacking bugs with hooks)

**useState**

- The useState Hook provides us an array containing two values:
  - The actual value of the state.
  - A function to update that value.

**useEffect**

- https://pl.reactjs.org/docs/hooks-effect.html

**React Dev Tools**

- <React.StrictMode></React.StrictMode> it will give you additional warnings about things you shouldn't be doing.
- it's good to keep your team in line and not using legacy features or things that will be soon be deprecated.

**Class components**

- `this.state` - mutable == changeble
- `this.props` - read only, data from parent component
