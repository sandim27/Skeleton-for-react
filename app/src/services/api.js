/**
 * @module API Service
 */

// import Axios from 'axios';
// import { SESSION_API_URL } from '../constants';

/**
 * Getting server-side data
 *
 * @returns {Promise} - Promise return server-side data
 */
export function getData() {
  // const endpoint = `${SESSION_API_URL}/data`;
  // return Axios.get(endpoint);
  return new Promise((resolve) => {
    resolve({ data: [1, 2, 3] });
  });
}
