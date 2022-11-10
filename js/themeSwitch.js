const styles = document.getElementsByClassName("Theme")
const slider = document.getElementsByClassName("Slider")[0];


function select(theme){
    for (let i = 0; i < 3; i++)
        styles[i].setAttribute("rel",i === theme ? "stylesheet": "stylesheet alternate")
}

function logSlider(){
    const max = 226;
    const piece = max/3;
    const sliderPos = slider.scrollLeft;

    if (sliderPos > 0 && sliderPos < piece) select(0);
    if (sliderPos > piece && sliderPos < piece*2) select(1);
    if (sliderPos > piece*2 && sliderPos < max) select(2);
}
