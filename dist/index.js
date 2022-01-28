function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Typography$1 = _interopDefault(require('@material-ui/core/Typography'));
var React = _interopDefault(require('react'));
var core = require('@material-ui/core');
var styled = _interopDefault(require('styled-components'));
var styles = require('@material-ui/core/styles');
var MuiChip = _interopDefault(require('@material-ui/core/Chip'));
var lab = require('@material-ui/lab');
var MuiSelect = _interopDefault(require('@material-ui/core/Select'));
var MuiAlert = _interopDefault(require('@material-ui/lab/Alert'));
var MuiTextField = _interopDefault(require('@material-ui/core/TextField'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var Card = _interopDefault(require('@material-ui/core/Card'));
var CardContent = _interopDefault(require('@material-ui/core/CardContent'));
var ArrowForwardIcon = _interopDefault(require('@material-ui/icons/ArrowForward'));
require('@material-ui/icons/SpaOutlined');
var ArrowBackIcon = _interopDefault(require('@material-ui/icons/ArrowBack'));
var CloseIcon = _interopDefault(require('@material-ui/icons/Close'));
var clsx = _interopDefault(require('clsx'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var colors = {
  blue: '#126AEF',
  white: '#ffffff',
  purple: '#8A85FF',
  error: '#FF6848',
  warning: '#FFAE11',
  success: '#6CC83D'
};

var _excluded = ["variant", "children", "color"];
var Typography = function Typography(_ref) {
  var variant = _ref.variant,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Typography$1, _extends({
    key: variant,
    variant: variant,
    style: {
      marginBottom: '24px',
      color: colors[color]
    }
  }, props), children);
};
Typography.propTypes = {
  color: propTypes.oneOf(['textPrimary', 'success', 'warning', 'error', 'purple'])
};
Typography.defaultProps = {
  color: 'textPrimary'
};

var index = {
  green: {
    main: '#6CC83D',
    dark: '#478428',
    light: '#7BC67E',
    textDark: '#254415',
    lightBg: '#F0F9EC',
    border: '#6CC83D80',
    textContrast: '#FFFFFF'
  },
  blue: {
    main: '#126AEF',
    dark: '#105CD0',
    light: '#81B0F7',
    textDark: '#08306C',
    lightBg: '#ECF3FE',
    border: '#126AEF80',
    textContrast: '#FFFFFF'
  },
  yellow: {
    main: '#FFAE11',
    dark: '#BD810D',
    light: '#FFB932',
    textDark: '#614206',
    lightBg: '#FFF7E7',
    border: '#FFAE11A1',
    textContrast: '#000000DE'
  },
  red: {
    main: '#FF6848',
    dark: '#CF543A',
    light: '#FF866D',
    textDark: '#5E261B',
    lightBg: '#FFEBE7',
    border: '#FF684880',
    textContrast: '#FFFFFF'
  },
  purple: {
    main: '#8A85FF',
    dark: '#7571D9',
    light: '#ADAAFF',
    textDark: '#454280',
    lightBg: '#EBEAFF',
    border: '#8A85FF80',
    textContrast: '#FFFFFF'
  },
  black: {
    primary: '#28374C',
    secondary: '#6D7785',
    disabled: '#989FA9',
    hint: '#989FA9'
  },
  background: {
    "default": '#ffffff'
  },
  grey: {
    a100: '#F0F0F0',
    a200: '#DADADA'
  }
};

var ArrowDownOutlined = (function (_ref) {
  var style = _ref.style;
  return React.createElement(core.SvgIcon, {
    width: '35px',
    height: '35px',
    viewBox: '0 0 35 35',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    style: style
  }, React.createElement("g", {
    clipPath: 'url(#clip0_9617_3993)'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M17.5 -1.5299e-06C7.83502 -2.37484e-06 2.37484e-06 7.83501 1.5299e-06 17.5C6.84959e-07 27.165 7.83502 35 17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 -6.84959e-07 17.5 -1.5299e-06ZM16.5888 10.695L18.6091 10.695L18.6091 20.8709L22.453 17.0134L23.8631 18.41L17.5989 24.6606L11.3483 18.41L12.7313 17.0134L16.5888 20.8709L16.5888 10.695Z',
    fill: '#126AEF'
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: 'clip0_9617_3993'
  }, React.createElement("rect", {
    width: '35',
    height: '35',
    fill: 'white'
  }))));
});

var white = '#FFFFFF';
var black = '#28374C';
var colorSet = {
  blue: '#126AEF',
  blueDark: '#0E53BA',
  black: '#28374D',
  red: '#FF6848',
  purple: '#8A85FF',
  green: '#6CC83D',
  yellow: '#FFAE11',
  borderGrey: '#0000003b',
  secondary: '#6D7785',
  grey: '#DADADA',
  grey100: '#F0F0F0',
  grey600: '#7E8794',
  grey400: '#A9AFB7',
  grey300: '#BFC3C9',
  grey50: '#F4F5F6',
  grey900: '#3E4B5E'
};
var palette = {
  black: black,
  white: white,
  primary: {
    contrastText: white,
    dark: colorSet.blueDark,
    main: '#126AEF',
    light: core.colors.cyan[100]
  },
  secondary: {
    contrastText: white,
    dark: colorSet.blueDark,
    main: '#126AEF',
    light: core.colors.red[100]
  },
  success: {
    contrastText: white,
    dark: core.colors.green[900],
    main: core.colors.green[600],
    light: core.colors.green[400]
  },
  info: {
    contrastText: white,
    dark: core.colors.blue[900],
    main: core.colors.blue[600],
    light: core.colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: core.colors.orange[900],
    main: core.colors.orange[600],
    light: core.colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: core.colors.red[900],
    main: '#FF6848',
    light: core.colors.red[400]
  },
  text: {
    primary: '#28374C',
    secondary: '#6D7785',
    link: core.colors.blue[600]
  },
  background: {
    "default": '#ffffff',
    paper: white
  },
  icon: core.colors.blueGrey[600],
  divider: core.colors.grey[200],
  orange: core.colors.orange[900],
  green: core.colors.green[900]
};

var _templateObject;
var StyledWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & .MuiPaper-root {\n    margin: 0;\n  }\n  & .MuiAccordion-root {\n    margin: 0;\n    border-bottom: 1px solid #dadada;\n    border-radius: 0;\n    :before {\n      opacity: 0;\n    }\n  }\n  & .MuiGrid-container {\n    margin-bottom: 0;\n  }\n  & .MuiIconButton-label {\n    height: 35px;\n    width: 35px;\n  }\n  & .MuiAccordionDetails-root {\n    padding-top: 0;\n  }\n  & .MuiAccordionSummary-root {\n    padding: 24px;\n    min-height: unset !important;\n  }\n  & .MuiAccordionDetails-root {\n    padding: 24px;\n    padding-top: 0;\n  }\n  & .MuiAccordionSummary-expandIcon {\n    padding: 0;\n  }\n  & .MuiAccordionSummary-content {\n    margin: 0 !important;\n  }\n  & .MuiAccordion-root.Mui-expanded {\n    margin: 0;\n    :before {\n      opacity: 0;\n    }\n  }\n  & .MuiIconButton-edgeEnd {\n    margin-right: 0;\n  }\n"])));

var _excluded$1 = ["content"];
var Accordion = function Accordion(_ref) {
  var content = _ref.content,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var accordions = Array.isArray(content) ? content : [content];
  return React.createElement(StyledWrapper, null, accordions.map(function (acc, index) {
    return React.createElement(core.Accordion, Object.assign({
      key: index,
      defaultExpanded: acc.defaultExpanded
    }, props), React.createElement(core.AccordionSummary, {
      expandIcon: React.createElement(ArrowDownOutlined, {
        style: {
          height: '35px',
          width: '35px'
        }
      })
    }, React.createElement(core.Grid, {
      container: true,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }, React.createElement(Typography, {
      style: {
        width: '100%'
      },
      variant: 'h5'
    }, acc.title), React.createElement(Typography, {
      hidden: !acc.subtitle,
      style: {
        width: '100%',
        color: palette.text.secondary
      },
      variant: 'body1'
    }, acc.subtitle))), React.createElement(core.AccordionDetails, null, typeof acc.content === 'string' ? React.createElement(Typography, {
      variant: 'body1',
      style: {
        marginBottom: 0
      }
    }, acc.content) : React.createElement(acc.content, null)));
  }));
};

var _excluded$2 = ["size"];
var sizes = {
  xl: '160px',
  l: '56px',
  m: '40px',
  s: '24px',
  xs: '18px'
};
var Avatar = function Avatar(_ref) {
  var size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return React.createElement(core.Avatar, Object.assign({
    style: {
      width: sizes[size],
      height: sizes[size]
    }
  }, props));
};

var useStyles = styles.makeStyles(function () {
  return {
    rootV: {
      alignItems: 'start !important'
    },
    rootH: {
      alignItems: 'start !important',
      marginRight: '40px'
    },
    label: {
      marginTop: '12px'
    }
  };
});

var UncheckedIcon = function UncheckedIcon(props) {
  return React.createElement(core.SvgIcon, Object.assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, props), React.createElement("path", {
    d: 'M0.5 4C0.5 2.067 2.067 0.5 4 0.5H20C21.933 0.5 23.5 2.067 23.5 4V20C23.5 21.933 21.933 23.5 20 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z',
    fill: 'white',
    stroke: props.disabled ? '#DADADA' : '#6D7785'
  }));
};
var CheckedIcon = function CheckedIcon(props) {
  return React.createElement(core.SvgIcon, Object.assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, props), React.createElement("path", {
    d: 'M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4Z',
    fill: 'white',
    stroke: props.disabled ? '#DADADA' : '#6CC83D',
    strokeWidth: '2'
  }), React.createElement("path", {
    d: 'M7 11.8132L10.4851 15.2734L16.794 8.98935L15.8097 8L10.4851 13.3047L7.96946 10.8239L7 11.8132Z',
    fill: props.disabled ? '#DADADA' : '#28374C'
  }));
};

var _excluded$3 = ["error", "label", "helperText", "disabled", "values", "onChange", "options", "horizontal"];
var CheckboxGroup = function CheckboxGroup(_ref) {
  var _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      label = _ref.label,
      helperText = _ref.helperText,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      values = _ref.values,
      onChange = _ref.onChange,
      options = _ref.options,
      _ref$horizontal = _ref.horizontal,
      horizontal = _ref$horizontal === void 0 ? false : _ref$horizontal,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var classes = useStyles();

  var handleChange = function handleChange(event) {
    var _extends2;

    !!onChange && onChange(_extends({}, values, (_extends2 = {}, _extends2[event.target.name] = event.target.checked, _extends2)));
  };

  return React.createElement(core.FormControl, Object.assign({
    error: error,
    disabled: disabled
  }, props), React.createElement(core.FormLabel, {
    style: {
      paddingBottom: '16px',
      fontWeight: 600
    }
  }, label), React.createElement(core.FormGroup, {
    style: {
      flexDirection: horizontal ? 'row' : 'column'
    }
  }, options.map(function (opt) {
    return React.createElement(core.FormControlLabel, {
      key: opt.value,
      classes: {
        root: horizontal ? classes.rootH : classes.rootV,
        label: classes.label
      },
      control: React.createElement(core.Checkbox, {
        icon: React.createElement(UncheckedIcon, {
          disabled: disabled
        }),
        checkedIcon: React.createElement(CheckedIcon, {
          disabled: disabled
        }),
        checked: values[opt.value],
        onChange: handleChange,
        name: opt.value
      }),
      label: opt.label
    });
  })), React.createElement(core.FormHelperText, {
    style: {
      paddingTop: '19px'
    }
  }, helperText));
};

var _excluded$4 = ["variant"],
    _excluded2 = ["variant"];
var LinearProgress = function LinearProgress(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'indeterminate' : _ref$variant,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  return React.createElement(core.LinearProgress, Object.assign({
    variant: variant
  }, props));
};
var CircularProgress = function CircularProgress(_ref2) {
  var _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'indeterminate' : _ref2$variant,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return React.createElement(core.CircularProgress, Object.assign({
    variant: variant
  }, props));
};

var _excluded$5 = ["color"];
var DeleteLine = (function (_ref) {
  var color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$5);

  return React.createElement(core.SvgIcon, Object.assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, props), React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5355 7.75624L16.2426 8.46334L12.7071 11.9989L16.2426 15.5344L15.5355 16.2415L12 12.706L8.46447 16.2415L7.75736 15.5344L11.2929 11.9989L7.75736 8.46334L8.46447 7.75624L12 11.2918L15.5355 7.75624Z',
    fill: color
  }));
});

