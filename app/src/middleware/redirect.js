/**
 * @module Middlewares
 */

import history from '../history';

/**
 * Redirect middleware
 * @returns {Function} Action redirect handler
 */
function session() {
  return () => next => action => {
    next(action);

    if (action.redirect) {
      if (action.redirect.includes('.html')) {
        window.location.href = action.redirect;
      } else {
        history.push(action.redirect);
      }
    }
  };
}

export default session;
