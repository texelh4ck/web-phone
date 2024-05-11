const {ipcRenderer} = require("electron")
require("process")

const default_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) web_phone/1.0.0 Chrome/124.0.6367.91 Electron/30.0.2 Safari/537.36"

const phones = {
  devices: [
    "samsung_s4",
    "samsung_s7",
    "samsung_note_7",
    "samsung_galaxy_note_8",
    "iphone_7_jet_black",
    "iphone_6",
    "iphone_x",
    "iphone_14",
  ],
  iphone_x: {
    name: "IPhone X",
    image: "phones/iphone_x.png",
    radius: 20,
    w: 240,
    h: 480,
    ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1",
  },
  iphone_14: {
    name: "IPhone 14",
    image: "phones/iphone_14.png",
    radius: 30,
    w: 240,
    h: 520,
    ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/20A380 [FBAN/FBIOS;FBDV/iPhone15,2;FBMD/iPhone;FBSN/iOS;FBSV/16.0.2;FBSS/3;FBID/phone;FBLC/ar_AR;FBOP/5]",
  },
  samsung_note_7: {
    name: "Samsung Note 7",
    image: "phones/samsung_note_7.png",
    radius: 0,
    w: 250,
    h: 450,
    ua: "Mozilla/5.0 (Linux; Android 6.0.1; SM-N9300 Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Mobile Safari/",
  },
  iphone_7_jet_black: {
    name: "Iphone 7 Jet Black",
    image: "phones/iphone_7_jet_black.png",
    radius: 0,
    w: 230,
    h: 410,
    ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1",
  },
  samsung_galaxy_note_8: {
    name: "Samsung Note 8",
    image: "phones/samsung_galaxy_note_8.png",
    radius: 0,
    w: 240,
    h: 490,
    ua: "Mozilla/5.0 (Linux; Android 7.1.1; SM-N950X Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 (Mobile; afma-sdk-a-v202006999.201604000.1)",
  },
  samsung_s7: {
    name: "Samsung Galaxy S7",
    image: "phones/samsung_s7.png",
    radius: 0,
    w: 250,
    h: 440,
    ua: "Mozilla/5.0 (Linux; Android 7.0; SM-G930F Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.91 Mobile Safari/537.36 SamsungBrowser/CrossApp/0.1.136",
  },
  iphone_6: {
    name: "IPhone 6",
    image: "phones/iphone_6.png",
    radius: 0,
    w: 230,
    h: 410,
    ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25",
  },
  samsung_s4: {
    name: "Samsung Galaxy S4",
    image: "phones/samsung_s4.png",
    radius: 0,
    w: 255,
    h: 440,
    ua: "Mozilla/5.0 (Linux; Android 4.3; SCH-R970U Build/JLS36G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Mobile Safari/537.36",
  },
};

function set_phone(model) {
    document.getElementById("phone-img").style.backgroundImage = `url("${phones[model].image}")`;
    document.getElementById("frame-view").style.width = `${phones[model].w}px`;
    document.getElementById("frame-view").style.height = `${phones[model].h}px`;
    document.getElementById("frame-view").style.borderRadius = `${phones[model].radius}px`;
    ipcRenderer.send("userAgent", phones[phone].ua)
}

function switch_device_selector() {
  if (document.getElementById("device-selector").attributes.length == 3) {
    document.getElementById("device-selector").removeAttribute("hidden");
  } else {
    document.getElementById("device-selector").setAttribute("hidden", null);
  }
}

function select_device() {
  const d = document.getElementsByName("device")[0].selectedOptions[0].title;
  set_phone(d);
  switch_device_selector()
}