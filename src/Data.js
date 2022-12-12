import * as d3 from "d3";

  

  export const fetchData = async () => {
    try {
        let calorieMap = new Map();
        await d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRpKLJZyuUWLas1lxwPmheFdRpl2gL2TvWlc21X62yG3OF8sFnS-5TRtHE486eLpWluAMj_yNW10CS5/pub?gid=523570039&single=true&output=csv").then((data) => {
            //if (error) throw error;
            
            for (var i=0;i<data.length;i++){
              if (data[i]['com.samsung.health.exercise.exercise_type'] === "14001" && parseInt(data[i]['total_calorie']) >400  ){
              
                calorieMap.set(data[i]['com.samsung.health.exercise.start_time'],data[i]['total_calorie']);
              
              }
            }
            calorieMap = new Map([...calorieMap].sort());
            //console.log(calorieMap);
          })
          if (calorieMap != undefined) {
            return calorieMap;
          }
   
    } catch (err) {
      console.log(err);
    }
  };
  export const fetchDailyData = async () => {
    try {
        let calorieMap = new Map();
        await d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRpKLJZyuUWLas1lxwPmheFdRpl2gL2TvWlc21X62yG3OF8sFnS-5TRtHE486eLpWluAMj_yNW10CS5/pub?gid=523570039&single=true&output=csv").then((data) => {
            //if (error) throw error;
            
            for (var i=0;i<data.length;i++){
                if (data[i]['com.samsung.health.exercise.exercise_type'] === "14001" && parseInt(data[i]['total_calorie']) >400  ){
                
                calorieMap.set(data[i]['com.samsung.health.exercise.start_time'],data[i]['total_calorie']);
                
                }
            }
        calorieMap = new Map([...calorieMap].sort());
        //console.log(calorieMap);
        })
        if (calorieMap != undefined) {
        return calorieMap;
        }
    } catch (err) {
      console.log(err);
    }
  };