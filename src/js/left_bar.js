function switch_left_menu() {
  if (document.getElementById("left-bar").attributes.length == 3) {
    document.getElementById("left-bar").removeAttribute("hidden");
    document.getElementById("bt_menu").className = "diamont-fill";
  } else {
    document.getElementById("left-bar").setAttribute("hidden", null);
    document.getElementById("bt_menu").className = "diamont";
  }
}

function bt_search() {
  switch_search_bar();
}