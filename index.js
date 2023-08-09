const drawLine = (id) => {
	elem = document.getElementById(id);
	elem.setAttribute("style","height:50px");

	let chart = am4core.create(id, am4charts.XYChart);
	// chart.chartContainer.width = 40;
	// chart.chartContainer.height = 40;
	// chart.width = 40;
	// chart.height = 40;
	chart.padding(0, 0, 0, 0);

	chart.data = [ {
			"date": new Date(2018, 0, 1, 8, 0, 0),
			"value": 57
		}, {
			"date": new Date(2018, 0, 1, 9, 0, 0),
			"value": 27
		}, {
			"date": new Date(2018, 0, 1, 10, 0, 0),
			"value": 24
		}, {
			"date": new Date(2018, 0, 1, 11, 0, 0),
			"value": 59
		}, {
			"date": new Date(2018, 0, 1, 12, 0, 0),
			"value": 33
		}, {
			"date": new Date(2018, 0, 1, 13, 0, 0),
			"value": 46
		}, {
			"date": new Date(2018, 0, 1, 14, 0, 0),
			"value": 20
		}, {
			"date": new Date(2018, 0, 1, 15, 0, 0),
			"value": 42
		}, {
			"date": new Date(2018, 0, 1, 16, 0, 0),
			"value": 59,
		"opacity": 1
		}
	];

	let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
	dateAxis.startLocation = 0.5;
	dateAxis.endLocation = 0.7;
	dateAxis.renderer.grid.template.disabled = true;
	dateAxis.renderer.labels.template.disabled = true;
	dateAxis.cursorTooltipEnabled = false;

	let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	valueAxis.renderer.grid.template.disabled = true;
	valueAxis.renderer.baseGrid.disabled = true; // Самая нижняя линия.
	valueAxis.renderer.labels.template.disabled = true;
	valueAxis.cursorTooltipEnabled = false;

	var series = chart.series.push(new am4charts.LineSeries());
	series.dataFields.dateX = "date";
	series.dataFields.valueY = "value";
	series.tensionX = 0.8;
	series.strokeWidth = 2;

	let bullet = series.bullets.push(new am4charts.CircleBullet());
	bullet.circle.opacity = 0;
	bullet.circle.propertyFields.opacity = "opacity";
	bullet.circle.radius = 3;
		
	return chart;
};
drawLine("fchart1");
drawLine("fchart2");
drawLine("fchart3");

const drawPie = (id) => {
	elem = document.getElementById(id);
	elem.setAttribute("style","height:50px");

	let chart = am4core.create(id, am4charts.PieChart);
	chart.chartContainer.minHeight = 20;
	chart.chartContainer.minWidth = 20;

	chart.data = [{
	  "country": "Lithuania",
	  "litres": 501.9
	}, {
	  "country": "Czech Republic",
	  "litres": 301.9
	}, {
	  "country": "Ireland",
	  "litres": 201.1
	}, {
	  "country": "Germany",
	  "litres": 165.8
	}];

	let pieSeries = chart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = "litres";
	pieSeries.dataFields.category = "country";
	pieSeries.labels.template.disabled = true;
	pieSeries.ticks.template.disabled = true;
	pieSeries.slices.template.tooltipText = "";
	
	let hs = pieSeries.slices.template.states.getKey("hover");
	hs.properties.scale = 1;

	let as = pieSeries.slices.template.states.getKey("active");
	as.properties.shiftRadius = 0;
	
	return chart;
};
drawPie("tchart1");
drawPie("tchart2");
drawPie("tchart3");

const drawColumn = (id) => {
	elem = document.getElementById(id);
	elem.setAttribute("style","height:50px");

	let chart = am4core.create(id, am4charts.XYChart);
	chart.chartContainer.minHeight = 20;
	chart.chartContainer.minWidth = 20;
	chart.padding(0, 10, 0, 10);
	
	chart.data = [ {
			"date": new Date(2018, 0, 1, 8, 0, 0),
			"value": 57
		}, {
			"date": new Date(2018, 0, 1, 9, 0, 0),
			"value": 27
		}, {
			"date": new Date(2018, 0, 1, 10, 0, 0),
			"value": 24
		}, {
			"date": new Date(2018, 0, 1, 11, 0, 0),
			"value": 59
		}, {
			"date": new Date(2018, 0, 1, 12, 0, 0),
			"value": 33
		}, {
			"date": new Date(2018, 0, 1, 13, 0, 0),
			"value": 46
		}, {
			"date": new Date(2018, 0, 1, 14, 0, 0),
			"value": 20
		}, {
			"date": new Date(2018, 0, 1, 15, 0, 0),
			"value": 42
		}, {
			"date": new Date(2018, 0, 1, 16, 0, 0),
			"value": 59,
		"opacity": 1
		}
	];
	
	let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
	dateAxis.startLocation = 0.5;
	dateAxis.endLocation = 0.7;
	dateAxis.renderer.grid.template.disabled = true;
	dateAxis.renderer.labels.template.disabled = true;
	dateAxis.cursorTooltipEnabled = false;

	let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	valueAxis.renderer.grid.template.disabled = true;
	valueAxis.renderer.baseGrid.disabled = true; // Самая нижняя линия.
	valueAxis.renderer.labels.template.disabled = true;
	valueAxis.cursorTooltipEnabled = false;

	let series = chart.series.push(new am4charts.ColumnSeries());
	series.dataFields.dateX = "date";
	series.dataFields.valueY = "value";
	series.tensionX = 0.8;
	series.strokeWidth = 2;
	
	return chart;
};
drawColumn("schart1");
drawColumn("schart2");
drawColumn("schart3");

drawLine("tChart1");
drawPie("tChart2");
drawColumn("tChart3");