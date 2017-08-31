
const mockCssModules = require("mock-css-modules");

mockCssModules.register(['.sass', '.scss']);

require('babel-register')();

const jsdom = require('jsdom');

const exposedProperties = ['window', 'navigator', 'document'];

const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;

global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
