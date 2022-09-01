let squares= document.querySelectorAll(".square");
let title= document.querySelector(".game h2");

// squares.forEach((square)=>{

//     square.

//  }
  
// })


function finish(num1,num2,num3){


    title.innerHTML =`${squares[num1].innerHTML} Winner`;
    squares[num1].style.background="black";
    squares[num2].style.background="black";
    squares[num3].style.background="black";
    

    setInterval(function(){
     title.innerHTML +="."
    },1000)

    setTimeout(function(){location.reload()},3000)
 }



function game (){
    
    // looping through elements

for(let i = 0 ;i<squares.length;i++){
    squares[i].addEventListener("click", function(){

        if(title.innerHTML === "X"){
            squares[i].innerHTML = "X";
             title.innerHTML="O";
            
        }else{
            squares[i].innerHTML = "O";
             title.innerHTML="X";

     } 
    
     
    
if(squares[0].innerHTML === squares[1].innerHTML && squares[1].innerHTML === squares[2].innerHTML && squares[0].innerHTML !== ""){

finish(0,1,2)

}
else if(squares[3].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[5].innerHTML && squares[3].innerHTML !== ""){

    finish(3,4,5)
    
    }
else if(squares[6].innerHTML === squares[7].innerHTML && squares[7].innerHTML === squares[8].innerHTML && squares[6].innerHTML !== ""){

finish(6,7,8)

}
else if(squares[0].innerHTML === squares[3].innerHTML && squares[3].innerHTML === squares[6].innerHTML && squares[0].innerHTML !== ""){

finish(0,3,6)

}

else if(squares[1].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[7].innerHTML && squares[1].innerHTML !== ""){

    finish(1,4,7)
    
    }

else if(squares[2].innerHTML === squares[5].innerHTML && squares[5].innerHTML === squares[8].innerHTML && squares[2].innerHTML !== ""){

    finish(2,5,8)
    
    }

else if(squares[0].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[8].innerHTML && squares[0].innerHTML !== ""){

finish(0,4,8)

} 
else if(squares[2].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[6].innerHTML && squares[2].innerHTML !== ""){

    finish(2,4,6)
    
    } 


})
}


}



game()
