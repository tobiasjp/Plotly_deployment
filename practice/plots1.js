// var trace = [{x:['chicken', 'pork', 'steak', 'fish'], y:[10, 9, 5, 4], type:'bar'}]

// var layout = {
//     title:'Meat Preferences',
//     xaxis: {title: 'Types of Meat'},
//     yaxis: {title: 'Number of Respondents'}
// }

// Plotly.newPlot('plotMap', trace, layout)
// Plotly.newPlot("plotMap", [{x:[12, 19, 25, 60, 75, 90], y:[120, 135, 119, 90, 105]}]);

// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//   };
//   var data = [trace];
//   var layout = {
//     title: "'Pie' Chart",
//   };
//   Plotly.newPlot("plotArea", data, layout);



// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
// var data = [trace];
// var layout = {
//     title: "'Pie' Chart",
//    };

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'markers',
    type: 'scatter'
  };
  
  var data = [trace1, trace2, trace3];
  

Plotly.newPlot("plotMap", data);



