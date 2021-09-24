let pause=document.getElementById('pause')
let modalBox=document.querySelector(".game-over")
 let modalBoxContent=document.querySelector(".game-over-content")
function pauseGame(){
    modalBox.style.display="flex"
    clearInterval(clearTime)   
    
   document.querySelector(".game-over-menu").innerHTML=`<h1>Pause Menu</h1>
   <button  type="button"  class="btn btn-outline-warning" onclick="resetGame()">Retry</button>
   <button  type="button"  class="btn btn-outline-danger" onclick="exitGame()">exit</button>
   <button type="button" id="close" class="btn btn-danger" onclick="closeMenu()">Close</button>
   `

   startTimer()
    
}
function loseGame(){
    modalBox.style.display="flex"
    clearInterval(clearTime)   
    // alert('game finished')
    console.log('game finished');
   document.querySelector(".game-over-menu").innerHTML=`<h1>You Lose</h1>
   <button  type="button"  class="btn btn-outline-warning" onclick="resetGame()">Retry</button>
   <button  type="button"  class="btn btn-outline-danger" onclick="exitGame()">exit</button>`
}
function closeMenu(){
    modalBox.style.display="none"
    modalBoxContent.innerHTML=``
    startTimer()
}
function gameWinner(){
    modalBox.style.display="flex"
    document.querySelector(".game-over-menu").innerHTML=`
                <h1>YOU Have WON Game</h1>
                <div ><span>Moves</span> : <span>${count}</span></div>
   <button type="button" class="btn btn-outline-primary" onclick="resetGame()"> Retry</button>
   <button type="button" onclick='exitGame()' class="btn btn-outline-danger" onclick="">exit</button>
   `
    clearInterval(clearTime)   
}

function resetGame(){
    clearInterval(clearTime)   
    count=0;
    timer=0;
    
    document.getElementById('moves').textContent=count
    showTime.textContent=timer
    memoryCard.forEach(obj=>{
        obj.classList.remove('flip')
    })

    whoWon.name=''
    whoWon.count=0
    
    modalBox.style.display="none"
    startTimer()
}
function exitGame(){
 
    document.querySelector(".main-menu").style.display="flex"
    document.querySelector(".memory-game").style.display="none"
    document.querySelector(".main-game").style.display="none"
    resetGame()
}