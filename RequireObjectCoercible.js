'use strict';

var $TypeError = require('es-errors/type');

/*
 * Performance optimization: Explicit null/undefined checks are faster than
 * abstract equality (==). This avoids the comparison overhead.
 */
/** @type {import('./RequireObjectCoercible')} */
module.exports = function RequireObjectCoercible(value) {
	if (value === null || value === undefined) {
		var customMessage = arguments.length > 1 && arguments[1];
		throw new $TypeError(customMessage || ('Cannot call method on ' + value));
	}
	return value;
};
