let slide = 1;

setInterval(() => {

    document.querySelector('#btn' + slide).checked = true;
    slide++;

    if (slide > 6) {
        slide = 1;
    }

}, 4000);