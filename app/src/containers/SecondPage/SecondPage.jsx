import React from 'react';

/**
 * Class represents Second Page
 * @extends {React.Component}
 */
export default class SecondPage extends React.Component {
  /**
   * Create new SecondPage
   * @param {Object} props - The initial properties
   * @see SecondPage.propTypes
   */
  constructor(props) {
    super(props);

    this.state = {
      map: null
    };
  }

  /**
   * Renders the component
   * @returns {String} HTML for the component
   */
  render() {
    return (
      <h1>It is SecondPage</h1>
    );
  }
}
