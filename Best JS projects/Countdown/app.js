const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4"); //<h4 class="secs/days/minutes...">34</h4>

//1.displaying day (it looks like Giveaway Ends On Monday 11 September 2023 12:30am on the page)
//checking current day
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2025, 8, 11, 12, 30, 0); //new Date() shows us current day
//Date(year, monthIndex(starts from 0), date, hours, minutes, seconds: Date // 8-september
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0); //it will always add 10 days to current date

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

//let month = futureDate.getMonth(); //here we get number of month, which in this case is 8
//console.log(months[month]); //here we access actual name of month by looking for his index in array
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekDay = futureDate.getDay();
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} ${hours}:${minutes}am`;

//2. setting calculation of remaining time
//future
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const lastDays = futureTime - today;

  //values in ms
  //1 second = 1000ms
  //1m = 60s
  //1hr = 60min
  //1d = 24hr
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate all values
  let days = Math.floor(lastDays / oneDay);
  let hours = Math.floor((lastDays % oneDay) / oneHour); //(lastDays % oneDay) check how many full days we have in last days
  let minutes = Math.floor((lastDays % oneHour) / oneMinute);
  let seconds = Math.floor((lastDays % oneMinute) / 1000);

  //set values array
  const values = [days, hours, minutes, seconds];

  //show not just 2 seconds, but 02
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  //pasting values in html from array
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  //when this time in future happened
  if (lastDays < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
//countdown - обратный отсчет, before that time changed only when we refresh the page
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