var _excluded$6 = ["backgroundColor", "textColor", "deleteIcon", "style"];
var Chip = function Chip(_ref) {
  var backgroundColor = _ref.backgroundColor,
      textColor = _ref.textColor,
      deleteIcon = _ref.deleteIcon,
      style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$6);

  return React.createElement(MuiChip, Object.assign({}, props, {
    style: _extends({}, style, {
      backgroundColor: backgroundColor,
      color: textColor
    }),
    deleteIcon: deleteIcon || React.createElement(DeleteLine, {
      color: props.variant === 'outlined' ? colors['blue'] : '#fff'
    })
  }));
};

var Pagination = function Pagination(_ref) {
  var props = _extends({}, _ref);

  return React.createElement(lab.Pagination, Object.assign({
    color: 'primary'
  }, props));
};

var _templateObject$1;
var StyledWrapper$1 = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  .MuiFormControlLabel-root {\n    margin-right: 40px;\n  }\n  .MuiFormControlLabel-label {\n    margin-top: 12px;\n  }\n  .MuiRadio-root {\n    padding: 12px;\n  }\n"])));

var UncheckedIcon$1 = function UncheckedIcon(props) {
  return React.createElement(core.SvgIcon, Object.assign({
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, props), React.createElement("path", {
    d: 'M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12Z',
    fill: 'white',
    stroke: props.disabled ? '#DADADA' : '#6D7785'
  }));
};
var CheckedIcon$1 = function CheckedIcon(props) {
  return React.createElement(core.SvgIcon, Object.assign({
    width: '24',
    height: '25',
    viewBox: '0 0 24 25',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, props), React.createElement("path", {
    d: 'M1 12.8118C1 6.73664 5.92487 1.81177 12 1.81177C18.0751 1.81177 23 6.73664 23 12.8118C23 18.8869 18.0751 23.8118 12 23.8118C5.92487 23.8118 1 18.8869 1 12.8118Z',
    fill: 'white',
    stroke: props.disabled ? '#DADADA' : '#6CC83D',
    strokeWidth: '2'
  }), React.createElement("path", {
    d: 'M7 12.8118C7 10.0503 9.23858 7.81177 12 7.81177C14.7614 7.81177 17 10.0503 17 12.8118C17 15.5732 14.7614 17.8118 12 17.8118C9.23858 17.8118 7 15.5732 7 12.8118Z',
    fill: props.disabled ? '#DADADA' : '#28374C'
  }));
};

var _excluded$7 = ["error", "label", "helperText", "disabled", "value", "onChange", "options", "horizontal"];
var RadiobuttonGroup = function RadiobuttonGroup(_ref) {
  var _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      label = _ref.label,
      helperText = _ref.helperText,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      value = _ref.value,
      onChange = _ref.onChange,
      options = _ref.options,
      _ref$horizontal = _ref.horizontal,
      horizontal = _ref$horizontal === void 0 ? false : _ref$horizontal,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$7);

  var handleChange = function handleChange(event) {
    !!onChange && onChange(event.target.value);
  };

  return React.createElement(StyledWrapper$1, null, React.createElement(core.FormControl, Object.assign({
    error: error,
    disabled: disabled
  }, props), React.createElement(core.FormLabel, {
    style: {
      paddingBottom: '16px',
      fontWeight: 600
    }
  }, label), React.createElement(core.RadioGroup, {
    style: {
      flexDirection: horizontal ? 'row' : 'column'
    },
    value: value,
    onChange: handleChange
  }, options.map(function (opt) {
    return React.createElement(core.FormControlLabel, {
      key: opt.value,
      style: {
        alignItems: 'start'
      },
      value: opt.value,
      control: React.createElement(core.Radio, {
        icon: React.createElement(UncheckedIcon$1, {
          disabled: disabled
        }),
        checkedIcon: React.createElement(CheckedIcon$1, {
          disabled: disabled
        })
      }),
      label: opt.label
    });
  })), React.createElement(core.FormHelperText, {
    style: {
      paddingTop: '19px'
    }
  }, helperText)));
};

var DownArrowIcon = function DownArrowIcon(props) {
  return React.createElement(core.SvgIcon, Object.assign({
    width: '24',
    height: '25',
    viewBox: '0 0 24 25',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, props), React.createElement("path", {
    d: 'M7.41 9.40137L12 13.9814L16.59 9.40137L18 10.8114L12 16.8114L6 10.8114L7.41 9.40137Z',
    fill: '#126AEF'
  }));
};

var _templateObject$2;
var StyledWrapper$2 = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  .MuiOutlinedInput-input {\n    padding: ", ";\n  }\n"])), function (props) {
  return props.hasChip ? '10.5px 12px' : '17px 12px';
});

var _excluded$8 = ["variant", "fullWidth", "error", "label", "helperText", "disabled", "multiple", "value", "onChange", "children"];
var ITEM_HEIGHT = 36;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 7,
      width: 'inherit'
    }
  },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center'
  },
  getContentAnchorEl: null
};
var Select = function Select(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      label = _ref.label,
      helperText = _ref.helperText,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      value = _ref.value,
      onChange = _ref.onChange,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$8);

  return React.createElement(StyledWrapper$2, {
    hasChip: multiple && !!value.length
  }, React.createElement(core.FormControl, Object.assign({
    variant: variant,
    fullWidth: fullWidth,
    error: error,
    disabled: disabled
  }, props), React.createElement(core.InputLabel, null, label), React.createElement(MuiSelect, {
    variant: variant,
    label: label,
    value: value,
    onChange: onChange,
    IconComponent: DownArrowIcon,
    MenuProps: MenuProps,
    multiple: multiple,
    renderValue: function renderValue(selected) {
      return multiple ? selected.map(function (value) {
        return !!value && React.createElement(Chip, {
          key: value,
          label: value,
          variant: 'outlined',
          onDelete: function onDelete() {
            return console.log('deleted');
          },
          style: {
            marginRight: '8px'
          }
        });
      }) : selected;
    }
  }, children), React.createElement(core.FormHelperText, null, helperText)));
};

var useStyles$1 = styles.makeStyles(function () {
  return {
    filledError: {
      fontSize: '14px',
      fontWeight: 400
    },
    filledSuccess: {
      backgroundColor: colors.success,
      fontSize: '14px',
      fontWeight: 400
    },
    filledInfo: {
      backgroundColor: '#28374C',
      fontSize: '14px',
      fontWeight: 400
    }
  };
});

var _excluded$9 = ["autoHideDuration", "onClose", "type", "icon", "message"];

function Alert(props) {
  return React.createElement(MuiAlert, Object.assign({
    elevation: 6,
    variant: 'filled'
  }, props));
}

var Snackbar = function Snackbar(_ref) {
  var _ref$autoHideDuration = _ref.autoHideDuration,
      autoHideDuration = _ref$autoHideDuration === void 0 ? 6000 : _ref$autoHideDuration,
      onClose = _ref.onClose,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'info' : _ref$type,
      icon = _ref.icon,
      message = _ref.message,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$9);

  var classes = useStyles$1();
  return React.createElement(core.Snackbar, Object.assign({
    onClose: onClose,
    autoHideDuration: autoHideDuration
  }, props), React.createElement(Alert, {
    onClose: onClose,
    severity: type,
    icon: icon,
    classes: {
      filledError: classes.filledError,
      filledInfo: classes.filledInfo,
      filledSuccess: classes.filledSuccess
    }
  }, message));
};

