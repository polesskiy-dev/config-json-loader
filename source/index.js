/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Artyom Polisskiy
 */
// module.exports = function(source) {
// 	this.cacheable && this.cacheable();
// 	var value = typeof source === "string" ? JSON.parse(source) : source;
// 	this.value = [value];
// 	//return "module.exports = " + JSON.stringify(value, undefined, "\t") + ";";
//   module.exports = value;
// }
'use strict';
export const helloWorld = ()=> {
    return "Hello world!";
}
