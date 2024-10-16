# Basic App Template with Tailwind CSS

This is a basic application template that uses Tailwind CSS for rapid UI development. It provides a simple foundation for building modern, responsive web applications with minimal custom CSS.

## Features

- Pre-configured Tailwind CSS setup
- Basic project structure
- Automatic CSS processing with watch mode
- Custom font support
- Integration with DaisyUI component library

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

## Getting Started

Follow these steps to get your development environment set up:

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/basic-app-template.git
   cd basic-app-template
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the CSS watch process:

   ```
   npm run dev
   ```

4. Open the `index.html` file in your browser to view the app.

## Project Structure

```
basic-app-template/
│
├── node_modules/
├── src/
│   ├── fonts/
│   ├── public/
│   ├── input.css
│   └── output.css
│
├── index.html
├── index.js
├── package.json
└── tailwind.config.js
```

## Scripts

- `dev`: Runs Tailwind CSS in watch mode, processing `src/input.css` to `src/output.css`
  ```
  npm run dev
  ```

## Dependencies

This project uses the following dependencies:

- `tailwindcss` (v3.4.13): A utility-first CSS framework
- `@tailwindcss/typography` (v0.5.15): Typography plugin for Tailwind CSS
- `daisyui` (v4.12.10): A component library for Tailwind CSS

## Customization

### Tailwind Configuration

You can customize your Tailwind setup by modifying the `tailwind.config.js` file. Refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/configuration) for more details.

### CSS Files

- `src/input.css`: Add your custom styles and Tailwind directives here.
- `src/output.css`: The compiled CSS file that includes all of Tailwind's utility classes and your custom styles.

### Adding Custom Fonts

Place your custom font files in the `src/fonts/` directory and update your CSS and Tailwind configuration as needed.

## Building for Production

To create an optimized production build, you may need to set up an additional build process. This typically involves:

1. Processing your `input.css` file with Tailwind CSS
2. Minifying the resulting CSS
3. Optionally, purging unused styles for a smaller file size

Consider adding a build script to your `package.json` file for this purpose.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the ISC License.

## Support

If you have any questions or need help, please open an issue in the GitHub repository.

Happy coding!