var _templateObject$3;
var StyledWrapper$3 = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  .MuiFormControlLabel-label {\n    margin-top: ", ";\n  }\n  .MuiSwitch-track {\n    background-color: #6d7785;\n  }\n  .MuiSwitch-thumb {\n    background-color: #6d7785;\n    box-shadow: none;\n  }\n  .Mui-checked {\n    .MuiSwitch-track {\n      background-color: #126AEF;\n    }\n    .MuiSwitch-thumb {\n      background-color: #126AEF;\n    }\n  }\n"])), function (props) {
  return props.size === 'small' ? '0px' : '8px';
});

var _excluded$a = ["error", "label", "helperText", "disabled", "value", "onChange", "name", "size"];
var Switch = function Switch(_ref) {
  var _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      label = _ref.label,
      helperText = _ref.helperText,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      value = _ref.value,
      onChange = _ref.onChange,
      name = _ref.name,
      size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$a);

  var handleChange = function handleChange(event) {
    !!onChange && onChange(event.target.checked);
  };

  return React.createElement(StyledWrapper$3, {
    size: size
  }, React.createElement(core.FormControl, Object.assign({
    error: error,
    disabled: disabled
  }, props), React.createElement(core.FormLabel, {
    style: {
      paddingBottom: '16px',
      fontWeight: 600
    }
  }, label), React.createElement(core.FormGroup, null, React.createElement(core.FormControlLabel, {
    style: {
      alignItems: 'start'
    },
    control: React.createElement(core.Switch, {
      checked: value,
      onChange: handleChange,
      name: name,
      size: size
    }),
    label: label
  })), React.createElement(core.FormHelperText, {
    style: {
      paddingTop: '19px'
    }
  }, helperText)));
};

var useStyles$2 = styles.makeStyles(function () {
  return {
    root: {}
  };
});

var cleaveReactNode = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory(React);
})(commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(1); // eslint-disable-line no-unused-vars
	var CreateReactClass = __webpack_require__(2);

	var NumeralFormatter = __webpack_require__(9);
	var DateFormatter = __webpack_require__(10);
	var TimeFormatter = __webpack_require__(11);
	var PhoneFormatter = __webpack_require__(12);
	var CreditCardDetector = __webpack_require__(13);
	var Util = __webpack_require__(14);
	var DefaultProperties = __webpack_require__(15);

	var cleaveReactClass = CreateReactClass({
	    componentDidMount: function componentDidMount() {
	        this.init();
	    },

	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        var owner = this,
	            phoneRegionCode = (owner.props.options || {}).phoneRegionCode,
	            newValue = owner.props.value,
	            pps = owner.properties;

	        owner.updateRegisteredEvents(owner.props);
	        if (prevProps.value !== newValue && newValue !== undefined && newValue !== null) {
	            newValue = newValue.toString();

	            if (newValue !== owner.properties.result) {
	                owner.properties.initValue = newValue;
	                owner.onInput(newValue, true);
	            }
	        }

	        // update phone region code
	        var prevPhoneRegionCode = (prevProps.options || {}).phoneRegionCode;
	        if (prevPhoneRegionCode !== phoneRegionCode && phoneRegionCode && phoneRegionCode !== owner.properties.phoneRegionCode) {
	            owner.properties.phoneRegionCode = phoneRegionCode;
	            owner.initPhoneFormatter();
	            owner.onInput(owner.properties.result);
	        }

	        Util.setSelection(owner.element, owner.state.cursorPosition, pps.document);
	    },

	    updateRegisteredEvents: function updateRegisteredEvents(props) {
	        var owner = this,
	            _owner$registeredEven = owner.registeredEvents,
	            onKeyDown = _owner$registeredEven.onKeyDown,
	            onChange = _owner$registeredEven.onChange,
	            onFocus = _owner$registeredEven.onFocus,
	            onBlur = _owner$registeredEven.onBlur,
	            onInit = _owner$registeredEven.onInit;


	        if (props.onInit && props.onInit !== onInit) owner.registeredEvents.onInit = props.onInit;
	        if (props.onChange && props.onChange !== onChange) owner.registeredEvents.onChange = props.onChange;
	        if (props.onFocus && props.onFocus !== onFocus) owner.registeredEvents.onFocus = props.onFocus;
	        if (props.onBlur && props.onBlur !== onBlur) owner.registeredEvents.onBlur = props.onBlur;
	        if (props.onKeyDown && props.onKeyDown !== onKeyDown) owner.registeredEvents.onKeyDown = props.onKeyDown;
	    },

	    getInitialState: function getInitialState() {
	        var owner = this,
	            _owner$props = owner.props,
	            value = _owner$props.value,
	            options = _owner$props.options,
	            onKeyDown = _owner$props.onKeyDown,
	            onChange = _owner$props.onChange,
	            onFocus = _owner$props.onFocus,
	            onBlur = _owner$props.onBlur,
	            onInit = _owner$props.onInit;


	        owner.registeredEvents = {
	            onInit: onInit || Util.noop,
	            onChange: onChange || Util.noop,
	            onFocus: onFocus || Util.noop,
	            onBlur: onBlur || Util.noop,
	            onKeyDown: onKeyDown || Util.noop
	        };

	        if (!options) {
	            options = {};
	        }

	        options.initValue = value;

	        owner.properties = DefaultProperties.assign({}, options);

	        return {
	            value: owner.properties.result,
	            cursorPosition: 0
	        };
	    },

	    init: function init() {
	        var owner = this,
	            pps = owner.properties;

	        // so no need for this lib at all
	        if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.time && !pps.date && pps.blocksLength === 0 && !pps.prefix) {
	            owner.onInput(pps.initValue);
	            owner.registeredEvents.onInit(owner);

	            return;
	        }

	        pps.maxLength = Util.getMaxLength(pps.blocks);

	        owner.isAndroid = Util.isAndroid();

	        owner.initPhoneFormatter();
	        owner.initDateFormatter();
	        owner.initTimeFormatter();
	        owner.initNumeralFormatter();

	        // avoid touch input field if value is null
	        // otherwise Firefox will add red box-shadow for <input required />
	        if (pps.initValue || pps.prefix && !pps.noImmediatePrefix) {
	            owner.onInput(pps.initValue);
	        }

	        owner.registeredEvents.onInit(owner);
	    },

	    initNumeralFormatter: function initNumeralFormatter() {
	        var owner = this,
	            pps = owner.properties;

	        if (!pps.numeral) {
	            return;
	        }

	        pps.numeralFormatter = new NumeralFormatter(pps.numeralDecimalMark, pps.numeralIntegerScale, pps.numeralDecimalScale, pps.numeralThousandsGroupStyle, pps.numeralPositiveOnly, pps.stripLeadingZeroes, pps.prefix, pps.signBeforePrefix, pps.tailPrefix, pps.delimiter);
	    },

	    initTimeFormatter: function initTimeFormatter() {
	        var owner = this,
	            pps = owner.properties;

	        if (!pps.time) {
	            return;
	        }

	        pps.timeFormatter = new TimeFormatter(pps.timePattern, pps.timeFormat);
	        pps.blocks = pps.timeFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);
	    },

	    initDateFormatter: function initDateFormatter() {
	        var owner = this,
	            pps = owner.properties;

	        if (!pps.date) {
	            return;
	        }

	        pps.dateFormatter = new DateFormatter(pps.datePattern, pps.dateMin, pps.dateMax);
	        pps.blocks = pps.dateFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);
	    },

	    initPhoneFormatter: function initPhoneFormatter() {
	        var owner = this,
	            pps = owner.properties;

	        if (!pps.phone) {
	            return;
	        }

	        // Cleave.AsYouTypeFormatter should be provided by
	        // external google closure lib
	        try {
	            pps.phoneFormatter = new PhoneFormatter(new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode), pps.delimiter);
	        } catch (ex) {
	            throw new Error('Please include phone-type-formatter.{country}.js lib');
	        }
	    },

	    setRawValue: function setRawValue(value) {
	        var owner = this,
	            pps = owner.properties;

	        value = value !== undefined && value !== null ? value.toString() : '';

	        if (pps.numeral) {
	            value = value.replace('.', pps.numeralDecimalMark);
	        }

	        pps.postDelimiterBackspace = false;

	        owner.onChange({
	            target: { value: value },

	            // Methods to better resemble a SyntheticEvent
	            stopPropagation: Util.noop,
	            preventDefault: Util.noop,
	            persist: Util.noop
	        });
	    },

	    getRawValue: function getRawValue() {
	        var owner = this,
	            pps = owner.properties,
	            rawValue = pps.result;

	        if (pps.rawValueTrimPrefix) {
	            rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);
	        }

	        if (pps.numeral) {
	            rawValue = pps.numeralFormatter ? pps.numeralFormatter.getRawValue(rawValue) : '';
	        } else {
	            rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
	        }

	        return rawValue;
	    },

	    getISOFormatDate: function getISOFormatDate() {
	        var owner = this,
	            pps = owner.properties;

	        return pps.date ? pps.dateFormatter.getISOFormatDate() : '';
	    },

	    getISOFormatTime: function getISOFormatTime() {
	        var owner = this,
	            pps = owner.properties;

	        return pps.time ? pps.timeFormatter.getISOFormatTime() : '';
	    },

	    onInit: function onInit(owner) {
	        return owner;
	    },

	    onKeyDown: function onKeyDown(event) {
	        var owner = this,
	            pps = owner.properties,
	            charCode = event.which || event.keyCode;

	        owner.lastInputValue = pps.result;
	        owner.isBackward = charCode === 8;

	        owner.registeredEvents.onKeyDown(event);
	    },

	    onFocus: function onFocus(event) {
	        var owner = this,
	            pps = owner.properties;

	        if (pps.prefix && pps.noImmediatePrefix && !event.target.value) {
	            owner.onInput(pps.prefix);
	        }

	        event.target.rawValue = owner.getRawValue();
	        event.target.value = pps.result;

	        owner.registeredEvents.onFocus(event);

	        Util.fixPrefixCursor(owner.element, pps.prefix, pps.delimiter, pps.delimiters);
	    },

	    onBlur: function onBlur(event) {
	        var owner = this,
	            pps = owner.properties;

	        event.target.rawValue = owner.getRawValue();
	        event.target.value = pps.result;

	        owner.registeredEvents.onBlur(event);
	    },

	    onChange: function onChange(event) {
	        var owner = this,
	            pps = owner.properties;

	        owner.isBackward = owner.isBackward || event.inputType === 'deleteContentBackward';
	        // hit backspace when last character is delimiter
	        var postDelimiter = Util.getPostDelimiter(owner.lastInputValue, pps.delimiter, pps.delimiters);

	        if (owner.isBackward && postDelimiter) {
	            pps.postDelimiterBackspace = postDelimiter;
	        } else {
	            pps.postDelimiterBackspace = false;
	        }

	        owner.onInput(event.target.value);

	        event.target.rawValue = owner.getRawValue();
	        event.target.value = pps.result;

	        owner.registeredEvents.onChange(event);
	    },

	    onInput: function onInput(value, fromProps) {
	        var owner = this,
	            pps = owner.properties;

	        // case 1: delete one more character "4"
	        // 1234*| -> hit backspace -> 123|
	        // case 2: last character is not delimiter which is:
	        // 12|34* -> hit backspace -> 1|34*
	        var postDelimiterAfter = Util.getPostDelimiter(value, pps.delimiter, pps.delimiters);
	        if (!fromProps && !pps.numeral && pps.postDelimiterBackspace && !postDelimiterAfter) {
	            value = Util.headStr(value, value.length - pps.postDelimiterBackspace.length);
	        }

	        // phone formatter
	        if (pps.phone) {
	            if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	                pps.result = pps.prefix + pps.phoneFormatter.format(value).slice(pps.prefix.length);
	            } else {
	                pps.result = pps.phoneFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	        // numeral formatter
	        if (pps.numeral) {
	            // Do not show prefix when noImmediatePrefix is specified
	            // This mostly because we need to show user the native input placeholder
	            if (pps.prefix && pps.noImmediatePrefix && value.length === 0) {
	                pps.result = '';
	            } else {
	                pps.result = pps.numeralFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	        // date
	        if (pps.date) {
	            value = pps.dateFormatter.getValidatedDate(value);
	        }

	        // time
	        if (pps.time) {
	            value = pps.timeFormatter.getValidatedTime(value);
	        }

	        // strip delimiters
	        value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);

	        // strip prefix
	        value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters, pps.noImmediatePrefix, pps.tailPrefix, pps.signBeforePrefix);

	        // strip non-numeric characters
	        value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;

	        // convert case
	        value = pps.uppercase ? value.toUpperCase() : value;
	        value = pps.lowercase ? value.toLowerCase() : value;

	        // prevent from showing prefix when no immediate option enabled with empty input value
	        if (pps.prefix) {
	            if (pps.tailPrefix) {
	                value = value + pps.prefix;
	            } else {
	                value = pps.prefix + value;
	            }

	            // no blocks specified, no need to do formatting
	            if (pps.blocksLength === 0) {
	                pps.result = value;
	                owner.updateValueState();

	                return;
	            }
	        }

	        // update credit card props
	        if (pps.creditCard) {
	            owner.updateCreditCardPropsByValue(value);
	        }

	        // strip over length characters
	        value = pps.maxLength > 0 ? Util.headStr(value, pps.maxLength) : value;

	        // apply blocks
	        pps.result = Util.getFormattedValue(value, pps.blocks, pps.blocksLength, pps.delimiter, pps.delimiters, pps.delimiterLazyShow);

	        owner.updateValueState();
	    },

	    updateCreditCardPropsByValue: function updateCreditCardPropsByValue(value) {
	        var owner = this,
	            pps = owner.properties,
	            creditCardInfo;

	        // At least one of the first 4 characters has changed
	        if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) {
	            return;
	        }

	        creditCardInfo = CreditCardDetector.getInfo(value, pps.creditCardStrictMode);

	        pps.blocks = creditCardInfo.blocks;
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);

	        // credit card type changed
	        if (pps.creditCardType !== creditCardInfo.type) {
	            pps.creditCardType = creditCardInfo.type;

	            pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
	        }
	    },

	    updateValueState: function updateValueState() {
	        var owner = this,
	            pps = owner.properties;

	        if (!owner.element) {
	            owner.setState({ value: pps.result });
	            return;
	        }

	        var endPos = owner.element.selectionEnd;
	        var oldValue = owner.element.value;
	        var newValue = pps.result;

	        owner.lastInputValue = newValue;

	        endPos = Util.getNextCursorPosition(endPos, oldValue, newValue, pps.delimiter, pps.delimiters);

	        if (owner.isAndroid) {
	            window.setTimeout(function () {
	                owner.setState({ value: newValue, cursorPosition: endPos });
	            }, 1);

	            return;
	        }

	        owner.setState({ value: newValue, cursorPosition: endPos });
	    },

	    render: function render() {
	        var owner = this;
	        // eslint-disable-next-line

	        var _owner$props2 = owner.props,
	            htmlRef = _owner$props2.htmlRef,
	            propsToTransfer = _objectWithoutProperties(_owner$props2, ['value', 'options', 'onKeyDown', 'onFocus', 'onBlur', 'onChange', 'onInit', 'htmlRef']);

	        return React.createElement('input', _extends({
	            type: 'text',
	            ref: function ref(_ref) {
	                owner.element = _ref;

	                if (!htmlRef) {
	                    return;
	                }

	                htmlRef.apply(this, arguments);
	            },
	            value: owner.state.value,
	            onKeyDown: owner.onKeyDown,
	            onChange: owner.onChange,
	            onFocus: owner.onFocus,
	            onBlur: owner.onBlur
	        }, propsToTransfer));
	    }
	});

	module.exports = cleaveReactClass;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var factory = __webpack_require__(3);

	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;

	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var _assign = __webpack_require__(4);

	var emptyObject = __webpack_require__(5);
	var _invariant = __webpack_require__(6);

	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(7);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }

	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;

	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );

	        Constructor[name] = createMergedResultFunction(Constructor[name], property);

	        return;
	      }

	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;


