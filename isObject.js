'use strict';

/*
 * Performance optimization: Check type first to enable fast-path returns.
 * This avoids unnecessary truthy checks for primitives.
 */
/** @type {import('./isObject')} */
module.exports = function isObject(x) {
	var type = typeof x;
	/*
	 * Short-circuit: if not object or function, return false immediately.
	 * Only need to check for null when type is 'object' since typeof null === 'object'.
	 * Functions cannot be null.
	 */
	if (type === 'object') {
		return x !== null;
	}
	return type === 'function';
};
