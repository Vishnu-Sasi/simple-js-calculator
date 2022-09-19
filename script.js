let buttonClick = (val)=>{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
    
}

let clearScreen = ()=> {
    document.getElementById("screen").value="";

}
let resultClick= ()=>{
    let text = document.getElementById("screen").value;
    let result= eval(text);
    document.getElementById("screen").value=result;
}