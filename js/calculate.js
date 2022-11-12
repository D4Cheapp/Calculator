const container = document.getElementsByClassName("Calculator_Display_Input")[0];

let stack = "";
let memory = "";

let counted = false;

function stackAdd(number){
    if (counted) {
        counted = false
        stack = ""
    }
    if (stack.length < 16){
        stack += number+""
        draw()
    }

}

function action(sign){
    if (stack !== ""){
        if (!["+","-","*","/","."].includes(memory[memory.length-1])){
            memory += stack + sign
            stack = ""
        }
    }

}

function equals(){
    memory += stack;
    if (memory !== "" ){
        let count = eval(memory)
        if ((count+"").length > 16){
            draw("This result is too big");
            stack = "";
            memory = "";
            counted = true;
        }
        else {
            draw(count)
            stack = count;
            memory = "";
            counted = true;
        }
    }
}
function addDot(){
    if (stack === "") {
        stack += "0.0"
        draw()
    }
    if (!(stack+"").includes(".")){
        stack += "."
        draw()
        if (counted) counted = false
    }

}
function addNull(){
    if (stack.length < 16){
        draw()
        if (stack === "") stack = "0.0";
        else stack += 0;
        draw()
    }
}

function del(){
    if (stack.length>0){
        stack = stack.slice(0,-1);
        draw(stack)
    }
    if (stack === "") draw("0")
}

function rest(){
    stack = "";
    memory = "";
    draw("0");
}
function draw(numbers){
    if (numbers === undefined)
        container.innerHTML = stack;
    else
        container.innerHTML = numbers
}