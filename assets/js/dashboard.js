(function($) {
  "use strict";
  $(function() {
    //Ratings
    $("#buynow-1").barrating({
      theme: "css-stars",
      initialRating: 4,
      showSelectedRating: false
    });

    $("#buynow-2").barrating({
      theme: "css-stars",
      initialRating: 4,
      showSelectedRating: false
    });

    $("#buynow-3").barrating({
      theme: "css-stars",
      initialRating: 4,
      showSelectedRating: false
    });
    $("#buynow-4").barrating({
      theme: "css-stars",
      initialRating: 4,
      showSelectedRating: false
    });

    ///////////////////////////////caroline

    //Total earnings
    if ($("#total-earnings").length) {
      var totalEearningsData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Global Budget ",
            data: [35, 61, 90, 155, 129, 32, 94],
            backgroundColor: [
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe"
            ],
            borderColor: [
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe"
            ],
            borderWidth: 1,
            fill: false
          },
          {
            label: "Today's Income ",
            data: [53, 82, 133, 133, 133, 133, 133],
            backgroundColor: [
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02"
            ],
            borderColor: [
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02"
            ],
            borderWidth: 1,
            fill: false
          },
          {
            label: "Spendings ",
            data: [90, 29, 41, 93, 60, 17, 53],
            backgroundColor: [
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253"
            ],
            borderColor: [
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253"
            ],
            borderWidth: 1,
            fill: false
          }
        ]
      };
      var totalEarningsOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: false,
              barPercentage: 1,
              categoryPercentage: 0.4,
              position: "bottom",
              display: true,
              gridLines: {
                display: false,
                drawBorder: false,
                drawTicks: false
              },
              ticks: {
                display: true, //this will remove only the label
                stepSize: 500,
                fontColor: "#a7afb7",
                fontSize: 12,
                padding: 10
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              display: true,
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eef0fa",
                drawTicks: false,
                borderDash: [8, 4],
                zeroLineColor: "rgba(90, 113, 208, 0)"
              },
              ticks: {
                display: true,
                beginAtZero: true,
                stepSize: 50,
                fontColor: "#a7afb7",
                fontSize: 12,
                callback: function(value, index, values) {
                  return value + "k";
                }
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgba(0, 0, 0, 1)"
        },
        plugins: {
          datalabels: {
            display: false,
            align: "center",
            anchor: "center"
          }
        }
      };
      var barChartCanvas = $("#total-earnings")
        .get(0)
        .getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var barChart = new Chart(barChartCanvas, {
        type: "bar",
        data: totalEearningsData,
        options: totalEarningsOptions
      });
    }
    if ($("#total-earnings-1").length) {
      var totalEearningsData1 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Global Budget ",
            data: [35, 61, 90, 155, 129, 32, 94],
            backgroundColor: [
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe"
            ],
            borderColor: [
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe"
            ],
            borderWidth: 1,
            fill: false
          },
          {
            label: "Today's Income ",
            data: [53, 82, 133, 133, 133, 133, 133],
            backgroundColor: [
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02"
            ],
            borderColor: [
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02"
            ],
            borderWidth: 1,
            fill: false
          },
          {
            label: "Spendings ",
            data: [90, 29, 41, 93, 60, 17, 53],
            backgroundColor: [
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253"
            ],
            borderColor: [
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253"
            ],
            borderWidth: 1,
            fill: false
          }
        ]
      };
      var totalEarningsOptions1 = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: false,
              barPercentage: 1,
              categoryPercentage: 0.4,
              position: "bottom",
              display: true,
              gridLines: {
                display: false,
                drawBorder: false,
                drawTicks: false
              },
              ticks: {
                display: true, //this will remove only the label
                stepSize: 500,
                fontColor: "#a7afb7",
                fontSize: 12,
                padding: 10
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              display: true,
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eef0fa",
                drawTicks: false,
                borderDash: [8, 4],
                zeroLineColor: "rgba(90, 113, 208, 0)"
              },
              ticks: {
                display: true,
                beginAtZero: true,
                stepSize: 50,
                fontColor: "#a7afb7",
                fontSize: 12,
                callback: function(value, index, values) {
                  return value + "k";
                }
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgba(0, 0, 0, 1)"
        },
        plugins: {
          datalabels: {
            display: false,
            align: "center",
            anchor: "center"
          }
        }
      };
      var barChartCanvas = $("#total-earnings-1")
        .get(0)
        .getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var barChart = new Chart(barChartCanvas, {
        type: "bar",
        data: totalEearningsData1,
        options: totalEarningsOptions1
      });
    }
    if ($("#total-earnings-2").length) {
      var totalEearningsData2 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Global Budget ",
            data: [35, 61, 90, 155, 129, 32, 94],
            backgroundColor: [
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe"
            ],
            borderColor: [
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe",
              "#128ffe"
            ],
            borderWidth: 1,
            fill: false
          },
          {
            label: "Today's Income ",
            data: [53, 82, 133, 133, 133, 133, 133],
            backgroundColor: [
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02"
            ],
            borderColor: [
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02",
              "#ffab02"
            ],
            borderWidth: 1,
            fill: false
          },
          {
            label: "Spendings ",
            data: [90, 29, 41, 93, 60, 17, 53],
            backgroundColor: [
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253"
            ],
            borderColor: [
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253",
              "#e55253"
            ],
            borderWidth: 1,
            fill: false
          }
        ]
      };
      var totalEarningsOptions2 = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: false,
              barPercentage: 1,
              categoryPercentage: 0.4,
              position: "bottom",
              display: true,
              gridLines: {
                display: false,
                drawBorder: false,
                drawTicks: false
              },
              ticks: {
                display: true, //this will remove only the label
                stepSize: 500,
                fontColor: "#a7afb7",
                fontSize: 12,
                padding: 10
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              display: true,
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eef0fa",
                drawTicks: false,
                borderDash: [8, 4],
                zeroLineColor: "rgba(90, 113, 208, 0)"
              },
              ticks: {
                display: true,
                beginAtZero: true,
                stepSize: 50,
                fontColor: "#a7afb7",
                fontSize: 12,
                callback: function(value, index, values) {
                  return value + "k";
                }
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgba(0, 0, 0, 1)"
        },
        plugins: {
          datalabels: {
            display: false,
            align: "center",
            anchor: "center"
          }
        }
      };
      var barChartCanvas = $("#total-earnings-2")
        .get(0)
        .getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var barChart = new Chart(barChartCanvas, {
        type: "bar",
        data: totalEearningsData2,
        options: totalEarningsOptions2
      });
    }

    if ($("#conversion-chart").length) {
      var conversionChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Global Budget ",
            data: [35, 61, 90, 155, 129, 32],
            backgroundColor: [
              "#6200ee",
              "#6200ee",
              "#6200ee",
              "#6200ee",
              "#6200ee",
              "#6200ee"
            ],
            borderColor: [
              "#6200ee",
              "#6200ee",
              "#6200ee",
              "#6200ee",
              "#6200ee",
              "#6200ee"
            ],
            borderWidth: 1,
            fill: false
          }
        ]
      };
      var conversionChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: false,
              barPercentage: 1,
              categoryPercentage: 0.7,
              position: "bottom",
              display: false,
              gridLines: {
                display: false,
                drawBorder: false,
                drawTicks: false
              },
              ticks: {
                display: true, //this will remove only the label
                stepSize: 500,
                fontColor: "#a7afb7",
                fontSize: 14,
                padding: 10
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              display: true,
              gridLines: {
                drawBorder: false,
                display: false,
                color: "#eef0fa",
                drawTicks: false,
                borderDash: [8, 4],
                zeroLineColor: "rgba(90, 113, 208, 0)"
              },
              ticks: {
                display: false,
                beginAtZero: true,
                stepSize: 50,
                fontColor: "#a7afb7",
                fontSize: 14,
                callback: function(value, index, values) {
                  return value + "k";
                }
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgba(0, 0, 0, 1)"
        },
        plugins: {
          datalabels: {
            display: false,
            align: "center",
            anchor: "center"
          }
        }
      };
      var barChartCanvas = $("#conversion-chart")
        .get(0)
        .getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var barChart = new Chart(barChartCanvas, {
        type: "bar",
        data: conversionChartData,
        options: conversionChartOptions
      });
    }

    if ($("#total-expences").length) {
      var graphGradient = document
        .getElementById("total-expences")
        .getContext("2d");
      var saleGradientBg = graphGradient.createLinearGradient(25, 0, 25, 83);
      saleGradientBg.addColorStop(0, "rgba(6, 179, 175, .83)");
      saleGradientBg.addColorStop(1, "rgba(255, 255, 255, 0.27)");
      var totalExpencesData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan"
        ],
        datasets: [
          {
            label: "Margin",
            data: [28, 18, 14, 10, 13, 14, 8, 8, 10, 8, 12, 9, 9],
            backgroundColor: saleGradientBg,
            borderColor: ["#59c99f"],
            borderWidth: 3,
            fill: true,
            pointBorderColor: [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "#59c99f",
              ""
            ],
            pointBackgroundColor: [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "#fff",
              ""
            ],
            pointBorderWidth: [3],
            pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0]
          }
        ]
      };
      var totalExpencesOptions = {
        scales: {
          yAxes: [
            {
              display: false,
              gridLines: {
                drawBorder: false,
                display: false,
                drawTicks: false
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }
          ],
          xAxes: [
            {
              display: false,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: false,
                drawTicks: false
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0.3
          }
        },
        tooltips: {
          backgroundColor: "rgba(2, 171, 254, 1)"
        }
      };
      var barChartCanvas = $("#total-expences")
        .get(0)
        .getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var barChart = new Chart(barChartCanvas, {
        type: "line",
        data: totalExpencesData,
        options: totalExpencesOptions
      });
    }
    if ($("#doughnutChart").length) {
      var draw = Chart.controllers.doughnut.prototype.draw;
      Chart.controllers.doughnut = Chart.controllers.doughnut.extend({
        draw: function() {
          draw.apply(this, arguments);
          let ctx = this.chart.chart.ctx;
          let _fill = ctx.fill;
          ctx.fill = function() {
            ctx.save();
            ctx.shadowColor = "#128ffe";
            ctx.shadowBlur = 5;
            ctx.shadowOffsetX = -1;
            ctx.shadowOffsetY = -1;
            _fill.apply(this, arguments);
            ctx.restore();
          };
        }
      });

      var effectColors = {
        highlight: "rgba(255, 255, 255, 0.75)",
        shadow: "rgba(0, 0, 0, 0.5)",
        glow: "rgb(255, 255, 0)"
      };
      var doughnutPieData = {
        datasets: [
          {
            data: [60, 15, 25],
            backgroundColor: ["#e55253", "#ffab02", "#128ffe"],
            borderColor: ["#e55253", "#ffab02", "#128ffe"]
          }
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: []
      };
      var doughnutPieOptions = {
        responsive: true,
        cutoutPercentage: 55,
        animation: {
          animateScale: true,
          animateRotate: true
        }
      };
      var doughnutChartCanvas = $("#doughnutChart")
        .get(0)
        .getContext("2d");
      var doughnutChart = new Chart(doughnutChartCanvas, {
        type: "doughnut",
        data: doughnutPieData,
        options: doughnutPieOptions
      });
    }

    if ($("#visitors").length) {
      var visitorsData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Unique Visitors",
            data: [30, 20, 30, 40, 50, 38, 50, 40, 45, 50, 45, 40],
            backgroundColor: ["#d6d6d6"],
            borderColor: ["#d6d6d6"],
            borderWidth: 1,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointBorderColor: [
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6"
            ],
            pointBackgroundColor: [
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6",
              "#d6d6d6"
            ]
          },
          {
            label: "Visitors",
            data: [20, 30, 35, 45, 50, 60, 70, 55, 50, 40, 50, 70],
            backgroundColor: ["#59c99f"],
            borderColor: ["#59c99f"],
            borderWidth: 1,
            fill: false,
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            pointBorderColor: [
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f"
            ],
            pointBackgroundColor: [
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f",
              "#59c99f"
            ]
          }
        ]
      };

      var visitorsOptions = {
        scales: {
          yAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eeeeee",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 10,
                max: 90,
                fontColor: "#111111",
                fontSize: 10
              }
            }
          ],
          xAxes: [
            {
              display: true,
              position: "bottom",
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eeeeee",
                zeroLineColor: "#eeeeee"
              },
              ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 0,
                fontColor: "#111111",
                fontSize: 10
              }
            }
          ]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0.000001
          }
        },
        tooltips: {
          backgroundColor: "rgba(2, 171, 254, 1)"
        }
      };

      var lineChartCanvas = $("#visitors")
        .get(0)
        .getContext("2d");
      var visitorschart = new Chart(lineChartCanvas, {
        type: "line",
        data: visitorsData,
        options: visitorsOptions
      });
    }

    if ($("#yearly-pricing").length) {
      var yearlyPricingData = {
        labels: [
          "2002",
          "2004",
          "2006",
          "2008",
          "2010",
          "2012",
          "2014",
          "2016",
          "2018",
          "2020"
        ],
        datasets: [
          {
            label: "Global Budget ",
            data: [69, 84, 58, 78, 179, 47, 96, 72, 103, 32],
            backgroundColor: [
              "#eff2f7",
              "rgba(	239,242,247, .6)",
              "#eff2f7",
              "rgba(	239,242,247, .6)",
              "#59c99f",
              "#eff2f7",
              "rgba(	239,242,247, .6)",
              "#eff2f7",
              "rgba(	239,242,247, .6)",
              "#eff2f7"
            ],
            borderColor: [
              "#eff2f7",
              "rgba(	239,242,247, .6)",
              "#eff2f7",
              "rgba(	239,242,247, .6)",
              "#59c99f",
              "#eff2f7",
              "rgba(	239,242,247, .6)",
              "#eff2f7",
              "rgba(	239,242,247, .6)",
              "#eff2f7"
            ],
            borderWidth: 1,
            fill: false
          }
        ]
      };
      var yearlyPricingOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: false,
              barPercentage: 1,
              categoryPercentage: 1,
              position: "bottom",
              display: true,
              gridLines: {
                display: true,
                drawBorder: false,
                drawTicks: false,
                color: "#f0f0f0",
                zeroLineColor: "#f0f0f0"
              },
              ticks: {
                display: true, //this will remove only the label
                stepSize: 500,
                fontColor: "#111111",
                fontSize: 10,
                padding: 10
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              display: true,
              gridLines: {
                drawBorder: false,
                display: true,
                color: "#eef0fa",
                drawTicks: false,
                zeroLineColor: "rgba(90, 113, 208, 0)"
              },
              ticks: {
                display: false,
                beginAtZero: true,
                stepSize: 20,
                fontColor: "#111111",
                fontSize: 10
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgba(0, 0, 0, 1)"
        },
        plugins: {
          datalabels: {
            display: false,
            align: "center",
            anchor: "center"
          }
        }
      };
      var barChartCanvas = $("#yearly-pricing")
        .get(0)
        .getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var barChart = new Chart(barChartCanvas, {
        type: "bar",
        data: yearlyPricingData,
        options: yearlyPricingOptions
      });
    }
  });
})(jQuery);
