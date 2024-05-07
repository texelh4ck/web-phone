let phone = "iphone_x";

function bt_exit() {
  close();
}

function bt_menu() {
  switch_left_menu();
}

// Init
// Load all phone models
phones.devices.forEach(e => {
  document.getElementsByName("device")[0].innerHTML += 
  `<option title="${e}" name="${e}" ${ e == phone ? "selected":"" }>${phones[e].name}</option>`
});
// Set model phone
set_phone(phone);

// Keys
window.addEventListener("keydown", e => {
  if (e.code === "KeyS" && e.ctrlKey) {
    switch_search_bar()
  } else if (e.code == "KeyD" && e.ctrlKey) {
    switch_device_selector()
  }
})