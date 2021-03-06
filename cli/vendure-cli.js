#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const cli_utils_1 = require("./cli-utils");
const populate_1 = require("./populate");
const version = require('../../package.json').version;
cli_utils_1.logColored(`
                      _
                     | |
 __   _____ _ __   __| |_   _ _ __ ___
 \\ \\ / / _ \\ '_ \\ / _\` | | | | '__/ _ \\
  \\ V /  __/ | | | (_| | |_| | | |  __/
   \\_/ \\___|_| |_|\\__,_|\\__,_|_|  \\___|
                                       `);
commander_1.default.version(`Vendure CLI v${version}`, '-v --version').name('vendure');
commander_1.default
    .command('import-products <csvFile>')
    .option('-l, --language', 'Specify ISO 639-1 language code, e.g. "de", "es". Defaults to "en"')
    .description('Import product data from the specified csv file')
    .action(async (csvPath, command) => {
    const filePath = path_1.default.join(process.cwd(), csvPath);
    await importProducts(filePath, command.language);
});
commander_1.default
    .command('init <initDataFile>')
    .description('Import initial data from the specified json file')
    .action(async (initDataFile, command) => {
    const filePath = path_1.default.join(process.cwd(), initDataFile);
    cli_utils_1.logColored(`\nPopulating initial data from "${filePath}"...\n`);
    const initialData = require(filePath);
    const app = await getApplicationRef();
    if (app) {
        await populate_1.populateInitialData(app, initialData);
        cli_utils_1.logColored('\nDone!');
        await app.close();
    }
    process.exit(0);
});
commander_1.default
    .command('create-collections <initDataFile>')
    .description('Create collections from the specified json file')
    .action(async (initDataFile, command) => {
    const filePath = path_1.default.join(process.cwd(), initDataFile);
    cli_utils_1.logColored(`\nCreating collections from "${filePath}"...\n`);
    const initialData = require(filePath);
    const app = await getApplicationRef();
    if (app) {
        await populate_1.populateCollections(app, initialData);
        cli_utils_1.logColored('\nDone!');
        await app.close();
    }
    process.exit(0);
});
commander_1.default.parse(process.argv);
if (!process.argv.slice(2).length) {
    commander_1.default.help();
}
async function importProducts(csvPath, languageCode) {
    cli_utils_1.logColored(`\nImporting from "${csvPath}"...\n`);
    const app = await getApplicationRef();
    if (app) {
        await populate_1.importProductsFromCsv(app, csvPath, languageCode);
        cli_utils_1.logColored('\nDone!');
        await app.close();
        process.exit(0);
    }
}
async function getApplicationRef() {
    const tsConfigFile = path_1.default.join(process.cwd(), 'vendure-config.ts');
    const jsConfigFile = path_1.default.join(process.cwd(), 'vendure-config.js');
    let isTs = false;
    let configFile;
    if (fs_extra_1.default.existsSync(tsConfigFile)) {
        configFile = tsConfigFile;
        isTs = true;
    }
    else if (fs_extra_1.default.existsSync(jsConfigFile)) {
        configFile = jsConfigFile;
    }
    if (!configFile) {
        console.error(`Could not find a config file`);
        console.error(`Checked "${tsConfigFile}", "${jsConfigFile}"`);
        process.exit(1);
        return;
    }
    if (isTs) {
        const tsNode = require('ts-node');
        if (!tsNode) {
            console.error(`For "populate" to work with TypeScript projects, you must have ts-node installed`);
            process.exit(1);
            return;
        }
        require('ts-node').register();
    }
    const index = require(configFile);
    if (!index) {
        console.error(`Could not read the contents of "${configFile}"`);
        process.exit(1);
        return;
    }
    if (!index.config) {
        console.error(`The file "${configFile}" does not export a "config" object`);
        process.exit(1);
        return;
    }
    const config = index.config;
    config.dbConnectionOptions.synchronize = true;
    const { bootstrap } = require('@vendure/core');
    console.log('Bootstrapping Vendure server...');
    const app = await bootstrap(config);
    return app;
}
//# sourceMappingURL=vendure-cli.js.map