
let speed = 80;
let demeritPoints = 0;

if (speed < 70) {
  console.log("Ok");
} else {
    // calculates the demerit points by subtracting 70 from the speed, dividing the result by 5, and then rounding down to the nearest integer using the Math.floor()
  demeritPoints = Math.floor((speed - 70) / 5);
  return "Demerit points: " + demeritPoints;
}