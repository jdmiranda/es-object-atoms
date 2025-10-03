'use strict';

var $Object = require('./');
var RequireObjectCoercible = require('./RequireObjectCoercible');
var $TypeError = require('es-errors/type');

/*
 * Performance optimization: Fast path for objects that don't need conversion.
 * This avoids the overhead of RequireObjectCoercible and $Object calls for
 * values that are already objects or functions.
 */
/** @type {import('./ToObject')} */
module.exports = function ToObject(value) {
	var type = typeof value;
	if (type === 'object') {
		if (value === null) {
			throw new $TypeError('Cannot call method on null');
		}
		return value;
	}
	if (type === 'function') {
		return value;
	}

	RequireObjectCoercible(value);
	return $Object(value);
};
