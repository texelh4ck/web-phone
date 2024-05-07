const phones = {
    "iphone_x": {
        name: "IPhone X",
        image: "phones/iphone_x.png",
        radius: 20,
        w: 240, h: 520
    },
    "samsung_note_7": {
        name: "Samsung Note 7",
        image: "phones/samsung_note_7.png",
        radius: 0,
        w: 250, h: 450
    }
}

function set_phone(model) {
    document.getElementById("phone-img").style.backgroundImage = `url("${phones[model].image}")`;
    document.getElementById("frame-view").style.width = `${phones[model].w}px`;
    document.getElementById("frame-view").style.height = `${phones[model].h}px`;
    document.getElementById("frame-view").style.borderRadius = `${phones[model].radius}px`;
}