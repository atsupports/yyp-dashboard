import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./allcharts.css";

const FullCharts = () => {
  const options = {
    chart: {
      type: "column",
    },

    title: {
      text: "Born persons, by girls' name",
    },

    subtitle: {
      text: "Resize the frame or click buttons to change appearance",
    },

    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
    },

    xAxis: {
      categories: ["2019", "2020", "2021"],
      labels: {
        x: -10,
      },
    },

    yAxis: {
      allowDecimals: false,
      title: {
        text: "Amount",
      },
    },

    series: [
      {
        name: "Ava",
        data: [38, 51, 34],
      },
      {
        name: "Dina",
        data: [31, 26, 27],
      },
      {
        name: "Malin",
        data: [38, 42, 41],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
            yAxis: {
              labels: {
                align: "left",
                x: 0,
                y: -5,
              },
              title: {
                text: null,
              },
            },
            subtitle: {
              text: null,
            },
            credits: {
              enabled: false,
            },
          },
        },
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default FullCharts;