/***/ }),
/* 4 */
/***/ (function(module, exports) {
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var emptyFunction = __webpack_require__(8);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var NumeralFormatter = function NumeralFormatter(numeralDecimalMark, numeralIntegerScale, numeralDecimalScale, numeralThousandsGroupStyle, numeralPositiveOnly, stripLeadingZeroes, prefix, signBeforePrefix, tailPrefix, delimiter) {
	    var owner = this;

	    owner.numeralDecimalMark = numeralDecimalMark || '.';
	    owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
	    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
	    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
	    owner.numeralPositiveOnly = !!numeralPositiveOnly;
	    owner.stripLeadingZeroes = stripLeadingZeroes !== false;
	    owner.prefix = prefix || prefix === '' ? prefix : '';
	    owner.signBeforePrefix = !!signBeforePrefix;
	    owner.tailPrefix = !!tailPrefix;
	    owner.delimiter = delimiter || delimiter === '' ? delimiter : ',';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
	};

	NumeralFormatter.groupStyle = {
	    thousand: 'thousand',
	    lakh: 'lakh',
	    wan: 'wan',
	    none: 'none'
	};

	NumeralFormatter.prototype = {
	    getRawValue: function getRawValue(value) {
	        return value.replace(this.delimiterRE, '').replace(this.numeralDecimalMark, '.');
	    },

	    format: function format(value) {
	        var owner = this,
	            parts,
	            partSign,
	            partSignAndPrefix,
	            partInteger,
	            partDecimal = '';

	        // strip alphabet letters
	        value = value.replace(/[A-Za-z]/g, '')
	        // replace the first decimal mark with reserved placeholder
	        .replace(owner.numeralDecimalMark, 'M')

	        // strip non numeric letters except minus and "M"
	        // this is to ensure prefix has been stripped
	        .replace(/[^\dM-]/g, '')

	        // replace the leading minus with reserved placeholder
	        .replace(/^\-/, 'N')

	        // strip the other minus sign (if present)
	        .replace(/\-/g, '')

	        // replace the minus sign (if present)
	        .replace('N', owner.numeralPositiveOnly ? '' : '-')

	        // replace decimal mark
	        .replace('M', owner.numeralDecimalMark);

	        // strip any leading zeros
	        if (owner.stripLeadingZeroes) {
	            value = value.replace(/^(-)?0+(?=\d)/, '$1');
	        }

	        partSign = value.slice(0, 1) === '-' ? '-' : '';
	        if (typeof owner.prefix != 'undefined') {
	            if (owner.signBeforePrefix) {
	                partSignAndPrefix = partSign + owner.prefix;
	            } else {
	                partSignAndPrefix = owner.prefix + partSign;
	            }
	        } else {
	            partSignAndPrefix = partSign;
	        }

	        partInteger = value;

	        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
	            parts = value.split(owner.numeralDecimalMark);
	            partInteger = parts[0];
	            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
	        }

	        if (partSign === '-') {
	            partInteger = partInteger.slice(1);
	        }

	        if (owner.numeralIntegerScale > 0) {
	            partInteger = partInteger.slice(0, owner.numeralIntegerScale);
	        }

	        switch (owner.numeralThousandsGroupStyle) {
	            case NumeralFormatter.groupStyle.lakh:
	                partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + owner.delimiter);

	                break;

	            case NumeralFormatter.groupStyle.wan:
	                partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, '$1' + owner.delimiter);

	                break;

	            case NumeralFormatter.groupStyle.thousand:
	                partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + owner.delimiter);

	                break;
	        }

	        if (owner.tailPrefix) {
	            return partSign + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '') + owner.prefix;
	        }

	        return partSignAndPrefix + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '');
	    }
	};

	module.exports = NumeralFormatter;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	var DateFormatter = function DateFormatter(datePattern, dateMin, dateMax) {
	    var owner = this;

	    owner.date = [];
	    owner.blocks = [];
	    owner.datePattern = datePattern;
	    owner.dateMin = dateMin.split('-').reverse().map(function (x) {
	        return parseInt(x, 10);
	    });
	    if (owner.dateMin.length === 2) owner.dateMin.unshift(0);

	    owner.dateMax = dateMax.split('-').reverse().map(function (x) {
	        return parseInt(x, 10);
	    });
	    if (owner.dateMax.length === 2) owner.dateMax.unshift(0);

	    owner.initBlocks();
	};

	DateFormatter.prototype = {
	    initBlocks: function initBlocks() {
	        var owner = this;
	        owner.datePattern.forEach(function (value) {
	            if (value === 'Y') {
	                owner.blocks.push(4);
	            } else {
	                owner.blocks.push(2);
	            }
	        });
	    },

	    getISOFormatDate: function getISOFormatDate() {
	        var owner = this,
	            date = owner.date;

	        return date[2] ? date[2] + '-' + owner.addLeadingZero(date[1]) + '-' + owner.addLeadingZero(date[0]) : '';
	    },

	    getBlocks: function getBlocks() {
	        return this.blocks;
	    },

	    getValidatedDate: function getValidatedDate(value) {
	        var owner = this,
	            result = '';

	        value = value.replace(/[^\d]/g, '');

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.datePattern[index]) {
	                    case 'd':
	                        if (sub === '00') {
	                            sub = '01';
	                        } else if (parseInt(sub0, 10) > 3) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > 31) {
	                            sub = '31';
	                        }

	                        break;

	                    case 'm':
	                        if (sub === '00') {
	                            sub = '01';
	                        } else if (parseInt(sub0, 10) > 1) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > 12) {
	                            sub = '12';
	                        }

	                        break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return this.getFixedDateString(result);
	    },

	    getFixedDateString: function getFixedDateString(value) {
	        var owner = this,
	            datePattern = owner.datePattern,
	            date = [],
	            dayIndex = 0,
	            monthIndex = 0,
	            yearIndex = 0,
	            dayStartIndex = 0,
	            monthStartIndex = 0,
	            yearStartIndex = 0,
	            day,
	            month,
	            year,
	            fullYearDone = false;

	        // mm-dd || dd-mm
	        if (value.length === 4 && datePattern[0].toLowerCase() !== 'y' && datePattern[1].toLowerCase() !== 'y') {
	            dayStartIndex = datePattern[0] === 'd' ? 0 : 2;
	            monthStartIndex = 2 - dayStartIndex;
	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);

	            date = this.getFixedDate(day, month, 0);
	        }

	        // yyyy-mm-dd || yyyy-dd-mm || mm-dd-yyyy || dd-mm-yyyy || dd-yyyy-mm || mm-yyyy-dd
	        if (value.length === 8) {
	            datePattern.forEach(function (type, index) {
	                switch (type) {
	                    case 'd':
	                        dayIndex = index;
	                        break;
	                    case 'm':
	                        monthIndex = index;
	                        break;
	                    default:
	                        yearIndex = index;
	                        break;
	                }
	            });

	            yearStartIndex = yearIndex * 2;
	            dayStartIndex = dayIndex <= yearIndex ? dayIndex * 2 : dayIndex * 2 + 2;
	            monthStartIndex = monthIndex <= yearIndex ? monthIndex * 2 : monthIndex * 2 + 2;

	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

	            date = this.getFixedDate(day, month, year);
	        }

	        // mm-yy || yy-mm
	        if (value.length === 4 && (datePattern[0] === 'y' || datePattern[1] === 'y')) {
	            monthStartIndex = datePattern[0] === 'm' ? 0 : 2;
	            yearStartIndex = 2 - monthStartIndex;
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 2), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 2).length === 2;

	            date = [0, month, year];
	        }

	        // mm-yyyy || yyyy-mm
	        if (value.length === 6 && (datePattern[0] === 'Y' || datePattern[1] === 'Y')) {
	            monthStartIndex = datePattern[0] === 'm' ? 0 : 4;
	            yearStartIndex = 2 - 0.5 * monthStartIndex;
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

	            date = [0, month, year];
	        }

	        date = owner.getRangeFixedDate(date);
	        owner.date = date;

	        var result = date.length === 0 ? value : datePattern.reduce(function (previous, current) {
	            switch (current) {
	                case 'd':
	                    return previous + (date[0] === 0 ? '' : owner.addLeadingZero(date[0]));
	                case 'm':
	                    return previous + (date[1] === 0 ? '' : owner.addLeadingZero(date[1]));
	                case 'y':
	                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], false) : '');
	                case 'Y':
	                    return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], true) : '');
	            }
	        }, '');

	        return result;
	    },

	    getRangeFixedDate: function getRangeFixedDate(date) {
	        var owner = this,
	            datePattern = owner.datePattern,
	            dateMin = owner.dateMin || [],
	            dateMax = owner.dateMax || [];

	        if (!date.length || dateMin.length < 3 && dateMax.length < 3) return date;

	        if (datePattern.find(function (x) {
	            return x.toLowerCase() === 'y';
	        }) && date[2] === 0) return date;

	        if (dateMax.length && (dateMax[2] < date[2] || dateMax[2] === date[2] && (dateMax[1] < date[1] || dateMax[1] === date[1] && dateMax[0] < date[0]))) return dateMax;

	        if (dateMin.length && (dateMin[2] > date[2] || dateMin[2] === date[2] && (dateMin[1] > date[1] || dateMin[1] === date[1] && dateMin[0] > date[0]))) return dateMin;

	        return date;
	    },

	    getFixedDate: function getFixedDate(day, month, year) {
	        day = Math.min(day, 31);
	        month = Math.min(month, 12);
	        year = parseInt(year || 0, 10);

	        if (month < 7 && month % 2 === 0 || month > 8 && month % 2 === 1) {
	            day = Math.min(day, month === 2 ? this.isLeapYear(year) ? 29 : 28 : 30);
	        }

	        return [day, month, year];
	    },

	    isLeapYear: function isLeapYear(year) {
	        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	    },

	    addLeadingZero: function addLeadingZero(number) {
	        return (number < 10 ? '0' : '') + number;
	    },

	    addLeadingZeroForYear: function addLeadingZeroForYear(number, fullYearMode) {
	        if (fullYearMode) {
	            return (number < 10 ? '000' : number < 100 ? '00' : number < 1000 ? '0' : '') + number;
	        }

	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = DateFormatter;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	var TimeFormatter = function TimeFormatter(timePattern, timeFormat) {
	    var owner = this;

	    owner.time = [];
	    owner.blocks = [];
	    owner.timePattern = timePattern;
	    owner.timeFormat = timeFormat;
	    owner.initBlocks();
	};

	TimeFormatter.prototype = {
	    initBlocks: function initBlocks() {
	        var owner = this;
	        owner.timePattern.forEach(function () {
	            owner.blocks.push(2);
	        });
	    },

	    getISOFormatTime: function getISOFormatTime() {
	        var owner = this,
	            time = owner.time;

	        return time[2] ? owner.addLeadingZero(time[0]) + ':' + owner.addLeadingZero(time[1]) + ':' + owner.addLeadingZero(time[2]) : '';
	    },

	    getBlocks: function getBlocks() {
	        return this.blocks;
	    },

	    getTimeFormatOptions: function getTimeFormatOptions() {
	        var owner = this;
	        if (String(owner.timeFormat) === '12') {
	            return {
	                maxHourFirstDigit: 1,
	                maxHours: 12,
	                maxMinutesFirstDigit: 5,
	                maxMinutes: 60
	            };
	        }

	        return {
	            maxHourFirstDigit: 2,
	            maxHours: 23,
	            maxMinutesFirstDigit: 5,
	            maxMinutes: 60
	        };
	    },

	    getValidatedTime: function getValidatedTime(value) {
	        var owner = this,
	            result = '';

	        value = value.replace(/[^\d]/g, '');

	        var timeFormatOptions = owner.getTimeFormatOptions();

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.timePattern[index]) {

	                    case 'h':
	                        if (parseInt(sub0, 10) > timeFormatOptions.maxHourFirstDigit) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > timeFormatOptions.maxHours) {
	                            sub = timeFormatOptions.maxHours + '';
	                        }

	                        break;

	                    case 'm':
	                    case 's':
	                        if (parseInt(sub0, 10) > timeFormatOptions.maxMinutesFirstDigit) {
	                            sub = '0' + sub0;
	                        } else if (parseInt(sub, 10) > timeFormatOptions.maxMinutes) {
	                            sub = timeFormatOptions.maxMinutes + '';
	                        }
	                        break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return this.getFixedTimeString(result);
	    },

	    getFixedTimeString: function getFixedTimeString(value) {
	        var owner = this,
	            timePattern = owner.timePattern,
	            time = [],
	            secondIndex = 0,
	            minuteIndex = 0,
	            hourIndex = 0,
	            secondStartIndex = 0,
	            minuteStartIndex = 0,
	            hourStartIndex = 0,
	            second,
	            minute,
	            hour;

	        if (value.length === 6) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                    case 's':
	                        secondIndex = index * 2;
	                        break;
	                    case 'm':
	                        minuteIndex = index * 2;
	                        break;
	                    case 'h':
	                        hourIndex = index * 2;
	                        break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;
	            secondStartIndex = secondIndex;

	            second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10);
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        if (value.length === 4 && owner.timePattern.indexOf('s') < 0) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                    case 'm':
	                        minuteIndex = index * 2;
	                        break;
	                    case 'h':
	                        hourIndex = index * 2;
	                        break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;

	            second = 0;
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        owner.time = time;

	        return time.length === 0 ? value : timePattern.reduce(function (previous, current) {
	            switch (current) {
	                case 's':
	                    return previous + owner.addLeadingZero(time[2]);
	                case 'm':
	                    return previous + owner.addLeadingZero(time[1]);
	                case 'h':
	                    return previous + owner.addLeadingZero(time[0]);
	            }
	        }, '');
	    },

	    getFixedTime: function getFixedTime(hour, minute, second) {
	        second = Math.min(parseInt(second || 0, 10), 60);
	        minute = Math.min(minute, 60);
	        hour = Math.min(hour, 60);

	        return [hour, minute, second];
	    },

	    addLeadingZero: function addLeadingZero(number) {
	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = TimeFormatter;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	var PhoneFormatter = function PhoneFormatter(formatter, delimiter) {
	    var owner = this;

	    owner.delimiter = delimiter || delimiter === '' ? delimiter : ' ';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

	    owner.formatter = formatter;
	};

	PhoneFormatter.prototype = {
	    setFormatter: function setFormatter(formatter) {
	        this.formatter = formatter;
	    },

	    format: function format(phoneNumber) {
	        var owner = this;

	        owner.formatter.clear();

	        // only keep number and +
	        phoneNumber = phoneNumber.replace(/[^\d+]/g, '');

	        // strip non-leading +
	        phoneNumber = phoneNumber.replace(/^\+/, 'B').replace(/\+/g, '').replace('B', '+');

	        // strip delimiter
	        phoneNumber = phoneNumber.replace(owner.delimiterRE, '');

	        var result = '',
	            current,
	            validated = false;

	        for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
	            current = owner.formatter.inputDigit(phoneNumber.charAt(i));

	            // has ()- or space inside
	            if (/[\s()-]/g.test(current)) {
	                result = current;

	                validated = true;
	            } else {
	                if (!validated) {
	                    result = current;
	                }
	                // else: over length input
	                // it turns to invalid number again
	            }
	        }

	        // strip ()
	        // e.g. US: 7161234567 returns (716) 123-4567
	        result = result.replace(/[()]/g, '');
	        // replace library delimiter with user customized delimiter
	        result = result.replace(/[\s-]/g, owner.delimiter);

	        return result;
	    }
	};

	module.exports = PhoneFormatter;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	var CreditCardDetector = {
	    blocks: {
	        uatp: [4, 5, 6],
	        amex: [4, 6, 5],
	        diners: [4, 6, 4],
	        discover: [4, 4, 4, 4],
	        mastercard: [4, 4, 4, 4],
	        dankort: [4, 4, 4, 4],
	        instapayment: [4, 4, 4, 4],
	        jcb15: [4, 6, 5],
	        jcb: [4, 4, 4, 4],
	        maestro: [4, 4, 4, 4],
	        visa: [4, 4, 4, 4],
	        mir: [4, 4, 4, 4],
	        unionPay: [4, 4, 4, 4],
	        general: [4, 4, 4, 4]
	    },

	    re: {
	        // starts with 1; 15 digits, not starts with 1800 (jcb card)
	        uatp: /^(?!1800)1\d{0,14}/,

	        // starts with 34/37; 15 digits
	        amex: /^3[47]\d{0,13}/,

	        // starts with 6011/65/644-649; 16 digits
	        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

	        // starts with 300-305/309 or 36/38/39; 14 digits
	        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

	        // starts with 51-55/2221–2720; 16 digits
	        mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

	        // starts with 5019/4175/4571; 16 digits
	        dankort: /^(5019|4175|4571)\d{0,12}/,

	        // starts with 637-639; 16 digits
	        instapayment: /^63[7-9]\d{0,13}/,

	        // starts with 2131/1800; 15 digits
	        jcb15: /^(?:2131|1800)\d{0,11}/,

	        // starts with 2131/1800/35; 16 digits
	        jcb: /^(?:35\d{0,2})\d{0,12}/,

	        // starts with 50/56-58/6304/67; 16 digits
	        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

	        // starts with 22; 16 digits
	        mir: /^220[0-4]\d{0,12}/,

	        // starts with 4; 16 digits
	        visa: /^4\d{0,15}/,

	        // starts with 62/81; 16 digits
	        unionPay: /^(62|81)\d{0,14}/
	    },

	    getStrictBlocks: function getStrictBlocks(block) {
	        var total = block.reduce(function (prev, current) {
	            return prev + current;
	        }, 0);

	        return block.concat(19 - total);
	    },

	    getInfo: function getInfo(value, strictMode) {
	        var blocks = CreditCardDetector.blocks,
	            re = CreditCardDetector.re;

	        // Some credit card can have up to 19 digits number.
	        // Set strictMode to true will remove the 16 max-length restrain,
	        // however, I never found any website validate card number like
	        // this, hence probably you don't want to enable this option.
	        strictMode = !!strictMode;

	        for (var key in re) {
	            if (re[key].test(value)) {
	                var matchedBlocks = blocks[key];
	                return {
	                    type: key,
	                    blocks: strictMode ? this.getStrictBlocks(matchedBlocks) : matchedBlocks
	                };
	            }
	        }

	        return {
	            type: 'unknown',
	            blocks: strictMode ? this.getStrictBlocks(blocks.general) : blocks.general
	        };
	    }
	};

	module.exports = CreditCardDetector;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var Util = {
	    noop: function noop() {},

	    strip: function strip(value, re) {
	        return value.replace(re, '');
	    },

	    getPostDelimiter: function getPostDelimiter(value, delimiter, delimiters) {
	        // single delimiter
	        if (delimiters.length === 0) {
	            return value.slice(-delimiter.length) === delimiter ? delimiter : '';
	        }

	        // multiple delimiters
	        var matchedDelimiter = '';
	        delimiters.forEach(function (current) {
	            if (value.slice(-current.length) === current) {
	                matchedDelimiter = current;
	            }
	        });

	        return matchedDelimiter;
	    },

	    getDelimiterREByDelimiter: function getDelimiterREByDelimiter(delimiter) {
	        return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
	    },

	    getNextCursorPosition: function getNextCursorPosition(prevPos, oldValue, newValue, delimiter, delimiters) {
	        // If cursor was at the end of value, just place it back.
	        // Because new value could contain additional chars.
	        if (oldValue.length === prevPos) {
	            return newValue.length;
	        }

	        return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters);
	    },

	    getPositionOffset: function getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters) {
	        var oldRawValue, newRawValue, lengthOffset;

	        oldRawValue = this.stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
	        newRawValue = this.stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
	        lengthOffset = oldRawValue.length - newRawValue.length;

	        return lengthOffset !== 0 ? lengthOffset / Math.abs(lengthOffset) : 0;
	    },

	    stripDelimiters: function stripDelimiters(value, delimiter, delimiters) {
	        var owner = this;

	        // single delimiter
	        if (delimiters.length === 0) {
	            var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : '';

	            return value.replace(delimiterRE, '');
	        }

	        // multiple delimiters
	        delimiters.forEach(function (current) {
	            current.split('').forEach(function (letter) {
	                value = value.replace(owner.getDelimiterREByDelimiter(letter), '');
	            });
	        });

	        return value;
	    },

	    headStr: function headStr(str, length) {
	        return str.slice(0, length);
	    },

	    getMaxLength: function getMaxLength(blocks) {
	        return blocks.reduce(function (previous, current) {
	            return previous + current;
	        }, 0);
	    },

	    // strip prefix
	    // Before type  |   After type    |     Return value
	    // PEFIX-...    |   PEFIX-...     |     ''
	    // PREFIX-123   |   PEFIX-123     |     123
	    // PREFIX-123   |   PREFIX-23     |     23
	    // PREFIX-123   |   PREFIX-1234   |     1234
	    getPrefixStrippedValue: function getPrefixStrippedValue(value, prefix, prefixLength, prevResult, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix) {
	        // No prefix
	        if (prefixLength === 0) {
	            return value;
	        }

	        // Value is prefix
	        if (value === prefix && value !== '') {
	            return '';
	        }

	        if (signBeforePrefix && value.slice(0, 1) == '-') {
	            var prev = prevResult.slice(0, 1) == '-' ? prevResult.slice(1) : prevResult;
	            return '-' + this.getPrefixStrippedValue(value.slice(1), prefix, prefixLength, prev, delimiter, delimiters, noImmediatePrefix, tailPrefix, signBeforePrefix);
	        }

	        // Pre result prefix string does not match pre-defined prefix
	        if (prevResult.slice(0, prefixLength) !== prefix && !tailPrefix) {
	            // Check if the first time user entered something
	            if (noImmediatePrefix && !prevResult && value) return value;
	            return '';
	        } else if (prevResult.slice(-prefixLength) !== prefix && tailPrefix) {
	            // Check if the first time user entered something
	            if (noImmediatePrefix && !prevResult && value) return value;
	            return '';
	        }

	        var prevValue = this.stripDelimiters(prevResult, delimiter, delimiters);

	        // New value has issue, someone typed in between prefix letters
	        // Revert to pre value
	        if (value.slice(0, prefixLength) !== prefix && !tailPrefix) {
	            return prevValue.slice(prefixLength);
	        } else if (value.slice(-prefixLength) !== prefix && tailPrefix) {
	            return prevValue.slice(0, -prefixLength - 1);
	        }

	        // No issue, strip prefix for new value
	        return tailPrefix ? value.slice(0, -prefixLength) : value.slice(prefixLength);
	    },

	    getFirstDiffIndex: function getFirstDiffIndex(prev, current) {
	        var index = 0;

	        while (prev.charAt(index) === current.charAt(index)) {
	            if (prev.charAt(index++) === '') {
	                return -1;
	            }
	        }

	        return index;
	    },

	    getFormattedValue: function getFormattedValue(value, blocks, blocksLength, delimiter, delimiters, delimiterLazyShow) {
	        var result = '',
	            multipleDelimiters = delimiters.length > 0,
	            currentDelimiter = '';

	        // no options, normal input
	        if (blocksLength === 0) {
	            return value;
	        }

	        blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    rest = value.slice(length);

	                if (multipleDelimiters) {
	                    currentDelimiter = delimiters[delimiterLazyShow ? index - 1 : index] || currentDelimiter;
	                } else {
	                    currentDelimiter = delimiter;
	                }

	                if (delimiterLazyShow) {
	                    if (index > 0) {
	                        result += currentDelimiter;
	                    }

	                    result += sub;
	                } else {
	                    result += sub;

	                    if (sub.length === length && index < blocksLength - 1) {
	                        result += currentDelimiter;
	                    }
	                }

	                // update remaining string
	                value = rest;
	            }
	        });

	        return result;
	    },

	    // move cursor to the end
	    // the first time user focuses on an input with prefix
	    fixPrefixCursor: function fixPrefixCursor(el, prefix, delimiter, delimiters) {
	        if (!el) {
	            return;
	        }

	        var val = el.value,
	            appendix = delimiter || delimiters[0] || ' ';

	        if (!el.setSelectionRange || !prefix || prefix.length + appendix.length <= val.length) {
	            return;
	        }

	        var len = val.length * 2;

	        // set timeout to avoid blink
	        setTimeout(function () {
	            el.setSelectionRange(len, len);
	        }, 1);
	    },

	    // Check if input field is fully selected
	    checkFullSelection: function checkFullSelection(value) {
	        try {
	            var selection = window.getSelection() || document.getSelection() || {};
	            return selection.toString().length === value.length;
	        } catch (ex) {
	            // Ignore
	        }

	        return false;
	    },

	    setSelection: function setSelection(element, position, doc) {
	        if (element !== this.getActiveElement(doc)) {
	            return;
	        }

	        // cursor is already in the end
	        if (element && element.value.length <= position) {
	            return;
	        }

	        if (element.createTextRange) {
	            var range = element.createTextRange();

	            range.move('character', position);
	            range.select();
	        } else {
	            try {
	                element.setSelectionRange(position, position);
	            } catch (e) {
	                // eslint-disable-next-line
	                console.warn('The input element type does not support selection');
	            }
	        }
	    },

	    getActiveElement: function getActiveElement(parent) {
	        var activeElement = parent.activeElement;
	        if (activeElement && activeElement.shadowRoot) {
	            return this.getActiveElement(activeElement.shadowRoot);
	        }
	        return activeElement;
	    },

	    isAndroid: function isAndroid() {
	        return navigator && /android/i.test(navigator.userAgent);
	    },

	    // On Android chrome, the keyup and keydown events
	    // always return key code 229 as a composition that
	    // buffers the user’s keystrokes
	    // see https://github.com/nosir/cleave.js/issues/147
	    isAndroidBackspaceKeydown: function isAndroidBackspaceKeydown(lastInputValue, currentInputValue) {
	        if (!this.isAndroid() || !lastInputValue || !currentInputValue) {
	            return false;
	        }

	        return currentInputValue === lastInputValue.slice(0, -1);
	    }
	};

	module.exports = Util;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/**
	 * Props Assignment
	 *
	 * Separate this, so react module can share the usage
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var DefaultProperties = {
	    // Maybe change to object-assign
	    // for now just keep it as simple
	    assign: function assign(target, opts) {
	        target = target || {};
	        opts = opts || {};

	        // credit card
	        target.creditCard = !!opts.creditCard;
	        target.creditCardStrictMode = !!opts.creditCardStrictMode;
	        target.creditCardType = '';
	        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || function () {};

	        // phone
	        target.phone = !!opts.phone;
	        target.phoneRegionCode = opts.phoneRegionCode || 'AU';
	        target.phoneFormatter = {};

	        // time
	        target.time = !!opts.time;
	        target.timePattern = opts.timePattern || ['h', 'm', 's'];
	        target.timeFormat = opts.timeFormat || '24';
	        target.timeFormatter = {};

	        // date
	        target.date = !!opts.date;
	        target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
	        target.dateMin = opts.dateMin || '';
	        target.dateMax = opts.dateMax || '';
	        target.dateFormatter = {};

	        // numeral
	        target.numeral = !!opts.numeral;
	        target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
	        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
	        target.numeralDecimalMark = opts.numeralDecimalMark || '.';
	        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
	        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
	        target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;
	        target.signBeforePrefix = !!opts.signBeforePrefix;
	        target.tailPrefix = !!opts.tailPrefix;

	        // others
	        target.swapHiddenInput = !!opts.swapHiddenInput;

	        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;

	        target.uppercase = !!opts.uppercase;
	        target.lowercase = !!opts.lowercase;

	        target.prefix = target.creditCard || target.date ? '' : opts.prefix || '';
	        target.noImmediatePrefix = !!opts.noImmediatePrefix;
	        target.prefixLength = target.prefix.length;
	        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
	        target.copyDelimiter = !!opts.copyDelimiter;

	        target.initValue = opts.initValue !== undefined && opts.initValue !== null ? opts.initValue.toString() : '';

	        target.delimiter = opts.delimiter || opts.delimiter === '' ? opts.delimiter : opts.date ? '/' : opts.time ? ':' : opts.numeral ? ',' : opts.phone ? ' ' : ' ';
	        target.delimiterLength = target.delimiter.length;
	        target.delimiterLazyShow = !!opts.delimiterLazyShow;
	        target.delimiters = opts.delimiters || [];

	        target.blocks = opts.blocks || [];
	        target.blocksLength = target.blocks.length;

	        target.root = (typeof commonjsGlobal === 'undefined' ? 'undefined' : _typeof(commonjsGlobal)) === 'object' && commonjsGlobal ? commonjsGlobal : window;
	        target.document = opts.document || target.root.document;

	        target.maxLength = 0;

	        target.backspace = false;
	        target.result = '';

	        target.onValueChanged = opts.onValueChanged || function () {};

	        return target;
	    }
	};

	module.exports = DefaultProperties;

/***/ })
/******/ ])
});
});

