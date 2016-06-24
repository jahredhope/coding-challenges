/*
<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="WaltsCashLab.js"></script>
*/

/*
Task: Render a cashflow line chart for an organisation

Your task is to use data from an existing service to render a line chart that represents the cashflow of an organisation.

// var $ = require('jquery');

function onDataLoaded(response) {
  // Hide parse errors and simply decide if we can understand the response
  var data = tryParse(response);
  if (!data || typeof data.OrgName !== 'string' || typeof data.Currency !== 'string' || !Array.isArray(data.Cashflow)) {
    throw 'Invalid Reponse ' + response.substring(0, 100);
  }

  // Create the chart
  createChart(buildHighchartData(data.OrgName, data.Currency, data.Cashflow), '#container');
}

// Safe JSON Parse
function tryParse(JSONString) {
  try {
    return JSON.parse(JSONString)
  } catch (e) {
    return false;
  }
}

// Take a given object return it as an array
function objectToArray(obj) {
  return Object.keys(obj).map(function(item) {
    return obj[item];
  });
}

// Take an array and parse it into an object looking at the key and value attributes of each item
function arrayToObject(arr, key, value) {
  var obj = {};
  arr.forEach(function(item) {
    obj[item[key]] = item[value];
  });
  return obj;
}

// Choose the correct sign, currently onl US and AU supported
function currencyToCurrecySign(currency) {
  switch (currency) {
    case 'USD':
    case 'AUD':
      return '$';
    default:
      return '';
  }
}

function getAsNumberOrNull(number) {
  return typeof number === 'number' ? number : null;
}

function getInitialSeriesState(name) {
  return {
    name: name,
    data: []
  };
}

// Takes json data and returns a valid highchart configuration object
function buildHighchartData(orgName, currency, cashflow) {
  // An object containing all Cashflow types as attributes
  var series = {};

  // An array of all the x axis categories to display
  var categories = [];

  // An array of all lines we'll display
  var keys = [];

  // Fill out the above values from cashflow, ignore actual values for now
  cashflow.forEach(function(item) {
    categories.push(item.Label);
    item.Series.forEach(function(seriesValue) {
      if (!series[seriesValue.Type]) {
        keys.push(seriesValue.Type);
        series[seriesValue.Type] = getInitialSeriesState(seriesValue.Type);
      }
    });
  });

  // Iterate over cashflow and fill out the chart with values, treat non-numbers as nulls as per Highcharts docs
  cashflow.forEach(function(item) {
    // Convert to an object to avoid constantly iterating over the array
    var obj = arrayToObject(item.Series, 'Type', 'Value');
    keys.forEach(function(key) {
      series[key].data.push(getAsNumberOrNull(obj[key]));
    });
  });

  // Return values structured for Highcharts
  return {
    title: {
      text: 'Cashflow for {0}'.format(orgName),
      x: -20
    },
    xAxis: {
      categories: categories
    },
    yAxis: {
      title: {
        text: 'Currency ({0})'.format(currency)
      }
    },
    plotOptions: {
      series: {
        connectNulls: true
      }
    },
    tooltip: {
      valueSuffix: '',
      valuePrefix: currencyToCurrecySign(currency)
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: objectToArray(series)
  };
}

function createChart(data, target) {
  $(target).highcharts(data);
}

/* Mocked Ajax response with data for rendering the chart. This is what the API returns so you have to work with this data structure */
function getMockData() {
  return JSON.stringify({
    "OrgName": "Walt\'s Meth Lab",
    "Currency": "USD",
    "Cashflow": [{
      "Label": "October",
      "Series": [{
        "Type": "Revenue",
        "Value": 2538.458
      }, {
        "Type": "Expenses",
        "Value": 444.78
      }]
    }, {
      "Label": "November",
      "Series": [{
        "Type": "Revenue",
        "Value": 859
      }, {
        "Type": "Expenses",
        "Value": 8585
      }, {
        "Type": "Projected",
        "Value": 8585
      }]
    }, {
      "Label": "December",
      "Series": [{
        "Type": "Revenue",
        "Value": 4458.3
      }]
    }, {
      "Label": "January",
      "Series": [{
        "Type": "Revenue",
        "Value": 4458
      }, {
        "Type": "Expenses",
        "Value": 7741
      }]
    }, {
      "Label": "February",
      "Series": [{
        "Type": "Revenue",
        "Value": 8459.58
      }, {
        "Type": "Expenses",
        "Value": 1221
      }]
    }, {
      "Label": "March",
      "Series": [{
        "Type": "Revenue",
        "Value": 11489.5
      }, {
        "Type": "Expenses",
        "Value": 587
      }, {
        "Type": "Projected",
        "Value": 2500
      }]
    }]
  });
}

$(function() {
  onDataLoaded(getMockData());
});

String.prototype.format = function() {
  var str = this;
  for (var i = 0; i < arguments.length; i++) {
    var reg = new RegExp("\\{" + i + "\\}", "g");
    str = str.replace(reg, arguments[i]);
  }
  return str;
}
