/**
 * getElementById wrapper
 * 
 * @param {string} id Id to retrieve
 */
export function select(id) {
	return document.getElementById(id);
}

/**
 * addEventListener wrapper
 * 
 * @param {Element} target Target element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 */
export function attach(target, type, callback) {
	target.addEventListener(type, callback);
}

/**
 * Encode less-than and ampersand characters with entity codes to make user-
 * provided text safe to parse as HTML.
 *
 * @param {string} s String to escape
 *
 * @returns {string} String with unsafe characters escaped with entity codes
 */
export const escapeForHTML = s => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');