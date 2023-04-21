


import  {defineConfig } from 'cypress'
import  * as webpack  from '@cypress/webpack-preprocessor'
import  * as preprocessor  from '@badeball/cypress-cucumber-preprocessor';
import * as path from 'path'

// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const path = require("path");

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
          alias: {
            "@components": path.resolve(__dirname, "cypress/support/components"),
            "@pages": path.resolve(__dirname, "cypress/support/pages"),
          }
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
    baseUrl: "https://computer-database.gatling.io/computers",
  },
  // globals: true,
});
