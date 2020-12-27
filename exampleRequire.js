/**
 * @name exampleRequire.js
 * @description Example require main value
 * @author Andres Gasper
 */


console.log('\nmodule.children before require:',  module.children);
const { someOtherFunction } = require('./otherModule');

console.log('\nmodule.children after require:', module.children);