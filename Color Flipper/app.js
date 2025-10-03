const colors = ["green","red","rgba(133,122,200)","#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color")
//. dot is necessary because it tells js that you are selection css class.
//it select class 
//if we use (color) then it tries to access color element

btn.addEventListener('click',function(){
    //get random Number 0-3 colors[1]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
    //get the or change the text inside an html element.
    
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

