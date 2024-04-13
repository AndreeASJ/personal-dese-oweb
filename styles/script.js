/** Animacion para esconder navbar */

const navbar = document.getElementById("navbar");

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Hide the navbar when scrolling down
    navbar.style.top = "-200px";
  } else {
    // Show the navbar when scrolling up
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});


/** Animacion slider Frutas*/

let items = document.querySelectorAll('.slider .item');
let active = 2;
function loadShow() {
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;
  // show after
  let stt = 0;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = (active - 1); i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
}
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
}

/* Logia */ 

let items1 = document.querySelectorAll('.slider1 .item1');
let active1 = 2;

function loadShow1() {
  items1[active1].style.transform = `none`;
  items1[active1].style.zIndex = 1;
  items1[active1].style.filter = 'none';
  items1[active1].style.opacity = 1;
  
  // show after
  let stt1 = 0;
  for (let i = active1 + 1; i < items1.length; i++) {
    stt1++;
    items1[i].style.transform = `translateX(${120 * stt1}px) scale(${1 - 0.2 * stt1}) perspective(16px) rotateY(-1deg)`;
    items1[i].style.zIndex = -stt1;
    items1[i].style.filter = 'blur(5px)';
    items1[i].style.opacity = stt1 > 2 ? 0 : 0.6;
  }
  
  stt1 = 0;
  for (let i = (active1 - 1); i >= 0; i--) {
    stt1++;
    items1[i].style.transform = `translateX(${-120 * stt1}px) scale(${1 - 0.2 * stt1}) perspective(16px) rotateY(1deg)`;
    items1[i].style.zIndex = -stt1;
    items1[i].style.filter = 'blur(5px)';
    items1[i].style.opacity = stt1 > 2 ? 0 : 0.6;
  }
}

loadShow1();

let next1 = document.getElementById('next1');
let prev1 = document.getElementById('prev1');

next1.onclick = function () {
  active1 = active1 + 1 < items1.length ? active1 + 1 : active1;
  loadShow1();
}

prev1.onclick = function () {
  active1 = active1 - 1 >= 0 ? active1 - 1 : active1;
  loadShow1();
}

/* Zooan */

let items2 = document.querySelectorAll('.slider2 .item2');
let active2 = 2;

function loadShow2() {
  items2[active2].style.transform = `none`;
  items2[active2].style.zIndex = 1;
  items2[active2].style.filter = 'none';
  items2[active2].style.opacity = 1;
  
  // show after
  let stt2 = 0;
  for (let i = active2 + 1; i < items2.length; i++) {
    stt2++;
    items2[i].style.transform = `translateX(${120 * stt2}px) scale(${1 - 0.2 * stt2}) perspective(16px) rotateY(-1deg)`;
    items2[i].style.zIndex = -stt2;
    items2[i].style.filter = 'blur(5px)';
    items2[i].style.opacity = stt2 > 2 ? 0 : 0.6;
  }
  
  stt2 = 0;
  for (let i = (active2 - 1); i >= 0; i--) {
    stt2++;
    items2[i].style.transform = `translateX(${-120 * stt2}px) scale(${1 - 0.2 * stt2}) perspective(16px) rotateY(1deg)`;
    items2[i].style.zIndex = -stt2;
    items2[i].style.filter = 'blur(5px)';
    items2[i].style.opacity = stt2 > 2 ? 0 : 0.6;
  }
}

loadShow2();

let next2 = document.getElementById('next2');
let prev2 = document.getElementById('prev2');

next2.onclick = function () {
  active2 = active2 + 1 < items2.length ? active2 + 1 : active2;
  loadShow2();
}

prev2.onclick = function () {
  active2 = active2 - 1 >= 0 ? active2 - 1 : active2;
  loadShow2();
}


