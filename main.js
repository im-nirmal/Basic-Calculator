
//display content
// passing arguments for the button since the button holds the value
const displayContent = (content)=>{
    // to get value , to join the second number using +=
    result.value += content
}


//to clearspace
const clearScreen = ()=>{
    result.value=""
}


//equals, no need of argument because it is evaluating text box content
const finalOutput = ()=>{
    try{result.value =  eval(result.value)}
    catch{
        result.value="ERROR"
    }
}

//backspace
const backspace = () =>{
    result.value = result.value.slice(0,-1)
}