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
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Количество объектов'
    }
  },
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [{
    name: 'Сфера деятельности',
    color: 'rgba(126,86,134,.9)',
    data: [{
      name: 'Досуг',
      y: 56.33,
      drilldown: 'Досуг'
    }, {
      name: 'Торговля',
      y: 24.03,
      drilldown: 'Торговля'
    }, {
      name: 'Образование',
      y: 10.38,
      drilldown: 'Образование'
    }, {
      name: 'Другое',
      y: 4.77,
      drilldown: 'Другое'
    }]
  }]
};

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
        <h1>It is SecondPage</h1>
        <div id="charts" />
      </div>
    );
  }
}
