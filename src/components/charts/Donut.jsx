import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5percent from "@amcharts/amcharts5/percent";

const Donut = () => {
  useLayoutEffect(() => {
    let donutRoot = am5.Root.new("donutChart"); // Unique root name

    donutRoot.setThemes([am5themes_Animated.new(donutRoot)]);

    let chart = donutRoot.container.children.push(
      am5percent.PieChart.new(donutRoot, {
        endAngle: 180,
        innerRadius: am5.percent(70), // Set the inner radius for the donut chart (40% of the radius)
        alignLabels: false
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(donutRoot, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
        name : "Donut",
        alignLabels: false
      })
    );
    series.slices.template.states.create("active", {
      shiftRadius: 0,
      stroke: am5.color(0x995522),
      strokeWidth: 5
    });

    series.states.create("hidden", {
      endAngle: -90
    });

    series.labels.template.setAll({
      text: "",
      textType: "circular",
      inside: true,
      radius: 10,
    });

    series.get("colors").set("colors", [
      am5.color("#f43497"),
      am5.color("#6139ea"),
      am5.color("#f1effc"),
    ]);

    series.data.setAll([
      {
        category: "new",
        value: 20
      },
      {
        category: "existing",
        value: 40
      },
      {
        category: "expected",
        value: 40
      }
      
    ]);
    // let labelNew = series.children.push(am5.Label.new(donutRoot));
    // labelNew.text = "Hi there!";
    // labelNew.horizontalCenter = "middle";
    // labelNew.verticalCenter = "middle";
    // labelNew.fontSize = 40;
      
    series.appear(1000, 100);

    return () => {
      donutRoot.dispose();
    };
  }, []);

  return (
    <div id="donutChart" style={{ width: '100%', height: '200px' }} className=''></div>
  );
};

export default Donut;
