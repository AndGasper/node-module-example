/**
 * @name index.js
 * @description example of requiring some other module
 * @author Andres Gasper
 */
// const otherModule = require('./otherModule');
const { someOtherFunction } = require('./otherModule');
const { anotherModulesFunction } = require('./anotherFolder/anotherModule');
const theNameOfTheThing = function() {
    someOtherFunction();
    anotherModulesFunction();
}

theNameOfTheThing();

if (require.main === module) {
    console.log('require.main matches module');
}