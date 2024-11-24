```markdown
# React + TypeScript + Vite

This project is a React application using TypeScript and Vite for fast development and hot module replacement (HMR). It
includes ESLint for code quality and linting.

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```sh
   yarn install
   # or
   npm install
   ```

### Running the Development Server

To start the development server with HMR:
```sh
yarn dev
# or
npm run dev
```

### Building for Production

To build the project for production:
```sh
yarn build
# or
npm run build
```

### Linting

To run ESLint:
```sh
yarn lint
# or
npm run lint
```

## ESLint Configuration

For production applications, it is recommended to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property:
   ```js
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   })
   ```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Optionally add `...tseslint.configs.stylisticTypeChecked`.

4. Install `eslint-plugin-react` and update the config:
   ```js
   // eslint.config.js
   import react from 'eslint-plugin-react'

   export default tseslint.config({
     settings: { react: { version: '18.3' } },
     plugins: {
       react,
     },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   })
   ```

## Project Structure

- `src/`: Contains the source code of the application.
- `public/`: Contains static assets.
- `tsconfig.json`: TypeScript configuration file.
- `vite.config.ts`: Vite configuration file.

## Features

- React 18
- TypeScript
- Vite for fast development and HMR
- ESLint for code quality
- React Query for data fetching and caching
- Wagmi for Ethereum wallet connection

## Available Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `lint`: Runs ESLint.

## License

This project is licensed under the MIT License.
```
