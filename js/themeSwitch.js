const styles = document.getElementsByClassName("Theme")
const slider = document.getElementsByClassName("Slider")[0];
document.getElementsByClassName("Slider")[0].addEventListener(
    "scroll",() => logSlider());

const sliderWidth = document.getElementsByClassName("Slider")[0].children[0].scrollWidth
const max = sliderWidth - sliderWidth/4;
const piece = max/3;

const secondPiece = piece*2.5

function select(theme){
    styles[theme].setAttribute("rel", "stylesheet")
    let theeem = [0,1,2];
    theeem.splice(theme,1)
    styles[theeem[0]].setAttribute("rel", "stylesheet alternate")
    styles[theeem[1]].setAttribute("rel", "stylesheet alternate")
}
function logSlider(){
    const sliderPos = slider.scrollLeft;

    if (sliderPos >= 0 && sliderPos < piece) select(0);
    else if (sliderPos > piece && sliderPos < secondPiece) select(1);
    else  select(2);
}
