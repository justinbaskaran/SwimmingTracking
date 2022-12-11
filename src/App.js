
import * as React from 'react';
import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart from 'chart.js/auto';

import * as d3 from "d3";


Chart.register(ChartDataLabels);


let calorieDate=[];
let calorieAmt=[];

  // get the data
  d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRpKLJZyuUWLas1lxwPmheFdRpl2gL2TvWlc21X62yG3OF8sFnS-5TRtHE486eLpWluAMj_yNW10CS5/pub?gid=523570039&single=true&output=csv").then((data) => {
    //if (error) throw error;
    //console.log(data[0]);
    for (var i=0;i<data.length;i++){
      if (data[i]['com.samsung.health.exercise.exercise_type'] === "14001" && parseInt(data[i]['total_calorie']) >400  ){
        //console.log(data[i]);
        calorieAmt.push(data[i]['total_calorie'] );
        calorieDate.push(data[i]['com.samsung.health.exercise.start_time']);
        //calorieDate.push(i);
      }
    }
    calorieAmt.push('0');
    console.log(calorieDate);
    console.log(calorieAmt);
  });


export default class App extends React.PureComponent {

  render() {
   

     return (
          <div>
            <Line
              data={{
                // x-axis label values
                labels: calorieDate,
                datasets: [
                  {
                    label: "Total Calories Burned",
                    // y-axis data plotting values
                    data: calorieAmt,
                    //fill: false,
                    borderWidth:4,
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor:'green',
                    responsive:true
                  },
                ],
              }}
            />
          </div>
        );

  }
}