var react = cleaveReactNode;

var _excluded$b = ["variant", "fullWidth", "prefix", "suffix", "InputProps", "type"],
    _excluded2$1 = ["inputRef"];
var TextField = function TextField(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      InputProps = _ref.InputProps,
      type = _ref.type,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$b);

  var classes = useStyles$2();
  return React.createElement(MuiTextField, Object.assign({
    classes: classes,
    variant: variant,
    fullWidth: fullWidth,
    InputProps: _extends({
      startAdornment: !!prefix && React.createElement(core.InputAdornment, {
        position: 'start'
      }, prefix),
      endAdornment: !!suffix && React.createElement(core.InputAdornment, {
        position: 'end'
      }, suffix)
    }, type === 'date' ? {
      inputComponent: DateInput
    } : {}, InputProps),
    type: type === 'date' ? 'text' : type
  }, props));
};

function DateInput(_ref2) {
  var inputRef = _ref2.inputRef,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2$1);

  return React.createElement(react, Object.assign({
    ref: inputRef,
    options: {
      date: true,
      delimiter: '/',
      datePattern: ['d', 'm', 'Y'],
      numericOnly: true,
      delimiterLazyShow: false
    }
  }, props));
}

var useStyles$3 = styles.makeStyles(function (theme) {
  var _root, _button, _arrowSize;

  return {
    root: (_root = {
      borderRadius: '0px',
      padding: '24px'
    }, _root[theme.breakpoints.up('md')] = {
      padding: '24px'
    }, _root),
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      marginLeft: '2px'
    },
    button: (_button = {
      marginLeft: '2px',
      display: 'inline-flex',
      marginTop: '24px',
      color: 'white'
    }, _button[theme.breakpoints.up('md')] = {
      marginTop: '40px'
    }, _button['&:hover'] = {
      '&:$arrowSize': {
        marginLeft: '12px'
      }
    }, _button),
    pos: {
      marginBottom: 12
    },
    CardContent: {
      padding: '0px!important',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    arrowSize: (_arrowSize = {}, _arrowSize[theme.breakpoints.down('sm')] = {
      fontSize: '22px'
    }, _arrowSize),
    hoverBtn: {
      display: 'inline-flex',
      '&:hover': {
        gap: '4px'
      }
    },
    children: {
      marginTop: '24px'
    }
  };
});
var TypographyTeaser = function TypographyTeaser(_ref) {
  var title = _ref.title,
      textColor = _ref.textColor,
      backgroundColor = _ref.backgroundColor,
      buttonText = _ref.buttonText,
      buttonVariant = _ref.buttonVariant,
      style = _ref.style,
      className = _ref.className,
      content = _ref.content;
  var classes = useStyles$3();
  return /*#__PURE__*/React.createElement(Card, {
    className: [classes.root, className].join(' '),
    raised: true,
    style: _extends({
      background: backgroundColor || 'white',
      boxShadow: backgroundColor ? 'none' : '0px 5px 10px -10px rgba(0, 0, 0, 0.03), 0px 9px 30px 2px rgba(0, 0, 0, 0.1)'
    }, style)
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: classes.CardContent
  }, /*#__PURE__*/React.createElement(Typography$1, {
    className: classes.title,
    variant: "h3",
    style: {
      color: backgroundColor ? 'white' : colors[textColor]
    }
  }, title), content && /*#__PURE__*/React.createElement("div", {
    className: classes.children
  }, content), /*#__PURE__*/React.createElement("div", {
    className: classes.button
  }, /*#__PURE__*/React.createElement(Button, {
    size: "medium",
    disableElevation: true,
    variant: buttonVariant,
    style: {
      color: backgroundColor ? colors.blue : colors[textColor],
      padding: !backgroundColor && '0px',
      backgroundColor: !backgroundColor ? '' : '#ffffff',
      borderRadius: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: buttonVariant === 'text' && !backgroundColor && classes.hoverBtn,
    style: {
      display: 'inline-flex',
      gap: '8px'
    }
  }, buttonText, /*#__PURE__*/React.createElement(ArrowForwardIcon, {
    className: classes.arrowSize
  }))))));
};
TypographyTeaser.propTypes = {
  title: propTypes.string,
  url: propTypes.string,
  flex: propTypes.number,
  textColor: propTypes.oneOf(['blue', 'success', 'warning', 'error', 'purple']),
  buttonText: propTypes.string.isRequired,
  buttonLink: propTypes.string.isRequired,
  buttonVariant: propTypes.oneOf(['contained', 'text']),
  onClick: propTypes.func
};
TypographyTeaser.defaultProps = {
  title: 'This is a typography teaser',
  url: '',
  flex: 2,
  textColor: '',
  buttonText: 'Continue',
  buttonLink: propTypes.string.isRequired,
  buttonVariant: 'contained',
  onClick: function onClick(f) {
    return f;
  }
};

