
const memoryCard=document.querySelectorAll(".memory-card")
const secondarPic=document.querySelectorAll(".memory-card .back-face")
let whoWon={name:'',element:null}
let selectedCards=0
let showTime=document.getElementById("time")
let timer=0
let hours,minutes,seconds
let clearTime
let count=0
let moves=0

let cardPhoto=['images/angular.png',"images/js.png","images/node.png",
"images/react.png","images/java.jpg","images/spring.png"]

function letPlay(){
  document.querySelector(".main-menu").style.display="none"
    document.querySelector(".memory-game").style.display="flex"
    document.querySelector(".main-game").style.display="flex"
   startTimer()
}

let won=false
function reshuffleCards(){
    
    let arr=[0,1,2,3,4,5,6,7,8,9,10,11]
    let array=shuffleCards(arr)
    let num=-1
    for(let i=0;i<array.length;i++){
        if(i%2==0){
            num++
        }
        let index=array[i]
        secondarPic[index].alt=cardPhoto[num]
        secondarPic[index].src=cardPhoto[num]
        secondarPic[index].id=num
    }
}
function shuffleCards(array){
    var i = array.length,j = 0,temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
reshuffleCards()
    for(let i=0;i<memoryCard.length;i++){
        memoryCard[i].addEventListener("click",playCards)
    }


function playCards(){

    let memoryClass=this.childNodes[3].alt
    if(this.classList[1]!="flip"){
        console.log('flipped');
        this.classList.add('flip')  
        
        if(selectedCards==0 && whoWon.name==''){
                selectedCards++
                whoWon.name=memoryClass
                whoWon.element=this
        }
        else{
            count++
            if(whoWon.name==memoryClass){
                
                whoWon.element.style.backgroundColor='blue'
                this.style.backgroundColor='blue'
                moves++
                console.log('moves',moves);
                if(moves==6){
                    gameWinner()
                }
               
            }else{
                let firstElement=whoWon.element
                firstElement.classList.add('selected')
                this.classList.add('selected')
                setTimeout(()=>{
                    firstElement.classList.remove('selected','flip')
                    this.classList.remove('selected','flip')
                },500)
               
            }
            selectedCards=0
            whoWon.name=''
            whoWon.element=null
            document.getElementById('moves').textContent=count
        }
    }    
}
    function startTimer(){
    clearTime= setInterval(function(){
        timer++
        seconds = timer % 60;
        hours= Math.floor(timer/3600)
        minutes = Math.floor((timer-(hours*3600))/60);  
        seconds=seconds/10>=1?seconds:'0'+seconds
        minutes=minutes/10>=1?minutes:'0'+minutes
        hours=hours/10>=1?hours:'0'+hours
        showTime.textContent=`${hours}:${minutes}:${seconds}`
    },500)
}
