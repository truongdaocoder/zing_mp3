let slides = document.querySelectorAll(".option__song-slider-img");
let slide2s = document.querySelectorAll(".container-discover__slider-item");
let currentIndex1 = 0;
let currentIndex2 = 0;
function changeSlide() {
  slides.forEach((item, index) => {
    if (index === currentIndex1) {
      slides[index].classList.replace(
        "option__song-slider-img-second",
        "option__song-slider-img-first"
      );
    } else if (index === currentIndex1 + 1) {
      slides[index].classList.replace(
        "option__song-slider-img-third",
        "option__song-slider-img-second"
      );
    } else {
      slides[index].classList.replace(
        "option__song-slider-img-first",
        "option__song-slider-img-third"
      );
    }
    if (currentIndex1 === slides.length - 1) {
      slides[0].classList.replace(
        "option__song-slider-img-third",
        "option__song-slider-img-second"
      );
    }
  });
  currentIndex1++;
  if (currentIndex1 >= slides.length) currentIndex1 = 0;
}

setInterval(changeSlide, 2000);
function changeSlide2() {
  slide2s.forEach((item, index) => {
    if (index === currentIndex2) {
      slide2s[index].classList.replace(
        "container-discover__slider-item-first",
        "container-discover__slider-item-four"
      );
      slide2s[index].classList.replace(
        "container-discover__slider-item-second",
        "container-discover__slider-item-four"
      );
      slide2s[index].classList.replace(
        "container-discover__slider-item-third",
        "container-discover__slider-item-four"
      );
    } else if (index === currentIndex2 + 1) {
      slide2s[index].classList.replace(
        "container-discover__slider-item-second",
        "container-discover__slider-item-third"
      );
      slide2s[index].classList.replace(
        "container-discover__slider-item-four",
        "container-discover__slider-item-third"
      );
      slide2s[index].classList.replace(
        "container-discover__slider-item-first",
        "container-discover__slider-item-third"
      );
    } else if (index === currentIndex2 + 2) {
      slide2s[index].classList.replace(
        "container-discover__slider-item-third",
        "container-discover__slider-item-second"
      );
      slide2s[index].classList.replace(
        "container-discover__slider-item-four",
        "container-discover__slider-item-second"
      );
      slide2s[index].classList.replace(
        "container-discover__slider-item-first",
        "container-discover__slider-item-second"
      );
    } else {
      slide2s[index].classList.replace(
        "container-discover__slider-item-four",
        "container-discover__slider-item-first"
      );
      slide2s[index].classList.replace(
        "container-discover__slider-item-second",
        "container-discover__slider-item-first"
      );
      slide2s[index].classList.replace(
        "container-discover__slider-item-third",
        "container-discover__slider-item-first"
      );
    }
  });
  if (currentIndex2 === 2) {
    slide2s[0].classList.replace(
      "container-discover__slider-item-first",
      "container-discover__slider-item-second"
    );
    slide2s[0].classList.replace(
      "container-discover__slider-item-third",
      "container-discover__slider-item-second"
    );
    slide2s[0].classList.replace(
      "container-discover__slider-item-four",
      "container-discover__slider-item-second"
    );
  } else if (currentIndex2 === 3) {
    slide2s[0].classList.replace(
      "container-discover__slider-item-four",
      "container-discover__slider-item-third"
    );
    slide2s[0].classList.replace(
      "container-discover__slider-item-first",
      "container-discover__slider-item-third"
    );
    slide2s[0].classList.replace(
      "container-discover__slider-item-second",
      "container-discover__slider-item-third"
    );
    slide2s[1].classList.replace(
      "container-discover__slider-item-first",
      "container-discover__slider-item-second"
    );
    slide2s[1].classList.replace(
      "container-discover__slider-item-third",
      "container-discover__slider-item-second"
    );
    slide2s[1].classList.replace(
      "container-discover__slider-item-four",
      "container-discover__slider-item-second"
    );
  }
}
document.querySelector(".js__container-discover__slider-right").onclick =
  function () {
    changeSlide2();
    currentIndex2++;
    if (currentIndex2 > slide2s.length - 1) {
      currentIndex2 = 0;
    }
  };
document.querySelector(".js__container-discover__slider-left").onclick =
  function () {
    changeSlide2();
    currentIndex2--;
    if (currentIndex2 < 0) {
      currentIndex2 = 0;
    }
  };
setInterval(function () {
  changeSlide2();
  currentIndex2++;
  if (currentIndex2 > slide2s.length - 1) {
    currentIndex2 = 0;
  }
}, 5000);
