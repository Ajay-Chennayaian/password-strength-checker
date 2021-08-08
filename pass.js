const indicator=document.querySelector(` .indicator`);
const text=document.querySelector(`.text`);
const input=document.querySelector(` input`);
const shwbtn=document.querySelector('.shwbtn');
//console.log(input);
let regExpWeak=/[a-z]/;
let regExpMedium=/\d+/;
let regExpStrong=/.[!,@,#,$,%,^,*,(,)]/;
var no; 
console.log(input);
function trigger(){
    if(input.value!=""){
    if(input.value.length <=3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) ||input.value.match(regExpStrong)))no=1;
    if(input.value.length <=6 && (input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||(input.value.match(regExpWeak) && input.value.match(regExpStrong)))no=2;
    if(input.value.length >=6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
    if(no==1){
        text.style.display="block";
        text.textContent="your password is weak";
        text.style.color="red";
    }
    if(no==2){
        text.style.display="block";
        text.textContent="your password is medium";
        text.style.color="orange";
    }
    if(no==3){
        text.style.display="block";
        text.textContent="your password is strong";
        text.style.color="Green";
    }
    shwbtn.style.display="block";
    shwbtn.onclick = function(){
        if(input.type="password"){
        input.type="text";
        shwbtn.textContent="HIDE";
        }else{
            input.type="password";
            shwbtn.textContent="SHOW";
        }
    }
    

}else{
    text.style.display="none";
    shwbtn.style.display="none";
  }
  
}