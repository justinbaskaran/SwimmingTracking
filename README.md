Swim Tracking


Purpose:
The purpose of this repository is to track the development and provide source code for the React app used to track my Swimming progress.


Methdology:
1) The data will be uploaded to a google drive location, where the react app will fetch data from.

      a) The reason for this roundabout way of doing things, is because Samsung Health does not give access to their API to the public.
  
2) Once I get the data from google drive, it will be parsed and displayed on the front-end. To show a few key statistics:

      a) Calories - This should go up with time. I plan to increase calories incrementally. 
      
      b) Speed - This should go up, with time.
      
      c) Mean Heart Rate - As you become a better swimmer, this time should steadily go down

3) To evaluate the above stastistics, I will be using a line graph. To track these three metrics over time (time is x, metric is Y).


