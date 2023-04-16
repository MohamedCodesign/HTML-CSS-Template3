//start Countdown event
let countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();

let conter = setInterval(() => {
  let dataNow = new Date().getTime();
  let difftime = countdownDate - dataNow;

  let days = difftime / 1000 / 60 / 60 / 24;
  let hours = (days % Math.floor(days)) * 24;
  let mintes = (hours % Math.floor(hours)) * 60;
  let seconds = (mintes % Math.floor(mintes)) * 60;

  days = Math.floor(days);
  hours = Math.floor(hours);
  mintes = Math.floor(mintes);
  seconds = Math.floor(seconds);

  let daysdiv = document.querySelector(
    ".event .contaner .content .box:nth-of-type(1) h3"
  );
  let hoursdiv = document.querySelector(
    ".event .contaner .content .box:nth-of-type(2) h3"
  );
  let mintesdiv = document.querySelector(
    ".event .contaner .content .box:nth-of-type(3) h3"
  );
  let secondsdiv = document.querySelector(
    ".event .contaner .content .box:nth-of-type(4) h3"
  );

  days < 10
    ? (daysdiv.innerHTML = `0${days}`)
    : (daysdiv.innerHTML = `${days}`);
  hours < 10
    ? (hoursdiv.innerHTML = `0${hours}`)
    : (hoursdiv.innerHTML = `${hours}`);
  mintes < 10
    ? (mintesdiv.innerHTML = `0${mintes}`)
    : (mintesdiv.innerHTML = `${mintes}`);
  seconds < 10
    ? (secondsdiv.innerHTML = `0${seconds}`)
    : (secondsdiv.innerHTML = `${seconds}`);

  if (difftime <= 0) clearInterval(conter);

  //   console.log(days);
  //   console.log(hours);
  //   console.log(mintes);
  //   console.log(second);
}, 1000);
//end Countdown event

// start skills
let section = document.querySelector(".skills");
let span = document.querySelectorAll(
  ".skills .contaner .content .skill .cnt span"
);
let statsection = document.querySelector(".stats");
let statp = document.querySelectorAll(".stats .contaner .box p");
let start = false;

window.onscroll = () => {
  if (window.scrollY >= section.offsetTop - 300) {
    span.forEach(function (sp) {
      sp.style.width = sp.parentElement.dataset.size;
    });
  }
  if (window.scrollY >= statsection.offsetTop - 300) {
    if (!start) {
      statp.forEach(function (p) {
        let conter2 = setInterval(() => {
          p.textContent++;
          if (p.textContent == p.dataset.num) {
            clearInterval(conter2);
          }
        }, 2000 / p.dataset.num);
      });
    }
    start = true;
  }
};
// end skills
let change = true;
let dis = document.querySelector(".discount .dis");

setInterval(function () {
  if (change) {
    console.log(change);
    dis.style.backgroundImage = `url(imgs/discount-background1.jpg)`;
    change = false;
  } else {
    console.log(change);
    dis.style.backgroundImage = `url(imgs/discount-background2.jpg)`;
    change = true;
  }
}, 4000);
