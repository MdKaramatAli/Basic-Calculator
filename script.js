const mode = document.querySelector("#mode");
let check = 0;
mode.addEventListener("click",function()
{
    if(check == 0) // night
    {
        document.body.style.color = "#fff";
        document.querySelector("#mode_text").innerHTML = "Switch to Light";
        document.querySelector(".calculator").style.backgroundColor = "#000";
        document.querySelector(".calculator_screen").style.borderBottom = "1px solid #fff";
        check = 1;
    }
    else{ // day
        document.body.style.color = "#000";
        document.querySelector("#mode_text").innerHTML = "Switch to Dark";
        document.querySelector(".calculator").style.backgroundColor = "#fff";
        document.querySelector(".calculator_screen").style.borderBottom = "1px solid #000";
        check = 0;
    }
})

const button = document.querySelector(".buttons");
const result = document.querySelector("#result");
const number = document.querySelector("#number");
const operator = document.querySelector("#operator");
let string = "";
button.addEventListener("click", function(e)
{
    // console.log(e.target.id);// this is the main things
    
    if(number.id === e.target.id || operator.id === e.target.id )
    {
        string += e.target.innerHTML;
        result.innerHTML = string;
    }
    else if(e.target.innerHTML == '=')
    {
        let ans = eval(string);
        result.innerHTML = ans;
        string = ans;

    }
    else if(e.target.innerHTML == '%')
    {
        let ans = eval(string / 100);
        result.innerHTML = ans;
        string = ans;
    }
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", function()
{
    string ='';
    result.innerHTML = string;
})

