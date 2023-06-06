let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let songList = $(".option__songs-list");
let audio = $("#audio");
const progress = $("#progress");
const progress1 = $("#progress1");
let playBtn = $(".music-control__icon-play");
let songVolume = $(".music-control__right-volume-icon");
const prey = $(".prey");
const next = $(".next");
const setting = $(".header__setting");
const themeItems = $$(".js-theme-item");
const app = {
  songs: [
    {
      name: "Anh Chẳng Sao Mà",
      img: "./assets/img/song/Anh-Chang-Sao-Ma-Version-2-Khang-Viet.webp",
      singer: "Khang Việt",
      path: "./assets/songs/Anh-Chang-Sao-Ma-Version-2-Khang-Viet.mp3",
      duration: "04:17",
    },
    {
      name: "Ai Chung Tình Được Mãi",
      img: "./assets/img/song/Ai-Chung-Tinh-Duoc-Mai.webp",
      singer: "Thuong Vo",
      path: "./assets/songs/Ai-Chung-Tinh-Duoc-Mai-Lofi-Version-Thuong-Vo.mp3",
      duration: "05:33",
    },
    {
      name: "Ai Đợi Mình Được Mãi",
      img: "./assets/img/song/Ai-Doi-Minh-Duoc-Mai.webp",
      singer: "Thanh Hưng",
      path: "./assets/songs/Ai-Doi-Minh-Duoc-Mai-DJ-Kelvin-Remix-Thanh-Hung.mp3",
      duration: "05:31",
    },
    {
      name: "Đám Cưới Nha",
      img: "./assets/img/song/Dam-Cuoi-Nha-Nekko-Remix-Hong-Thanh-DJ-Mie.webp",
      singer: "Hồng Thanh",
      path: "./assets/songs/Dam-Cuoi-Nha-Nekko-Remix-Hong-Thanh-DJ-Mie.mp3",
      duration: "02:54",
    },
    {
      name: "Không Trọn Vẹn Nữa",
      img: "./assets/img/song/Khong-Tron-Ven-Nua-Ciray-Remix-Chau-Khai-Phong.webp",
      singer: "Châu Khải Phong",
      path: "./assets/songs/Khong-Tron-Ven-Nua-Ciray-Remix-Chau-Khai-Phong.mp3",
      duration: "04:06",
    },
    {
      name: "Kiếp Má Hồng",
      img: "./assets/img/song/Kiep-Ma-Hong-Remix-Tiktok-TLong-Lac-Khoi.webp",
      singer: "TLong",
      path: "./assets/songs/Kiep-Ma-Hong-Remix-Tiktok-TLong-Lac-Khoi.mp3",
      duration: "04:26",
    },
    {
      name: "Người Lạ Thoáng Qua",
      img: "./assets/img/song/Nguoi-La-Thoang-Qua-Lofi-Version-Thuong-Vo.webp",
      singer: "Thương Võ",
      path: "./assets/songs/Nguoi-La-Thoang-Qua-Lofi-Version-Thuong-Vo.mp3",
      duration: "04:45",
    },
    {
      name: "Như Một Người Dưng",
      img: "./assets/img/song/Như-Một-Người-Dưng.webp",
      singer: "Nguyễn Thạc Bảo Ngọc",
      path: "./assets/songs/Nhu-Mot-Nguoi-Dung-Nguyen-Thac-Bao-Ngoc.mp3",
      duration: "05:23",
    },
    {
      name: "Pháo Hồng",
      img: "./assets/img/song/Phao-Hong-H2O-Remix-Dat-Long-Vinh.webp",
      singer: "DatLong Vinh",
      path: "./assets/songs/Phao-Hong-H2O-Remix-Dat-Long-Vinh.mp3",
      duration: "04:16",
    },
    {
      name: "Sao Cũng Được",
      img: "./assets/img/song/Sao-Cung-Duoc-MIT-REMIX-Thanh-Dat.webp",
      singer: "Thành Đạt",
      path: "./assets/songs/Sao-Cung-Duoc-MIT-REMIX-Thanh-Dat.mp3",
      duration: "05:35",
    },
    {
      name: "Thuyền Quyên",
      img: "./assets/img/song/Thuyen-Quyen-AM-Remix-Dieu-Kien.webp",
      singer: "Dieu Kien",
      path: "./assets/songs/Thuyen-Quyen-AM-Remix-Dieu-Kien.mp3",
      duration: "03:31",
    },
    {
      name: "Tình Yêu Hoa Gió",
      img: "./assets/img/song/Tinh-Yeu-Hoa-Gio-Truong-The-Vinh.webp",
      singer: "Truong The Vinh",
      path: "./assets/songs/Tinh-Yeu-Hoa-Gio-Truong-The-Vinh.mp3",
      duration: "04:00",
    },
    {
      name: "Tránh Duyên",
      img: "./assets/img/song/Tranh-Duyen-DJ-Phan-Tu-Giao-Remix-Dinh-Dung.webp",
      singer: "Dinh Dung",
      path: "./assets/songs/Tranh-Duyen-DJ-Phan-Tu-Giao-Remix-Dinh-Dung.mp3",
      duration: "05:24",
    },
    {
      name: "Tướng Quân",
      img: "./assets/img/song/Tuong-Quan-Htrol-Remix-Nhat-Phong-Htrol.webp",
      singer: "Nhat Phong",
      path: "./assets/songs/Tuong-Quan-Htrol-Remix-Nhat-Phong-Htrol.mp3",
      duration: "04:19",
    },
    {
      name: "Yêu Đừng Sợ Đau",
      img: "./assets/img/song/Yeu-Dung-So-Dau-Cukak-Remix-Ngo-Lan-Huong.webp",
      singer: "Ngo Lan Huong",
      path: "./assets/songs/Yeu-Dung-So-Dau-Cukak-Remix-Ngo-Lan-Huong.mp3",
      duration: "03:53",
    },
  ],
  currentIndex: 0,
  isPlay: false,
  isRepeat: false,
  isRandom: false,
  isMute: false,
  backgroundIndex: 0,
  conFig: JSON.parse(localStorage.getItem("song")) || {},
  setConfig(name, value) {
    this.conFig[name] = value;
    localStorage.setItem("song", JSON.stringify(this.conFig));
  },
  getConfig() {
    this.currentIndex = this.conFig.currentIndex;
    this.isRandom = this.conFig.isRandom;
    this.isRepeat = this.conFig.isRepeat;
    $(".js-random-song").classList.toggle("random--active", this.isRandom);
    $(".js-repeat-song").classList.toggle("repeat--active", this.isRepeat);
  },
  addTheme() {
    const _this = this;
    themeItems.forEach((e, index) => {
      e.onclick = function () {
        if (index == 0) {
          _this.backgroundIndex = 0;
          $(
            ".header"
          ).style.backgroundColor = `var(--header-color-${_this.backgroundIndex})`;
          $(".header").style.boxShadow = "0 3px 5px rgba(0,0,0,0.1)";
          $(".main").style.backgroundImage =
            "url(./assets/img/background/0.svg)";
          $(".main-music-control").style.backgroundImage = "";
          $(".main-music-control").style.backgroundColor = "#37075D";
          //$(".mobile-tab").style.backgroundColor = "#37075D";
          $(".sidebar__add-playlist").style.backgroundColor = "#411465";
          $(".sidebar__add-playlist").style.borderTop =
            "1px solid rgba(255, 255, 255, 0.1)";
          $(".nextsong__option-wrapper").style.backgroundColor = "#4B206E";
          $(".header__width-search-sub").style.backgroundColor = "#6A39AF";
          $(".header__width-search-sub").classList.add(
            "header__width-search-sub--purple"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--white"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--green"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--gray"
          );
          $(".header__width-search").classList.remove(
            "js__gray-backgroundColor"
          );
          $(".header__setting-list").style.backgroundColor = "#6A39AF";
          $(".theme-modal__body").style.backgroundColor = "#6A39AF";
          //$(".nextsong__option-wrapper-listplay").style.backgroundColor =
          ("#816399");
          $(".sidebar").style.backgroundColor = "hsla(0,0%,100%,0.05)";
          $(".header__width-search-input").classList.remove(
            "header__width-search-input--white"
          );
          $(".header__width-search-input").classList.add(
            "header__width-search-input--dark"
          );
          $(
            ".music__option-item.music__option-item--active"
          ).style.backgroundColor = "#816399";
          $(".music__option-item.music__option-item--active").style.color =
            "#fff";
          $(".music-control__volume-input").style.backgroundColor =
            "rgba(255, 255, 255, 0.3)";
          $(".music-control__progress-input").style.backgroundColor =
            "rgba(255, 255, 255, 0.3)";

          $$(".js__main-color").forEach((item) => {
            item.style.color = "#fff";
          });
          $$(".js__sub-color").forEach((item) => {
            item.style.color = "rgba(255, 255, 255, 0.5)";
          });
          $$(".js__backgroundColor").forEach((item) => {
            item.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          });
          $$(".js__border").forEach((item) => {
            item.style.border = "2px solid #fff";
          });
        } else if (index == 1) {
          _this.backgroundIndex = 1;
          $(
            ".header"
          ).style.backgroundColor = `var(--header-color-${_this.backgroundIndex})`;
          $(".header").style.boxShadow = "0 3px 5px rgba(0,0,0,0.1)";
          $(".main").style.backgroundImage =
            "url(./assets/img/background/1.jpg)";
          $(".main-music-control").style.backgroundImage = "none";
          $(".main-music-control").style.backgroundColor = "#202020";
          //$(".mobile-tab").style.backgroundColor = "#202020";
          $(".sidebar__add-playlist").style.backgroundColor = "#333333";
          $(".sidebar__add-playlist").style.borderTop =
            "1px solid rgba(0, 0, 0, 0.1)";
          $(".nextsong__option-wrapper").style.backgroundColor = "#3E3E3E";
          $(".header__width-search-sub").style.backgroundColor = "#3E3E3E";
          $(".header__width-search-sub").classList.add(
            "header__width-search-sub--gray"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--purple"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--white"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--green"
          );
          $(".header__width-search").classList.remove(
            "js__gray-backgroundColor"
          );
          $(".header__setting-list").style.backgroundColor = "#3E3E3E";
          $(".theme-modal__body").style.backgroundColor = "#3D3D3D";
          //$(".nextsong__option-wrapper-listplay").style.backgroundColor =
          ("#787878");
          $(".sidebar").style.backgroundColor = "hsla(0,0%,100%,0.05)";
          $(".header__width-search-input").classList.remove(
            "header__width-search-input--white"
          );
          $(".header__width-search-input").classList.add(
            "header__width-search-input--dark"
          );
          $(
            ".music__option-item.music__option-item--active"
          ).style.backgroundColor = "#787878";
          $(".music__option-item.music__option-item--active").style.color =
            "#fff";
          $(".music-control__volume-input").style.backgroundColor =
            "rgba(255, 255, 255, 0.3)";
          $(".music-control__progress-input").style.backgroundColor =
            "rgba(255, 255, 255, 0.3)";

          $$(".js__main-color").forEach((item) => {
            item.style.color = "#fff";
          });
          $$(".js__sub-color").forEach((item) => {
            item.style.color = "rgba(255, 255, 255, 0.5)";
          });
          $$(".js__backgroundColor").forEach((item) => {
            item.style.backgroundColor = "#3E3E3E";
          });
          $$(".js__border").forEach((item) => {
            item.style.border = "2px solid #fff";
          });
        } else if (index == 2) {
          _this.backgroundIndex = 2;
          $(
            ".header"
          ).style.backgroundColor = `var(--header-color-${_this.backgroundIndex})`;
          $(".header").style.boxShadow = "0 3px 5px rgba(0,0,0,0.1)";
          $(".main").style.backgroundImage =
            "url(./assets/img/background/2.jpg)";
          $(".main-music-control").style.backgroundImage = "none";
          $(".main-music-control").style.backgroundColor = "#051740";
          //$(".mobile-tab").style.backgroundColor = "#051740";
          $(".sidebar__add-playlist").style.backgroundColor = "#132958";
          $(".sidebar__add-playlist").style.borderTop =
            "1px solid rgba(0, 0, 0, 0.1)";
          $(".nextsong__option-wrapper").style.backgroundColor = "#1F3461";
          $(".header__width-search-sub").style.backgroundColor = "#1F3461";
          $(".header__width-search-sub").classList.add(
            "header__width-search-sub--green"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--purple"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--white"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--gray"
          );
          $(".header__width-search").classList.remove(
            "js__gray-backgroundColor"
          );
          $(".header__setting-list").style.backgroundColor = "#1F3461";
          $(".theme-modal__body").style.backgroundColor = "#192F60";
          //$(".nextsong__option-wrapper-listplay").style.backgroundColor =
          ("#637191");
          $(".sidebar").style.backgroundColor = "hsla(0,0%,100%,0.05)";
          $(".header__width-search-input").classList.remove(
            "header__width-search-input--white"
          );
          $(".header__width-search-input").classList.add(
            "header__width-search-input--dark"
          );
          $(
            ".music__option-item.music__option-item--active"
          ).style.backgroundColor = "#637191";
          $(".music__option-item.music__option-item--active").style.color =
            "#fff";
          $(".music-control__volume-input").style.backgroundColor =
            "rgba(255, 255, 255, 0.3)";
          $(".music-control__progress-input").style.backgroundColor =
            "rgba(255, 255, 255, 0.3)";

          $$(".js__main-color").forEach((item) => {
            item.style.color = "#fff";
          });
          $$(".js__sub-color").forEach((item) => {
            item.style.color = "rgba(255, 255, 255, 0.5)";
          });
          $$(".js__backgroundColor").forEach((item) => {
            item.style.backgroundColor = "#1F3461";
          });
          $$(".js__border").forEach((item) => {
            item.style.border = "2px solid #fff";
          });
        } else if (index == 3) {
          _this.backgroundIndex = 3;
          $(
            ".header"
          ).style.backgroundColor = `var(--header-color-${_this.backgroundIndex})`;
          $(".header").style.boxShadow = "0 3px 5px rgba(0,0,0,0.1)";
          $(".main").style.backgroundImage =
            "url(./assets/img/background/3.jpg)";
          $(".main-music-control").style.backgroundImage = "none";
          $(".main-music-control").style.backgroundColor = "#D0CCC5";
          //$(".mobile-tab").style.backgroundColor = "#D0CCC5";
          $(".sidebar__add-playlist").style.backgroundColor = "#DAD6D3";
          $(".sidebar__add-playlist").style.borderTop =
            "1px solid rgba(0, 0, 0, 0.1)";
          $(".nextsong__option-wrapper").style.backgroundColor = "#DAD6D3";
          $(".header__width-search-sub").style.backgroundColor = "#FFFFFE";
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--purple"
          );
          $(".header__width-search-sub").classList.add(
            "header__width-search-sub--white"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--green"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--gray"
          );
          $(".header__setting-list").style.backgroundColor = "#FFFFFE";
          $(".theme-modal__body").style.backgroundColor = "#E6E1DE";
          //$(".nextsong__option-wrapper-listplay").style.backgroundColor =
          ("#E5E2E0");
          $(".sidebar").style.backgroundColor = "rgba(0, 0, 0, 0.05)";
          $(".header__width-search-input").classList.add(
            "header__width-search-input--white"
          );
          $(".header__width-search-input").classList.remove(
            "header__width-search-input--dark"
          );
          $(".music-control__volume-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";
          $(".music-control__progress-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";

          $$(".js__main-color").forEach((item) => {
            item.style.color = "#000";
          });
          $$(".js__sub-color").forEach((item) => {
            item.style.color = "#696969";
          });
          $$(".js__backgroundColor").forEach((item) => {
            item.style.backgroundColor = "#DAD6D3";
          });
          $$(".js__border").forEach((item) => {
            item.style.border = "2px solid #000";
          });
          $(
            ".music__option-item.music__option-item--active"
          ).style.backgroundColor = "#E5E2E0";
          $(".music__option-item.music__option-item--active").style.color =
            "#000";
        } else if (index == 4) {
          _this.backgroundIndex = 4;
          $(
            ".header"
          ).style.backgroundColor = `var(--header-color-${_this.backgroundIndex})`;
          $(".header").style.boxShadow = "0 3px 5px rgba(0,0,0,0.1)";
          $(".main").style.backgroundImage =
            "url(./assets/img/background/4.jpg)";
          $(".main-music-control").style.backgroundImage = "none";
          $(".main-music-control").style.backgroundColor = "#B4D0D0";
          //$(".mobile-tab").style.backgroundColor = "#B4D0D0";
          $(".sidebar__add-playlist").style.backgroundColor = "#C9E4E6";
          $(".sidebar__add-playlist").style.borderTop =
            "1px solid rgba(0, 0, 0, 0.1)";
          $(".nextsong__option-wrapper").style.backgroundColor = "#C9E4E6";
          $(".header__width-search-sub").style.backgroundColor = "#FFFFFE";
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--purple"
          );
          $(".header__width-search-sub").classList.add(
            "header__width-search-sub--white"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--green"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--gray"
          );
          $(".header__width-search").classList.remove(
            "js__gray-backgroundColor"
          );
          $(".header__setting-list").style.backgroundColor = "#FFFFFE";
          $(".theme-modal__body").style.backgroundColor = "#C9E4E6";
          //$(".nextsong__option-wrapper-listplay").style.backgroundColor =
          ("#D9ECEE");
          $(".sidebar").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
          $(".header__width-search-input").classList.add(
            "header__width-search-input--white"
          );
          $(".header__width-search-input").classList.remove(
            "header__width-search-input--dark"
          );
          $(".music-control__volume-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";
          $(".music-control__progress-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";

          $$(".js__main-color").forEach((item) => {
            item.style.color = "#000";
          });
          $$(".js__sub-color").forEach((item) => {
            item.style.color = "#696969";
          });
          $$(".js__backgroundColor").forEach((item) => {
            item.style.backgroundColor = "#C9E4E6";
          });
          $$(".js__border").forEach((item) => {
            item.style.border = "2px solid #000";
          });
          $(
            ".music__option-item.music__option-item--active"
          ).style.backgroundColor = "#D9ECEE";
          $(".music__option-item.music__option-item--active").style.color =
            "#000";
        } else if (index == 5) {
          _this.backgroundIndex = 5;
          $(
            ".header"
          ).style.backgroundColor = `var(--header-color-${_this.backgroundIndex})`;
          $(".header").style.boxShadow = "0 3px 5px rgba(0,0,0,0.1)";
          $(".main").style.backgroundImage =
            "url(./assets/img/background/5.jpg)";
          $(".main-music-control").style.backgroundImage = "none";
          $(".main-music-control").style.backgroundColor = "#F9C6C5";
          //$(".mobile-tab").style.backgroundColor = "#F9C6C5";
          $(".sidebar__add-playlist").style.backgroundColor = "#F6E7E4";
          $(".sidebar__add-playlist").style.borderTop =
            "1px solid rgba(0, 0, 0, 0.1)";
          $(".nextsong__option-wrapper").style.backgroundColor = "#E6D2CD";
          $(".header__width-search-sub").style.backgroundColor = "#FFFFFE";
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--purple"
          );
          $(".header__width-search-sub").classList.add(
            "header__width-search-sub--white"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--green"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--gray"
          );
          $(".header__width-search").classList.remove(
            "js__gray-backgroundColor"
          );
          $(".header__setting-list").style.backgroundColor = "#FFFFFE";
          $(".theme-modal__body").style.backgroundColor = "#F9C6C5";
          //$(".nextsong__option-wrapper-listplay").style.backgroundColor =
          ("#EEE0DC");
          $(".sidebar").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
          $(".header__width-search-input").classList.add(
            "header__width-search-input--white"
          );
          $(".header__width-search-input").classList.remove(
            "header__width-search-input--dark"
          );
          $(
            ".music__option-item.music__option-item--active"
          ).style.backgroundColor = "#EEE0DC";
          $(".music__option-item.music__option-item--active").style.color =
            "#000";
          $(".music-control__volume-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";
          $(".music-control__progress-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";

          $$(".js__main-color").forEach((item) => {
            item.style.color = "#000";
          });
          $$(".js__sub-color").forEach((item) => {
            item.style.color = "#696969";
          });
          $$(".js__backgroundColor").forEach((item) => {
            item.style.backgroundColor = "#E6D2CD";
          });
          $$(".js__border").forEach((item) => {
            item.style.border = "2px solid #000";
          });
        } else if (index == 6) {
          _this.backgroundIndex = 6;
          $(
            ".header"
          ).style.backgroundColor = `var(--header-color-${_this.backgroundIndex})`;
          $(".header").style.boxShadow = "0 3px 5px rgba(0,0,0,0.1)";
          $(".main").style.backgroundImage =
            "url(./assets/img/background/6.jpg)";
          $(".main-music-control").style.backgroundImage = "none";
          $(".main-music-control").style.backgroundColor = "#C6C4D1";
          //$(".mobile-tab").style.backgroundColor = "#C6C4D1";
          $(".sidebar__add-playlist").style.backgroundColor = "#B1B0BA";
          $(".sidebar__add-playlist").style.borderTop =
            "1px solid rgba(0, 0, 0, 0.1)";
          $(".nextsong__option-wrapper").style.backgroundColor = "#B1B0BA";
          $(".header__width-search-sub").style.backgroundColor = "#FFFFFE";
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--purple"
          );
          $(".header__width-search-sub").classList.add(
            "header__width-search-sub--white"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--green"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--gray"
          );
          $(".header__width-search").classList.remove(
            "js__gray-backgroundColor"
          );
          $(".header__setting-list").style.backgroundColor = "#FFFFFE";
          $(".theme-modal__body").style.backgroundColor = "#E2E7F5";
          //$(".nextsong__option-wrapper-listplay").style.backgroundColor =
          ("#C9C8CF");
          $(".sidebar").style.backgroundColor = "rgba(0,0,0,0.05)";
          $(".header__width-search-input").classList.add(
            "header__width-search-input--white"
          );
          $(".header__width-search-input").classList.remove(
            "header__width-search-input--dark"
          );
          $(
            ".music__option-item.music__option-item--active"
          ).style.backgroundColor = "#C9C8CF";
          $(".music__option-item.music__option-item--active").style.color =
            "#000";
          $(".music-control__volume-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";
          $(".music-control__progress-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";

          $$(".js__main-color").forEach((item) => {
            item.style.color = "#000";
          });
          $$(".js__sub-color").forEach((item) => {
            item.style.color = "#696969";
          });
          $$(".js__backgroundColor").forEach((item) => {
            item.style.backgroundColor = "#B1B0BA";
          });
          $$(".js__border").forEach((item) => {
            item.style.border = "2px solid #000";
          });
        } else if (index == 7) {
          _this.backgroundIndex = 7;
          $(
            ".header"
          ).style.backgroundColor = `var(--header-color-${_this.backgroundIndex})`;
          $(".header").style.boxShadow = "0 3px 5px rgba(0,0,0,0.1)";
          $(".main").style.backgroundImage =
            "url(./assets/img/background/7.jpg)";
          $(".main-music-control").style.backgroundImage = "none";
          $(".main-music-control").style.backgroundColor = "#FFFFFF";
          //$(".mobile-tab").style.backgroundColor = "#FFFFFF";
          $(".sidebar__add-playlist").style.backgroundColor = "#F2F2F2";
          $(".sidebar__add-playlist").style.borderTop =
            "1px solid rgba(0, 0, 0, 0.1)";
          $(".nextsong__option-wrapper").style.backgroundColor = "#F2F2F2";
          $(".header__width-search-sub").style.backgroundColor = "#f2f2f2";
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--purple"
          );
          $(".header__width-search-sub").classList.add(
            "header__width-search-sub--white"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--green"
          );
          $(".header__width-search-sub").classList.remove(
            "header__width-search-sub--gray"
          );
          $(".header__width-search").classList.remove(
            "js__gray-backgroundColor"
          );
          $(".header__setting-list").style.backgroundColor = "#FFFFFE";
          $(".theme-modal__body").style.backgroundColor = "#E6E1DE";
          // $(".nextsong__option-wrapper-listplay").style.backgroundColor =
          // ("#FFFFFF");
          $(".sidebar").style.backgroundColor = "rgba(0,0,0,0.05)";
          $(".header__width-search-input").classList.add(
            "header__width-search-input--white"
          );
          $(".header__width-search-input").classList.remove(
            "header__width-search-input--dark"
          );
          $(
            ".music__option-item.music__option-item--active"
          ).style.backgroundColor = "#FFFFFF";
          $(".music__option-item.music__option-item--active").style.color =
            "#000";
          $(".music-control__volume-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";
          $(".music-control__progress-input").style.backgroundColor =
            "rgba(0, 0, 0, 0.3)";

          $$(".js__main-color").forEach((item) => {
            item.style.color = "#000";
          });
          $$(".js__sub-color").forEach((item) => {
            item.style.color = "#696969";
          });
          $$(".js__backgroundColor").forEach((item) => {
            item.style.backgroundColor = "#F2F2F2";
          });
          $$(".js__border").forEach((item) => {
            item.style.border = "2px solid #000";
          });
        }
      };
    });
  },
  render() {
    let data = this.songs.map((song, index) => {
      return `
      <li class="song-item js-song-item ${
        index === this.currentIndex ? "song-item--active" : ""
      }" data-index="${index}">
      <div class="song-item-left">
        <div
          class="song-item-left-img"
          style="
            background-image: url(${song.img});
          "
        >
          <div class="song-item-left-img-playbtn">
            <i class="fas fa-play"></i>
          </div>
          <div class="song-item-left-img-playing-box">
            <img
              class="song-item-left-img-playing"
              src="./assets/img/song/icon-playing.gif"
              alt="playing"
            />
          </div>
        </div>
        <div class="song-item-left-body">
          <h3 class="song-item-left-body-name js__main-color">
            ${song.name}
          </h3>
          <span class="song-item-left-body-singer js__sub-color"
            >${song.singer}
          </span>
        </div>
      </div>
      <div class="song-item-center js__sub-color hide-mobile hide-tablet">
        <span>${song.name} (Remix)</span>
      </div>
      <div class="song-item-right hide-mobile">
        <span class="song-item-right-mv">
          <i
            class="fas fa-photo-video js__main-color"
            style="color: rgb(255, 255, 255)"
          ></i>
        </span>
        <span class="song-item-right-lyric">
          <i
            class="fas fa-microphone js__main-color"
            style="color: rgb(255, 255, 255)"
          ></i>
        </span>
        <span class="song-item-right-tym">
          <i
            class="fas fa-heart song-item-right-tym-first"
          ></i>
          <i
            class="far fa-heart song-item-right-tym-last"
          ></i>
        </span>
        <span class="song-item-right-duration js__main-color">${
          song.duration
        }</span>
        <span class="song-item-right-more js__main-color"
          ><i class="fas fa-ellipsis-h"></i
        ></span>
      </div>
    </li>`;
    });
    songList.innerHTML = data.join("");
  },
  renderZingchart(number) {
    let data = this.songs.map((song, index) => {
      return index < number
        ? `<li class="song-item ">
      <div class="song-item-left">
        <span class="zingchart__item-left-stt ${
          index === 0 ? "zingchart__item-first" : ""
        } ${index === 1 ? "zingchart__item-second" : ""} ${
            index === 2 ? "zingchart__item-third" : ""
          }"
          >${index + 1}</span
        >
        <span class="zingchart__item-left-line js__main-color"
          >-</span
        >
        <div
          style="
            background-image: url(${song.img});
          "
          class="song-item-left-img"
        >
          <div class="song-item-left-img-playbtn">
            <i class="fas fa-play"></i>
          </div>
          <div class="song-item-left-img-playing-box">
            <img
              class="song-item-left-img-playing"
              src="./assets/img/song/icon-playing.gif"
              alt="playing"
            />
          </div>
        </div>

        <div class="song-item-left-body">
          <h3 class="song-item-left-body-name js__main-color">
            ${song.name}
          </h3>
          <span class="song-item-left-body-singer js__sub-color"
            >${song.singer} Remix</span
          >
        </div>
      </div>
      <div
        class="song-item-center hide-tablet hide-mobile js__sub-color"
      >
        <span> ${song.name} (Remix)</span>
      </div>
      <div class="song-item-right hide-mobile">
        <span class="song-item-right-mv ipad-air-hiden"
          ><i class="fas fa-photo-video js__main-color"></i
        ></span>
        <span class="song-item-right-lyric ipad-air-hiden"
          ><i class="fas fa-microphone js__main-color"></i
        ></span>
        <span class="song-item-right-tym">
          <i class="fas fa-heart song-item-right-tym-first"></i>
          <i class="far fa-heart song-item-right-tym-last"></i>
        </span>
        <span class="song-item-right-duration js__sub-color"
          >${song.duration}</span
        >
        <span class="song-item-right-more js__main-color"
          ><i class="fas fa-ellipsis-h"></i
        ></span>
      </div>
    </li>`
        : "";
    });
    $(".js__zingchart__list").innerHTML = data.join("");
  },
  renderNextsongHeading() {
    const htmls = this.songs.map((song, index) => {
      return index <= this.currentIndex
        ? `<li class="nextsong-item nextsong-item-first ${
            index === this.currentIndex ? "nextsong-item--active" : ""
          }" data-index="${index}">
        <div
          class="nextsong-item-img"
          style="background-image: url(${song.img})"
        >
          <div class="nextsong-item-img-playbtn">
            <i class="fas fa-play"></i>
          </div>
          <div class="nextsong-item-img-playing-box">
            <img
              class="nextsong-item-img-playing"
              src="./assets/img/song/icon-playing.gif"
              alt="playing"
            />
          </div>
        </div>
        <div class="nextsong-item-body">
          <h3 class="nextsong-item-body-name js__main-color">${song.name}</h3>
          <span class="nextsong-item-body-singer js__sub-color"
            >${song.singer}
          </span>
        </div>
      </li> `
        : "";
    });
    $(".nextsong__first").innerHTML = htmls.join("");
  },
  renderNextsongLast() {
    const htmls = this.songs.map((song, index) => {
      if (this.currentIndex >= this.songs.length - 1) {
        return `<span>hết nhạc rồi</span>`;
      } else {
        return index > this.currentIndex
          ? `<li class="nextsong-item nextsong-item-last" data-index="${index}">
        <div
          class="nextsong-item-img"
          style="background-image: url(${song.img})"
        >
          <div class="nextsong-item-img-playbtn">
            <i class="fas fa-play"></i>
          </div>
          <div class="nextsong-item-img-playing-box">
            <img
              class="nextsong-item-img-playing"
              src="./assets/img/song/icon-playing.gif"
              alt="playing"
            />
          </div>
        </div>
        <div class="nextsong-item-body">
          <h3 class="nextsong-item-body-name js__main-color">${song.name}</h3>
          <span class="nextsong-item-body-singer js__sub-color"
            >${song.singer}
          </span>
        </div>
      </li> `
          : "";
      }
    });
    $(".nextsong__last-list").innerHTML = htmls.join("");
  },
  scrollIntoView() {
    setTimeout(function () {
      $(".js-song-item.song-item--active").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 500);
  },
  defineProperties() {
    Object.defineProperty(this, "currentSong", {
      get() {
        return this.songs[this.currentIndex];
      },
    });
  },
  loadCurrentSong() {
    $(
      ".music-control__left-img"
    ).style.backgroundImage = `url(${this.currentSong.img})`;
    $(".music-control__left-content-song").innerHTML = this.currentSong.name;
    $(".music-control__left-content-singer").innerHTML =
      this.currentSong.singer;
    $(".music-control__progress-time-duration").innerHTML =
      this.currentSong.duration;
    audio.src = this.currentSong.path;
  },
  makeSongRandom(a) {
    let index = Math.floor(Math.random() * this.songs.length);
    while (a.includes(index)) {
      index = Math.floor(Math.random() * this.songs.length);
    }
    a.push(index);
    if (a.length === this.songs.length) {
      a.splice(0, a.length - 1);
    }
    this.currentIndex = index;
    this.setConfig("currentIndex", this.currentIndex);
    this.loadCurrentSong();
  },
  nextSong() {
    this.currentIndex++;
    if (this.currentIndex > this.songs.length - 1) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
    this.setConfig("currentIndex", this.currentIndex);
  },
  preySong() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
    this.setConfig("currentIndex", this.currentIndex);
  },
  handleEvents() {
    const _this = this;
    var arrRandom = [this.currentIndex];
    const playLists = $$(".js-song-item");
    const nextsongList = $$(".nextsong-item");
    const imgs = $$(".js-song-item .song-item-left-img");
    const imgNextsongs = $$(".nextsong-item .nextsong-item-img");
    const songTyms = $$(".song-item-right-tym");
    const cdThumb = $(".music-control__left-img-box").animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 10000,
        iterations: Infinity,
        delay: 1000,
      }
    );
    cdThumb.pause();
    playLists.forEach((element, index) => {
      element.onclick = function (e) {
        if (e.target.closest(".song-item-left-img")) {
          if (_this.isPlay && _this.currentIndex === index) {
            _this.isPlay = !_this.isPlay;
            audio.pause();
          } else if (!_this.isPlay && _this.currentIndex === index) {
            _this.isPlay = !_this.isPlay;
            audio.play();
          } else if (_this.currentIndex !== index) {
            _this.currentIndex = Number(
              e.target.closest(".js-song-item").dataset.index
            );
            _this.loadCurrentSong();
            _this.isPlay = true;
            audio.play();
          }
          _this.setConfig("currentIndex", _this.currentIndex);
          playBtn.classList.toggle("play", _this.isPlay);
        }
      };
    });
    nextsongList.forEach((element, index) => {
      element.onclick = function (e) {
        if (e.target.closest(".nextsong-item-img")) {
          if (_this.isPlay && _this.currentIndex === index) {
            _this.isPlay = !_this.isPlay;
            audio.pause();
          } else if (!_this.isPlay && _this.currentIndex === index) {
            _this.isPlay = !_this.isPlay;
            audio.play();
          } else if (_this.currentIndex !== index) {
            _this.currentIndex = Number(
              e.target.closest(".nextsong-item").dataset.index
            );
            _this.loadCurrentSong();
            _this.isPlay = true;
            audio.play();
          }
          _this.setConfig("currentIndex", _this.currentIndex);
          playBtn.classList.toggle("play", _this.isPlay);
        }
      };
    });
    playBtn.onclick = function () {
      if (_this.isPlay) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    audio.ontimeupdate = function () {
      if (audio.duration) {
        let currentTime = Math.floor(
          (audio.currentTime * 100) / audio.duration
        );
        progress.value = currentTime;
        let minute = Math.floor(audio.currentTime / 60);
        let second = Math.floor(audio.currentTime % 60);
        if (second < 10) {
          second = "0" + second;
        }
        if (minute < 10) {
          minute = "0" + minute;
        }
        $(".music-control__progress-time-start").innerHTML =
          minute + ":" + second;
      }
    };
    progress.oninput = function () {
      let currentValue = progress.value;
      audio.currentTime = (currentValue * audio.duration) / 100;
    };
    prey.onclick = function () {
      if (_this.isRandom) {
        _this.makeSongRandom(arrRandom);
      } else {
        _this.preySong();
      }
      _this.isPlay = true;
      audio.play();
    };
    next.onclick = function () {
      if (_this.isRandom) {
        _this.makeSongRandom(arrRandom);
      } else {
        _this.nextSong();
      }
      _this.isPlay = true;
      audio.play();
    };

    $(".js-repeat-song").onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      this.classList.toggle("repeat--active", _this.isRepeat);
      _this.setConfig("isRepeat", _this.isRepeat);
    };
    $(".js-random-song").onclick = function () {
      _this.isRandom = !_this.isRandom;
      this.classList.toggle("random--active", _this.isRandom);
      _this.setConfig("isRandom", _this.isRandom);
    };
    audio.onplay = function () {
      _this.isPlay = true;
      cdThumb.play();
      _this.scrollIntoView();
      playBtn.classList.toggle("play", _this.isPlay);
      playLists.forEach((e) => {
        e.classList.remove("song-item--active");
      });
      nextsongList.forEach((e) => {
        e.classList.remove("nextsong-item--active");
      });
      imgs.forEach((e) => {
        e.classList.remove("song-item--active-onplay");
      });
      imgNextsongs.forEach((e) => {
        e.classList.remove("nextsong-item--active-onplay");
      });
      nextsongList[_this.currentIndex].classList.add("nextsong-item--active");
      playLists[_this.currentIndex].classList.add("song-item--active");

      imgNextsongs[_this.currentIndex].classList.add(
        "nextsong-item--active-onplay"
      );
      imgs[_this.currentIndex].classList.add("song-item--active-onplay");
      $(".music-control__left").style.transform = "translateX(20px)";
      playBtn.classList.toggle("play", _this.isPlay);
      if (
        nextsongList[_this.currentIndex].classList.contains(
          "nextsong-item-last"
        )
      ) {
        let nextsongPushFirstLists = $$(".nextsong-item-last");
        nextsongPushFirstLists.forEach((e) => {
          if (e.dataset.index <= _this.currentIndex) {
            e.classList.replace("nextsong-item-last", "nextsong-item-first");
            $(".nextsong__first").insertAdjacentElement("beforeend", e);
          }
        });
      } else if (
        nextsongList[_this.currentIndex].classList.contains(
          "nextsong-item-first"
        )
      ) {
        let nextsongPushLastLists = $$(".nextsong-item-first");
        for (let i = nextsongPushLastLists.length - 1; i > 0; i--) {
          if (i > _this.currentIndex) {
            nextsongPushLastLists[i].classList.replace(
              "nextsong-item-first",
              "nextsong-item-last"
            );
            $(".nextsong__last-list").insertAdjacentElement(
              "afterbegin",
              nextsongPushLastLists[i]
            );
          }
        }
      }
    };
    audio.onpause = function () {
      _this.isPlay = false;
      cdThumb.pause();
      $(".music-control__left").style.transform = "translateX(0px)";
      imgs[_this.currentIndex].classList.remove("song-item--active-onplay");
      imgNextsongs[_this.currentIndex].classList.remove(
        "nextsong-item--active-onplay"
      );
      playBtn.classList.toggle("play", _this.isPlay);
    };
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else if (_this.isRandom) {
        _this.makeSongRandom(arrRandom);
        audio.play();
      } else {
        _this.nextSong();
        audio.play();
      }
    };
    progress1.oninput = function () {
      let volume = this.value / 100;
      volume = volume.toFixed(1);
      if (volume == 0) _this.isMute = true;
      else _this.isMute = false;
      audio.volume = volume;
      songVolume.classList.toggle("mute", _this.isMute);
    };
    songVolume.onclick = function () {
      if (this.classList.contains("mute")) {
        audio.volume = 1;
        progress1.value = 100;
        this.classList.remove("mute");
      } else {
        audio.volume = 0;
        progress1.value = 0;
        this.classList.add("mute");
      }
    };
    songTyms.forEach((element) => {
      element.onclick = function (e) {
        e.target
          .closest(".song-item-right-tym")
          .classList.toggle("songs-item-right-tym-first--active");
      };
    });
    setting.onclick = function () {
      this.classList.toggle("header__setting--active");
    };
    //SEARCH
    $(".js-width-search-input").onfocus = function (e) {
      $(".js-width-search").style.borderRadius = "20px 20px 0 0";
      $(
        ".js-width-search"
      ).style.backgroundColor = `var(--search-color-${_this.backgroundIndex})`;
    };
    $(".js-width-search-input").onblur = function (e) {
      $(
        ".js-width-search"
      ).style.backgroundColor = `var(--blur-input-color-${_this.backgroundIndex})`;
      $(".js-width-search").style.borderRadius = "20px";
    };
    //MODAL
    $(".header__theme").onclick = function () {
      $(".theme-modal").classList.toggle("theme-modal--active");
    };
    $(".theme-modal__close-btn").onclick = function () {
      $(".theme-modal").classList.toggle("theme-modal--active");
    };
    $(".theme-modal__overlay").onclick = function () {
      $(".theme-modal").classList.toggle("theme-modal--active");
    };
    $(".main-container").onscroll = function (e) {
      if (e.target.scrollTop > 1) {
        $(
          ".header"
        ).style.backgroundColor = `var(--header-color-${_this.backgroundIndex})`;
        $(".header").style.boxShadow = "rgb(0 0 0 / 10%) 0px 3px 5px";
      } else {
        $(".header").style.backgroundColor = "transparent";
        $(".header").style.boxShadow = "none";
      }
    };
    $$(".sidebar__item").forEach((element, index) => {
      element.onclick = function (e) {
        $$(".sidebar__item").forEach((e) => {
          e.classList.remove("sidebar__item--active");
        });
        switch (e.target.textContent.trim()) {
          case "Khám Phá":
            $(".profile").classList.add("hide");
            $(".container-discover__slider").classList.remove("hide");
            $(".music__option").classList.add("hide");
            $(".option__song").classList.add("hide");
            e.target.classList.add("sidebar__item--active");
            $(".main-container-pertional").classList.remove("hide");
            $(".main-container-zingchart").classList.add("hide");

            break;
          case "Cá Nhân":
            $(".profile").classList.remove("hide");
            $(".container-discover__slider").classList.add("hide");
            $(".music__option").classList.remove("hide");
            $(".option__song").classList.remove("hide");
            e.target.classList.add("sidebar__item--active");
            $(".main-container-pertional").classList.remove("hide");
            $(".main-container-zingchart").classList.add("hide");

            break;
          case "#zingchart":
            $(".main-container-pertional").classList.add("hide");
            $(".main-container-zingchart").classList.remove("hide");
            e.target.classList.add("sidebar__item--active");

            break;
        }
      };
    });
    //XEM LIST TOP 100
    $(".js__zingchart__100more").onclick = function (e) {
      _this.renderZingchart(_this.songs.length);
      e.target.classList.add("hide");
    };
    $$(".music__option-item").forEach((element, index) => {
      element.onclick = function (e) {
        $$(".panel-item").forEach((item) => {
          if (e.target.textContent.trim() === "Tổng Quan") {
            $(
              ".music__option-item.music__option-item--active"
            ).style.backgroundColor = "transparent";
            $(
              ".music__option-item.music__option-item--active"
            ).classList.remove("music__option-item--active");
            item.style.marginBottom = item.classList.contains("option__artist")
              ? "120px"
              : "40px";

            item.classList.remove("hide");
            e.target.classList.add("music__option-item--active");
          } else if (e.target.textContent.trim() === "") {
          } else if (e.target.textContent.trim() === item.dataset.title) {
            $(
              ".music__option-item.music__option-item--active"
            ).style.backgroundColor = "transparent";
            $(
              ".music__option-item.music__option-item--active"
            ).classList.remove("music__option-item--active");
            item.classList.remove("hide");
            item.style.marginBottom = item.classList.contains(
              "option__playlist"
            )
              ? "40px"
              : "120px";
            e.target.classList.add("music__option-item--active");
          } else {
            item.classList.add("hide");
          }
        });
        $(
          ".music__option-item.music__option-item--active"
        ).style.backgroundColor = `var(--option-color-${_this.backgroundIndex})`;
      };
    });
  },
  start() {
    this.getConfig();
    this.addTheme();
    this.render();
    this.renderZingchart(10);
    this.renderNextsongHeading();
    this.renderNextsongLast();
    this.defineProperties();
    this.loadCurrentSong();
    this.handleEvents();
    this.scrollIntoView();
  },
};
app.start();
