import React, { Component } from 'react';

/**
 * Class represents Main Application Container
 * @extends {React.Component}
 */
export default class App extends Component {
  /**
   * Create new App
   * @param {Object} props - The initial properties
   * @see App.propTypes
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
        {this.props.children}
      </div>
    );
  }
}

/**
 * @prop {Object} propTypes - The props that are passed to this component
 * @prop {Node} propTypes.children - Child nodes of this component
 */
App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.element)
  ]).isRequired
};
