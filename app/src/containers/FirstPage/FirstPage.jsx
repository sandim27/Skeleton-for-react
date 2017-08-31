import React from 'react';

/**
 * Class represents First Page
 * @extends {React.Component}
 */
export default class FirstPage extends React.Component {
  /**
   * Create new FirstPage
   * @param {Object} props - The initial properties
   * @see FirstPage.propTypes
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
      <div>
        <h1>It is FirstPage</h1>
      </div>

    );
  }
}
