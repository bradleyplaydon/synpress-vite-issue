const path = require("path");
const { defineConfig } = require("cypress");
const vitePreprocessor = require("cypress-vite");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on(
                'file:preprocessor',
                vitePreprocessor({
                    mode: 'development',
                }),
            )
            synpressPlugins(on, config);
        },
        baseUrl: "http://localhost:3001",
        supportFile: "tests/e2e/support.js",
        specPattern: "tests/e2e/specs/**/*.{js,jsx,ts,tsx}",
    },
});