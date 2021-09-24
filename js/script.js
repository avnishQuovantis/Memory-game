
let whoWon={name:'',count:0}
let timer=0
let hours,minutes,seconds
let clearTime
let count=0

const memoryCard=document.querySelectorAll(".memory-card")
const secondarPic=document.querySelectorAll(".memory-card .back-face")

let showTime=document.getElementById("time")

let cardPhoto=['images/angular.png',"images/js.png","images/node.png",
"images/react.png",'images/java.jpg']

function letPlay(){
  document.querySelector(".main-menu").style.display="none"
    document.querySelector(".memory-game").style.display="flex"
    document.querySelector(".main-game").style.display="flex"
   startTimer()
}

let won=false
function Game(){
    for(let i=0;i<secondarPic.length;i++){
        let length=cardPhoto.length-1
        let random=Math.floor(Math.random()*length)
        secondarPic[i].alt=cardPhoto[random]
        secondarPic[i].src=cardPhoto[random]
    }
    for(let i=0;i<memoryCard.length;i++){
        memoryCard[i].addEventListener("click",playCards)
    }
}
Game()
    

function playCards(){
    let memoryClass=this.childNodes[3].alt
    
    if(this.classList[1]!="flip"){
        count++
        document.getElementById('moves').textContent=count
            
                
            
            this.classList.add('flip')
            
            if(memoryClass.includes('js')){
                if(whoWon.name==''||whoWon.name!='js'){
                    whoWon.name='js'
                    whoWon.count=1
                }else {
                    whoWon.count++
                    if(whoWon.count==3){
                        console.log('js winner');
                        gameWinner()
                    }
                }
                
            }else if(memoryClass.includes('angular')){
                
                if(whoWon.name=='' || whoWon.name!='angular'){
                    whoWon.name='angular'
                    whoWon.count=1
                }else {
                    whoWon.count++
                    if(whoWon.count==3){
                        console.log('angular winner');
                        gameWinner()
                    }
                }
                
            }
            else if(memoryClass.includes("node")){
                if(whoWon.name=='' || whoWon.name!='node'){
                    whoWon.name='node'
                    whoWon.count=1
                }else {
                    whoWon.count++
                    if(whoWon.count==3){
                        console.log('node winner');
                        gameWinner()
                    }
                }
                
            }
            else if(memoryClass.includes("react")){
                if(whoWon.name=='' || whoWon.name!='react'){
                    whoWon.name='react'
                    whoWon.count=1
                }else {
                    whoWon.count++
                    if(whoWon.count==3){
                        console.log('react winner');
                        gameWinner()
                    }
                }
                
            }
            else if(memoryClass.includes("spring")){
                if(whoWon.name=='' || whoWon.name!='spring'){
                    whoWon.name='spring'
                    whoWon.count=1
                }else {
                    whoWon.count++
                    if(whoWon.count==3){
                        console.log('spring winner');
                        gameWinner()
                    }
                }
            }
                
            }
            else if(memoryClass.includes("java")){
                if(whoWon.name=='' || whoWon.name!='java'){
                    whoWon.name='java'
                    whoWon.count=1
                }else {
                    whoWon.count++
                    if(whoWon.count==3){
                        console.log('java winner');
                        gameWinner()
                    }
                }
            }if(count==12 && whoWon.count!=3){ 
                loseGame()
                }
            
    }
    function startTimer(){
    clearTime= setInterval(function(){
        timer++
        seconds = timer % 60;
        hours= Math.floor(timer/3600)
        minutes = Math.floor((timer-(hours*3600))/60);  
        showTime.textContent=`${hours}:${minutes}:${seconds}`
    },100)
}





