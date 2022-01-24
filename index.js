const input=document.getElementsByClassName('oper') 

const sumbtn=document.getElementById('sum')
sumbtn.addEventListener('click',function(){
    input[1].value='+'
})


let next=document.getElementById('next')
next.addEventListener('click',nexti)
function nexti(){
    console.log('kkoos')
    input[0].focus()
}

function insert(num){
    //
    let focusedInput = document.getElementById('input');
    let focusedInput2 = document.getElementById('input2');

   

if(focusedInput){
    focusedInput.value+=num
    
}else{
focusedInput2.value+=num
}
}


function inputReceiver(){
  
console.log(input)



 console.log('clicked',input)
    const ans=document.getElementById('ans')
    
    ans.value=add(parseInt( input[0].value),parseInt( input[2].value),input[1].value)
    console.log(input[1].value)
}


function add(a,b,sign){
    let  sum
    console.log(sign)
    switch (sign) {
        case '+':
            sum=a+b
            break;
            case '*':
                sum=a*b
                break;
                case '/':
                sum=a/b
                break;

                case '-':
                sum=a-b
                break;
    
        default: alert('Please check your input',sum='Invalid')
            break;
    }
    console.log(sign)

    return sum;

}

function deletion(){
  //  consider for loop 
input[0].value=''
input[1].value=''
input[2].value=''
}
document.getElementById('calc').addEventListener('click',inputReceiver)
