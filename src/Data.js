import * as d3 from "d3";

let url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRpKLJZyuUWLas1lxwPmheFdRpl2gL2TvWlc21X62yG3OF8sFnS-5TRtHE486eLpWluAMj_yNW10CS5/pub?output=csv";  

  export const fetchDailyDataSpeed = async () => {
    try {
        let speedMap = new Map();
        await d3.csv(url).then((data) => {
            //if (error) throw error;
            
            for (var i=0;i<data.length;i++){
              if (data[i]['com.samsung.health.exercise.exercise_type'] === "14001" && parseInt(data[i]['total_calorie']) >400  ){
                let speed = (parseFloat(data[i]['com.samsung.health.exercise.mean_speed'])*2.23694).toString();
                speedMap.set(data[i]['com.samsung.health.exercise.start_time'],speed);
              
              }
            }
            speedMap = new Map([...speedMap].sort());
      
          })
          if (speedMap != undefined) {
            return speedMap;
          }
   
    } catch (err) {
      console.log(err);
    }
  };
  export const fetchDailyDataCalories = async () => {
    try {
        let calorieMap = new Map();
        await d3.csv(url).then((data) => {
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

  export const fetchDailyDataHeartRate = async () => {
    try {
        let calorieMap = new Map();
        await d3.csv(url).then((data) => {
            //if (error) throw error;
            
            for (var i=0;i<data.length;i++){
                if (data[i]['com.samsung.health.exercise.exercise_type'] === "14001" && parseInt(data[i]['total_calorie']) >400  ){
                
                calorieMap.set(data[i]['com.samsung.health.exercise.start_time'],data[i]['com.samsung.health.exercise.mean_heart_rate']);
                
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
