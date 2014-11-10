google.load("visualization", "1", {packages:["corechart"]});

angular.module('chartsChallenge', [])
.directive('graphicChart', function(){
	return{
		restrict:'EA',
		template:'<div style="width: 900px; height: 500px;"></div>',
		compile: function(tElem,attrs) {
      //do optional DOM transformation here
      return function(scope,elem,attrs) {
        //linking function here
	google.setOnLoadCallback(drawChart);

	function drawChart() {	
  	var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  	]);

  	  var data2 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     6],
          ['Eat',      3],
          ['Internet', 4],
          ['Sleep',    8],
          ['Excercise', 2],
          ['Phone', 1]
        ]);

  	var options = {
    title: 'Company Performance',
    hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
  	};
  	var pieOptions={
  		title: 'My Daily Schedule'
  	};
  		if(attrs.charttype=='barschart'){
  		var chart = new google.visualization.ColumnChart(elem[0].childNodes[0]);
  		chart.draw(data, options);
  		}else if(attrs.charttype=='linesgraph'){
  		var chart = new google.visualization.LineChart(elem[0].childNodes[0]);
  		chart.draw(data, options);
  		}else if(attrs.charttype=='piechart'){
  		var chart = new google.visualization.PieChart(elem[0].childNodes[0]);
  		chart.draw(data2, pieOptions);
  		}
   	}
      };
    }
	}

	});