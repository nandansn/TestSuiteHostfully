


import { defineConfig } from 'cypress'
import * as webpack from '@cypress/webpack-preprocessor'
import * as preprocessor from '@badeball/cypress-cucumber-preprocessor';
import * as path from 'path'


async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  require('cypress-mochawesome-reporter/plugin')(on);
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

  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Suite - Hostfully',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    "html": true,
    "json": false,

  },
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
    baseUrl: "https://computer-database.gatling.io/computers",
  },
  video: false,
});