var useStyles$4 = styles.makeStyles(function (theme) {
  var _root, _arrowSize;

  return {
    root: (_root = {
      minWidth: '390px',
      maxWidth: '390px',
      borderRadius: '0px',
      height: 'auto',
      padding: '16px',
      paddingTop: '0px'
    }, _root[theme.breakpoints.only('xs')] = {
      maxWidth: '264px',
      minWidth: '264px'
    }, _root[theme.breakpoints.only('sm')] = {
      maxWidth: '318px',
      minWidth: '318px'
    }, _root[theme.breakpoints.only('md')] = {
      maxWidth: '282px',
      minWidth: '282px'
    }, _root[theme.breakpoints.only('lg')] = {
      maxWidth: '280px',
      minWidth: '280px'
    }, _root),
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      marginBottom: '24px'
    },
    button: {
      marginLeft: '2px',
      display: 'inline-flex',
      marginTop: '32px',
      marginBottom: '24px'
    },
    pos: {
      marginBottom: 12
    },
    CardContent: {
      padding: '0px!important',
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    arrowSize: (_arrowSize = {}, _arrowSize[theme.breakpoints.down('sm')] = {
      fontSize: '22px'
    }, _arrowSize)
  };
});
var ColoredLineCard = function ColoredLineCard(_ref) {
  var type = _ref.type,
      description = _ref.description,
      title = _ref.title,
      color = _ref.color,
      buttonText = _ref.buttonText,
      buttonVariant = _ref.buttonVariant,
      style = _ref.style,
      textColor = _ref.textColor,
      className = _ref.className;
  var classes = useStyles$4();
  return /*#__PURE__*/React.createElement(Card, {
    className: [classes.root, className].join(' '),
    raised: true,
    style: _extends({
      borderTop: "4px solid " + colors[color],
      boxShadow: '0px 5px 10px -10px rgba(0, 0, 0, 0.03), 0px 9px 30px 2px rgba(0, 0, 0, 0.1)'
    }, style)
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: classes.CardContent,
    style: {
      alignItems: description ? '' : 'center'
    }
  }, /*#__PURE__*/React.createElement(Typography$1, {
    variant: "h3",
    style: {
      color: colors[color] || 'white',
      textAlign: description ? 'left' : 'center',
      marginTop: '32px'
    }
  }, title), description && /*#__PURE__*/React.createElement(Typography$1, {
    color: "textSecondary",
    style: {
      marginTop: '24px'
    }
  }, description), type === 'withButton' && /*#__PURE__*/React.createElement("div", {
    className: classes.button,
    style: {
      color: !color ? colors[textColor] : 'white'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "medium",
    disableElevation: true,
    variant: buttonVariant,
    color: "primary"
  }, buttonText))));
};
ColoredLineCard.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string,
  url: propTypes.string,
  flex: propTypes.number,
  type: propTypes.oneOf(['standard', 'withButton']),
  color: propTypes.oneOf(['white', 'success', 'warning', 'error', 'purple']),
  buttonText: propTypes.string.isRequired,
  buttonLink: propTypes.string.isRequired,
  buttonVariant: propTypes.oneOf(['contained', 'text']),
  onClick: propTypes.func
};
ColoredLineCard.defaultProps = {
  title: 'This is a typography teaser',
  description: '',
  url: '',
  flex: 2,
  type: 'standard',
  color: 'warning',
  buttonText: 'Button',
  buttonLink: propTypes.string.isRequired,
  buttonVariant: 'contained',
  onClick: function onClick(f) {
    return f;
  }
};

