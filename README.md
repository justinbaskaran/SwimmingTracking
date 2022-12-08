Swim Tracking


Purpose:
The purpose of this repository is to track the development and provide source code for the React app used to track my Swimming progress.


Methdology:
1) The data will be uploaded to a google drive location, where the react app will fetch data from.

      a) The reason for this roundabout way of doing things, is because Samsung Health does not give access to their API to the public.
  
2) Once I get the data from google drive, it will be parsed and displayed on the front-end. To show a few key statistics:

      a) SWOLF (Swim Efficency) = Essentially SWOLF is an abbreviation for SWim gOLF.  This magic SWOLF number will help bring more science to your swim    training and improve your performance.  It is a swimming metric designed to help measure swimming efficiency.

      b) Lap Time per 25 yards.

      c) Strokes.

3) To evaluate the above stastistics, I will be using a bar graph. To track these three metrics over time (time is x, metric is Y).


