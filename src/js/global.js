let phone = "iphone_x";

function bt_exit() {
  close();
}

function bt_menu() {
  switch_left_menu();
}

function bt_select_device() {
  if (phone == "iphone_x") {
    phone = "samsung_note_7"
  } else {
    phone = "iphone_x"
  }
  set_phone(phone);
}

set_phone("samsung_note_7");