var useStyles$5 = styles.makeStyles(function (theme) {
  var _button, _arrowSize, _children;

  return {
    root: {
      borderRadius: '0px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    content: {
      fontWeight: 400,
      fontSize: '19px',
      lineHeight: '24.7px',
      fontFamily: 'Founders Grotesk'
    },
    button: (_button = {
      marginLeft: '2px',
      display: 'inline-flex',
      marginTop: '24px',
      color: 'white'
    }, _button[theme.breakpoints.up('md')] = {
      marginTop: '40px'
    }, _button['&:hover'] = {
      '&:$arrowSize': {
        marginLeft: '12px'
      }
    }, _button),
    pos: {
      marginBottom: 12
    },
    CardContent: {
      padding: '0px!important',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    arrowSize: (_arrowSize = {}, _arrowSize[theme.breakpoints.down('sm')] = {
      fontSize: '22px'
    }, _arrowSize),
    hoverBtn: {
      display: 'inline-flex',
      '&:hover': {
        gap: '4px'
      }
    },
    children: (_children = {
      marginTop: '24px',
      width: '60%'
    }, _children[theme.breakpoints.down('sm')] = {
      width: '100%'
    }, _children)
  };
});
var InfoWithIcon = function InfoWithIcon(_ref) {
  var title = _ref.title,
      style = _ref.style,
      className = _ref.className,
      description = _ref.description,
      headerIcon = _ref.headerIcon;
  var classes = useStyles$5();
  return /*#__PURE__*/React.createElement("div", {
    className: [classes.root, className].join(' '),
    style: _extends({}, style)
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.CardContent
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px'
    }
  }, headerIcon), /*#__PURE__*/React.createElement(Typography$1, {
    variant: "h3",
    style: {
      marginBottom: '24px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: classes.content,
    variant: "h3"
  }, description)));
};
InfoWithIcon.propTypes = {
  title: propTypes.string,
  description: propTypes.string
};
InfoWithIcon.defaultProps = {
  title: 'This is a typography teaser',
  description: ''
};

