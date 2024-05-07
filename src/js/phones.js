const phones = {
  devices: [
    "samsung_s4",
    "samsung_s7",
    "samsung_note_7",
    "samsung_galaxy_note_8",
    "iphone_7_jet_black",
    "iphone_6",
    "iphone_x",
  ],
  iphone_x: {
    name: "IPhone X",
    image: "phones/iphone_x.png",
    radius: 20,
    w: 240,
    h: 480,
  },
  samsung_note_7: {
    name: "Samsung Note 7",
    image: "phones/samsung_note_7.png",
    radius: 0,
    w: 250,
    h: 450,
  },
  iphone_7_jet_black: {
    name: "Iphone 7 Jet Black",
    image: "phones/iphone_7_jet_black.png",
    radius: 0,
    w: 230,
    h: 410,
  },
  samsung_galaxy_note_8: {
    name: "Samsung Note 8",
    image: "phones/samsung_galaxy_note_8.png",
    radius: 0,
    w: 240,
    h: 490,
  },
  samsung_s7: {
    name: "Samsung Galaxy S7",
    image: "phones/samsung_s7.png",
    radius: 0,
    w: 250,
    h: 440,
  },
  iphone_6: {
    name: "IPhone 6",
    image: "phones/iphone_6.png",
    radius: 0,
    w: 230,
    h: 410,
  },
  samsung_galaxy_note_8: {
    name: "Samsung Note 8",
    image: "phones/samsung_galaxy_note_8.png",
    radius: 0,
    w: 240,
    h: 490,
  },
  samsung_s4: {
    name: "Samsung Galaxy S4",
    image: "phones/samsung_s4.png",
    radius: 0,
    w: 255,
    h: 440,
  },
};

function set_phone(model) {
    document.getElementById("phone-img").style.backgroundImage = `url("${phones[model].image}")`;
    document.getElementById("frame-view").style.width = `${phones[model].w}px`;
    document.getElementById("frame-view").style.height = `${phones[model].h}px`;
    document.getElementById("frame-view").style.borderRadius = `${phones[model].radius}px`;
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