/** Form, pero no funciona aun */

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // const formData = new FormData(contactForm);
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    const apiEndpoint = "https://localhost:3000/api/contact";

    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        'Content-Type':
          'application/json;charset=utf-8'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        responseMessage.innerHTML = `<p>${data.message}</p>`;
        responseMessage.classList.add("success", "show"); // Add 'show' class to make the message visible

        setTimeout(() => {
          contactForm.reset();
          responseMessage.innerHTML = "";
          responseMessage.classList.remove("success", "show");
        }, 2000);
      })
      .catch(error => {
        console.error("Error:", error);
        responseMessage.innerHTML = `<p>Error submitting the form. Please try again later.</p>`;
        responseMessage.classList.add("error", "show"); // Add 'show' class to make the message visible

        setTimeout(() => {
          responseMessage.innerHTML = "";
          responseMessage.classList.remove("error", "show");
        }, 3000);
      });
  });
});

/** Animacion galeria en personajes */

//box
const boxes = document.querySelectorAll(".box");
const boxContainer = document.querySelector(".box-container");

//box1
const boxes1 = document.querySelectorAll(".box1");
const boxContainer1 = document.querySelector(".box-container1");

//box2
const boxes2 = document.querySelectorAll(".box2");
const boxContainer2 = document.querySelector(".box-container2");

//box3
const boxes3 = document.querySelectorAll(".box3");
const boxContainer3 = document.querySelector(".box-container3");

//box4
const boxes4 = document.querySelectorAll(".box4");
const boxContainer4 = document.querySelector(".box-container4");

//box5
const boxes5 = document.querySelectorAll(".box5");
const boxContainer5 = document.querySelector(".box-container5");

//box6
const boxes6 = document.querySelectorAll(".box6");
const boxContainer6 = document.querySelector(".box-container6");

//box7
const boxes7 = document.querySelectorAll(".box7");
const boxContainer7 = document.querySelector(".box-container7");

//box8
const boxes8 = document.querySelectorAll(".box8");
const boxContainer8 = document.querySelector(".box-container8");

//box9
const boxes9 = document.querySelectorAll(".box9");
const boxContainer9 = document.querySelector(".box-container9");


let activeIndex = 1;
let isTransitioning = false;

function updateCurrentImg(boxes) {
  isTransitioning = true;

  boxes.forEach((box, index) => {
    const isActive = index === activeIndex;
    box.classList.toggle("expanded", isActive);
    box.classList.toggle("closed", !isActive);
  });

  setTimeout(() => {
    isTransitioning = false;
  }, 500);
}

function handleArrowKey(event) {
  if (isTransitioning) {
    return;
  }

  if (event.key === "ArrowRight") {
    activeIndex = (activeIndex + 1) % boxes.length;
  } else if (event.key === "ArrowLeft") {
    activeIndex = (activeIndex - 1 + boxes.length) % boxes.length;
  }

  updateCurrentImg(boxes);
}

function handleBoxClick(index, boxes) {
  if (isTransitioning) {
    return;
  }

  if (index === activeIndex && boxes[index].classList.contains("expanded")) {
    boxes.forEach((box) => box.classList.remove("closed", "expanded"));
    activeIndex = 0;
  } else {
    activeIndex = index;
    updateCurrentImg(boxes);
  }
}

document.addEventListener("keydown", handleArrowKey);


boxes.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes));
});
updateCurrentImg(boxes);


boxes1.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes1));
});
updateCurrentImg(boxes1);


boxes2.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes2));
});
updateCurrentImg(boxes2);


boxes3.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes3));
});
updateCurrentImg(boxes3);


boxes4.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes4));
});
updateCurrentImg(boxes4);


boxes5.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes5));
});
updateCurrentImg(boxes5);


boxes6.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes6));
});
updateCurrentImg(boxes6);


boxes7.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes7));
});
updateCurrentImg(boxes7);


boxes8.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes8));
});
updateCurrentImg(boxes8);


boxes9.forEach((box, index) => {
  box.addEventListener("click", () => handleBoxClick(index, boxes9));
});
updateCurrentImg(boxes9);