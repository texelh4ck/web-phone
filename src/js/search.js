function switch_search_bar() {
    if (document.getElementById("search-bar").attributes.length == 3 ) {
        document.getElementById("search-bar").removeAttribute("hidden")
    } else {
        document.getElementById("search-bar").setAttribute("hidden", null)
    }
}

function set_url() {
    let url = document.getElementsByName("go_url")[0].value;
    if (!url.includes("http") && !url.includes("file:///")) {
      url = "http://" + url;
    }
    document.getElementById("frame-view").src = url;
    switch_search_bar();
}

// Event Key Enter
let url = document.getElementsByName("go_url")[0].addEventListener("keypress", e => {
    if (e.code === "Enter") {
        set_url()
    }
})