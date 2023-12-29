var darkBtn = document.getElementById("theme_icon_container");
var Images1 = ["img1.webp", "img2.webp", "img3.webp"];
var Images2 = ["img1.jpg", "img2.jpg", "img3.jpg"];
var sliding_imageDetail = [
  {
    sellItem_name: "On-ear Wireless Headphones",
    sellItem_detail: "Long-lasting battery for extended use",
    sellItem_price: {
      current_price: "$350.00",
    },
  },
  {
    sellItem_name: "Echelon Edge 15",
    sellItem_detail: "High-resolution display for vibrant visuals",
    sellItem_price: {
      current_price: "$1,299.00",
    },
  },
  {
    sellItem_name: "Hyperion HX-1",
    sellItem_detail: "High resolution camera for stunning photos",
    sellItem_price: {
      current_price: "$2,000.00-$2,449.00",
    },
  },
];

var i = 0;
document.getElementById(
  "sliding-img1half"
).src = `Images/demoProductSlider1half/${Images1[i]}`;
document.getElementById(
  "sliding-img2half"
).src = `Images/demoProductSlider2half/${Images2[i]}`;
document.getElementById(
  "sliding_imageDetail"
).innerHTML = `<div class="sellItem-name"><h2>${sliding_imageDetail[i].sellItem_name}</h2></div>
<div class="sellItem-detail">${sliding_imageDetail[i].sellItem_detail}.</div>
<div class="sellItem-price">
  <span class="current-price">${sliding_imageDetail[i].sellItem_price.current_price}</span>
</div> `;

function previmg() {
  i--;
  if (i < 0) {
    i = 2;
  }
  document.getElementById(
    "sliding-img1half"
  ).src = `Images/demoProductSlider1half/${Images1[i]}`;
  document.getElementById(
    "sliding-img2half"
  ).src = `Images/demoProductSlider2half/${Images2[i]}`;
  document.getElementById(
    "sliding_imageDetail"
  ).innerHTML = `<div class="sellItem-name"><h2>${sliding_imageDetail[i].sellItem_name}</h2></div>
<div class="sellItem-detail">${sliding_imageDetail[i].sellItem_detail}.</div>
<div class="sellItem-price">
  <span class="current-price">${sliding_imageDetail[i].sellItem_price.current_price}</span>
</div> `;
}
function nextimg() {
  i++;
  if (i == 3) {
    i = 0;
  }
  document.getElementById(
    "sliding-img1half"
  ).src = `Images/demoProductSlider1half/${Images1[i]}`;
  document.getElementById(
    "sliding-img2half"
  ).src = `Images/demoProductSlider2half/${Images2[i]}`;
  document.getElementById(
    "sliding_imageDetail"
  ).innerHTML = `<div class="sellItem-name"><h2>${sliding_imageDetail[i].sellItem_name}</h2></div>
<div class="sellItem-detail">${sliding_imageDetail[i].sellItem_detail}.</div>
<div class="sellItem-price">
  <span class="current-price">${sliding_imageDetail[i].sellItem_price.current_price}</span>
</div> `;
}



 // Set the end date and time for the sale
 const saleEndDate = new Date('December 31, 2023 23:59:59').getTime();

 // Update the countdown every second
     const countdown = setInterval(() => {
     const now = new Date().getTime();
     const timeRemaining = saleEndDate - now;

     // Calculate days, hours, minutes, and seconds
     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

     // Display the countdown
     document.getElementById('day_box').innerHTML = "0"+days;
         document.getElementById('hour_box').innerHTML =hours;
          document.getElementById('minute_box').innerHTML = minutes;
           document.getElementById('second_box').innerHTML = seconds;

     // If the countdown is over, display a message
 }, 1000);



 function openMenu() {
  document.getElementById("mySidenav").style.width = "270px";
}
function closeMenu() {
  document.getElementById("mySidenav").style.width = "0";
}

function openCart() {
  document.getElementById("sidenav").style.width = "270px";
}
function closeCart() {
  document.getElementById("sidenav").style.width = "0";
}

function openSearchBox() {
  document.getElementById("search_extension").style.width = "350px";
}
function closeSearchBox() {
  document.getElementById("search_extension").style.width = "0";
}

darkBtn.onclick = function(){
  darkBtn.classList.toggle("dark_theme");
  document.body.classList.toggle("dark_theme");

  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme","dark");
  }
  else{
    localStorage.setItem("theme","light");
  }
  
}

if(localStorage.getItem("theme") == "light"){
  darkBtn.classList.remove("dark_theme");
  document.body.classList.remove("dark_theme");

}
else if(localStorage.getItem("theme") == "dark"){
  darkBtn.classList.add("dark_theme");
  document.body.classList.add("dark_theme");
}
else{
  localStorage.setItem("theme","light");
}
