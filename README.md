# ArcaneUI

ArcaneUI is a UI component library built on top of ShadCN UI, designed to provide a set of reusable and customizable components for building modern web applications. This library leverages the power of React, TypeScript, and TailwindCSS to deliver a seamless development experience.

## Features

- **TypeScript Support**: Written in TypeScript to provide type safety and better developer experience.
- **TailwindCSS Integration**: Utilizes TailwindCSS for styling, allowing for easy customization and theming.
- **Component Variants**: Supports multiple variants for components to cater to different use cases.
- **Accessibility**: Built with accessibility in mind to ensure components are usable by everyone.

## Installation

To install ArcaneUI, you can use npm or yarn:

```bash
npm install arcaneui
# or
yarn add arcaneui
```

## Usage

To start using ArcaneUI components, you need to set up TailwindCSS in your project. Follow the steps below:

1. **Install TailwindCSS**:

    ```bash
    npm install tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```

2. **Configure TailwindCSS**:

    Update your `tailwind.config.js` to include the paths to your components:

    ```javascript:tailwind.config.js
    module.exports = {
        content: [
            "./src/**/*.{js,ts,jsx,tsx}",
            // Add other paths here
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    };
    ```

3. **Add Tailwind Directives**:

    Add the Tailwind directives to your CSS file (e.g., `src/index.css`):

    ```css:src/index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. **Use ArcaneUI Components**:

    Import and use the components in your React application:

    ```typescript:src/App.tsx
    import React from 'react';
    import { Button } from 'arcaneui';
    import 'arcaneui/dist/index.css';

    function App() {
        return (
            <div className="App">
                <Button variant="primary">Click Me</Button>
            </div>
        );
    }

    export default App;
    ```

## Components

### SidePanel

A customizable side panel component.

```typescript:src/components/SidePanel.tsx
import React from 'react';

interface SidePanelProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose, children }) => {
    return (
        <div className={`side-panel ${isOpen ? 'open' : ''}`}>
            <button onClick={onClose}>Close</button>
            {children}
        </div>
    );
};

export default SidePanel;
```



## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
