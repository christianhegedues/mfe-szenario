const plato = require('plato');

const files = [
  'mf-filter/src/filters.js',
  'mf-sensoren/src/sensors.js',
  'shell/src/app.js',
];
const outputDir = './report';
const options = { noempty: true };
const callback = () => { };

plato.inspect(files, outputDir, options, callback);

