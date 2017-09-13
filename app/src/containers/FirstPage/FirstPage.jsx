import React from 'react';

const Highcharts = require('highcharts');

const config = {

  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: [
      'Рейтинг 1',
      'Рейтинг 2',
      'Рейтинг 3'
    ]
  },
  yAxis: [{
    min: 0,
    title: {
      text: 'К-во объектов'
    }
  }, {
    title: {
      text: 'К-во сотрудников'
    },
    opposite: true
  }],
  legend: {
    shadow: false
  },
  tooltip: {
    shared: true
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    column: {
      grouping: false,
      shadow: false,
      borderWidth: 0
    }
  },
  series: [{
    name: 'К-во объектов',
    color: 'rgba(165,170,217,1)',
    data: [150, 73, 20],
    pointPadding: 0.3,
    pointPlacement: -0.2
  }, {
    name: 'К-во сотрудников',
    color: 'rgba(126,86,134,.9)',
    data: [140, 90, 40],
    pointPadding: 0.4,
    pointPlacement: -0.2
  }, {
    name: 'Наличие доставки',
    color: 'rgba(248,161,63,1)',
    data: [183.6, 178.8, 198.5],
    pointPadding: 0.3,
    pointPlacement: 0.2,
    yAxis: 1
  }, {
    name: 'Рейтинг',
    color: 'rgba(186,60,61,.9)',
    data: [203.6, 198.8, 208.5],
    pointPadding: 0.4,
    pointPlacement: 0.2,
    yAxis: 1
  }]
};


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
   * Configure chart
   * @returns {void}
   */
  componentDidMount() {
    const chartType = 'Chart';
    this.chart = new Highcharts[chartType](
      'charts',
      config
    );
  }

  /**
   * Destroy chart
   * @returns {void}
   */
  componentWillUnmount() {
    this.chart.destroy();
  }

  /**
   * Renders the component
   * @returns {String} HTML for the component
   */
  render() {
    return (
      <div>
        <h1>It is FirstPage</h1>
        <div id="charts" />
        <img
          alt="loading"
          src={`${window.PUBLIC_URI}app/assets/images/icon-loading-data.gif`}
        />
      </div>

    );
  }
}
