## BARK PreSale Frontend (Template)

Welcome to the BARK PreSale Frontend repository! This frontend application is based on the Solana blockchain and serves as the user interface for participating in the BARK token PreSale event.

### Tech Stack

This project utilizes the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A next-generation frontend tooling.
- **HMR (Hot Module Replacement)**: Enables real-time updates to the application without a full reload.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **TypeScript**: A superset of JavaScript that adds static type definitions.
- **Web3.js**: A Solana Program Library for interacting with the Solana blockchain.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

Node.js and npm (Node Package Manager): You can download and install them from the official website: Node.js Downloads

### Expanding the ESLint configuration

When developing a production application, it is recommended to update the ESLint configuration to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property like this:

   ```json
   {
     "parserOptions": {
       "ecmaVersion": "latest",
       "sourceType": "module",
       "project": ["./tsconfig.json", "./tsconfig.node.json"],
       "tsconfigRootDir": __dirname
     }
   }
   ```

2. Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
3. Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
4. Install `eslint-plugin-react` and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

### Setup

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/bark-community/bark-presale-frontend-dev.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bark-presale-frontend-dev
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.


### Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them to your branch.
4. Push your changes to your fork.
5. Submit a pull request to the main repository's `main` branch.

### License

[MIT License](LICENSE).