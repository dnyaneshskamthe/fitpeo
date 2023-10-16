import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5xy from '@amcharts/amcharts5/xy';

const BarChart = () => {
  useLayoutEffect(() => {
    let barRoot = am5.Root.new('barChart'); // Unique root name

    barRoot.setThemes([am5themes_Animated.new(barRoot)]);

    let chart = barRoot.container.children.push(
      am5xy.XYChart.new(barRoot, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
        layout: barRoot.verticalLayout,
      })
    );

    // Define data
    let data = [
      {
        category: 'Jan',
        value1: 100,
      },
      {
        category: 'Feb',
        value1: 120,
      },
      {
        category: 'Mar',
        value1: 80,
      },
      {
        category: 'Apr',
        value1: 85,
      },
      {
        category: 'May',
        value1: 83,
      },
      {
        category: 'Jun',
        value1: 88,
      },
      {
        category: 'Jul',
        value1: 70,
      },
      {
        category: 'Aug',
        value1: 90,
      },
      {
        category: 'Sep',
        value1: 100,
      },
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(barRoot, {
        visible: false,
        renderer: am5xy.AxisRendererY.new(barRoot, {}),
      })
    );

    var xRenderer = am5xy.AxisRendererX.new(barRoot, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
      strokeWidth: 0,
    });

    // Create X-Axis with label rotation and other settings
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(barRoot, {
        renderer: xRenderer,
        categoryField: 'category',
      })
    );
    xAxis.data.setAll(data);

    // Create series with rounded bars and change the bar color
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(barRoot, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value1',
        categoryXField: 'category',
        fill: am5.color('#c2b6ad'), // Change the bar color
      })
    );
    series1.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(barRoot, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set('cursor', am5xy.XYCursor.new(barRoot, {}));

    return () => {
      barRoot.dispose();
    };
  }, []);

  return (
    <div id="barChart" style={{ width: '100%', height: '250px' }}></div>
  );
};

export default BarChart;
