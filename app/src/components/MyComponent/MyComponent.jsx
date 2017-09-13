import React from 'react';
// import styles from './styles.scss';

/**
 * StatelessFunctional renders MyComponent
 * @param {Object} data - Data info
 * @returns {XML} Markup for the component
 *
 * @constructor
 */
const MyComponent = (data) => (
  <div>
    {JSON.stringify(data)}
  </div>
);

/**
 * @prop {Object} propTypes - Properties of the component
 * @prop {Object} propTypes.array - Data info
 */
MyComponent.propTypes = {
  data: React.PropTypes.array
};

MyComponent.defaultProps = {
  data: []
};

export default MyComponent;