var useStyles$6 = styles.makeStyles(function (theme) {
  var _toolBar, _toolbarSpacing, _dialogContentSpacing;

  return {
    appBar: {
      position: 'relative'
    },
    title: {
      flex: 1
    },
    toolBar: (_toolBar = {}, _toolBar[theme.breakpoints.only('xs')] = {
      marginTop: theme.spacing(2)
    }, _toolBar[theme.breakpoints.between('sm', 'md')] = {
      marginTop: theme.spacing(3)
    }, _toolBar[theme.breakpoints.up('lg')] = {
      marginTop: theme.spacing(4)
    }, _toolBar),
    toolbarSpacing: (_toolbarSpacing = {
      paddingLeft: '64px',
      paddingRight: '64px'
    }, _toolbarSpacing[theme.breakpoints.only('xs')] = {
      paddingRight: '16px',
      paddingLeft: '16px',
      minHeight: 'auto'
    }, _toolbarSpacing[theme.breakpoints.between('sm', 'md')] = {
      paddingRight: '24px',
      paddingLeft: '24px',
      minHeight: 'auto'
    }, _toolbarSpacing[theme.breakpoints.only('lg')] = {
      paddingRight: '32px',
      paddingLeft: '32px'
    }, _toolbarSpacing),
    dialogContentSpacing: (_dialogContentSpacing = {
      paddingLeft: '64px',
      paddingRight: '64px',
      marginTop: '80px'
    }, _dialogContentSpacing[theme.breakpoints.only('xs')] = {
      paddingRight: '16px',
      paddingLeft: '16px',
      minHeight: 'auto'
    }, _dialogContentSpacing[theme.breakpoints.between('sm', 'md')] = {
      paddingRight: '24px',
      paddingLeft: '24px',
      minHeight: 'auto'
    }, _dialogContentSpacing[theme.breakpoints.only('lg')] = {
      paddingRight: '32px',
      paddingLeft: '32px'
    }, _dialogContentSpacing),
    toolbarContainer: {
      marginTop: '24px',
      display: 'inline-flex',
      height: '48px',
      alignItems: 'center'
    }
  };
});

var Transition = React.forwardRef(function Transition(props, ref) {
  return React.createElement(core.Slide, Object.assign({
    direction: 'up',
    ref: ref
  }, props));
});
var FullScreenDialog = function FullScreenDialog(_ref) {
  var children = _ref.children,
      handleClose = _ref.handleClose,
      style = _ref.style,
      title = _ref.title,
      handleBack = _ref.handleBack,
      showBack = _ref.showBack,
      open = _ref.open,
      _ref$disableTransitio = _ref.disableTransition,
      disableTransition = _ref$disableTransitio === void 0 ? false : _ref$disableTransitio;
  var classes = useStyles$6();
  return React.createElement(core.Dialog, {
    fullScreen: true,
    open: open,
    onClose: handleClose,
    PaperProps: {
      style: {
        borderRadius: '16px 16px 0px 0px'
      }
    },
    TransitionComponent: Transition,
    transitionDuration: disableTransition ? 1 : 500,
    style: _extends({
      marginTop: '32px'
    }, style)
  }, React.createElement(core.Toolbar, {
    style: {
      display: 'inline-table',
      borderBottom: "1px solid " + colorSet['borderGrey'],
      padding: '0px'
    }
  }, React.createElement("div", {
    className: clsx(classes.toolbarSpacing, classes.toolbarContainer),
    style: {
      marginTop: '24px',
      flex: 1,
      display: 'inline-flex',
      width: '100%'
    }
  }, React.createElement("div", {
    className: classes.title
  }, showBack && React.createElement(core.Button, {
    size: 'small',
    variant: 'text',
    onClick: function onClick() {
      return handleBack();
    },
    startIcon: React.createElement(ArrowBackIcon, null)
  }, "Back")), React.createElement("div", null, React.createElement(core.IconButton, {
    disableFocusRipple: true,
    disableRipple: true,
    color: 'inherit',
    onClick: handleClose,
    "aria-label": 'close'
  }, React.createElement(CloseIcon, {
    color: 'primary'
  })))), React.createElement(Typography, {
    className: classes.toolbarSpacing,
    variant: 'h2',
    style: {
      marginBottom: '24px',
      marginTop: '24px'
    }
  }, title)), children);
};

exports.Accordion = Accordion;
exports.Avatar = Avatar;
exports.CheckboxGroup = CheckboxGroup;
exports.Chip = Chip;
exports.CircularProgress = CircularProgress;
exports.ColoredLineCard = ColoredLineCard;
exports.Colors = index;
exports.FullScreenDialog = FullScreenDialog;
exports.InfoWithIcon = InfoWithIcon;
exports.LinearProgress = LinearProgress;
exports.Pagination = Pagination;
exports.RadiobuttonGroup = RadiobuttonGroup;
exports.Select = Select;
exports.Snackbar = Snackbar;
exports.Switch = Switch;
exports.TextField = TextField;
exports.Typography = Typography;
exports.TypographyTeaser = TypographyTeaser;
//# sourceMappingURL=index.js.map
