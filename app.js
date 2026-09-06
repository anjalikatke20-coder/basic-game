let userscore = 0;        //count of the users win//
let compscore = 0;         // comp wining count //


const choices = document.querySelectorAll(".choice");   //access the choices //
let para = document.querySelectorAll("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

// for comp's choice //
const compchoice = () => {                         
    const options = ["rock","paper","scissor"]        //option to give comp//
    const randIdx = Math.floor(Math.random() * 3);          // math function we used for comp's choice random option//
    return options[randIdx];
}

const drawgame = () => {
    console.log("it's Draw");
    msg.innerText = "it's Draw"
    msg.style.backgroundColor = "gray"
};


//  gameplay print the both chices //

const gameplay = (userchoice) => {
    console.log("user's choice is selected",userchoice);      

    // computers choice //
    const gencomp = compchoice();
    console.log("comp's choice is selected ", gencomp);


 /*const drawgame = () => {
    console.log("it's Draw ");
  }*/

  const showwinner = (userwin) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log( "you win!");
         msg.innerText = `you win! your ${userchoice} beats ${gencomp}`;
         msg.style.backgroundColor = "brown"
    }else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log(" you are lose game ");
         msg.innerText = `you lose game pls try again!  ${gencomp} beats u ${userchoice}`;
         msg.style.backgroundColor = "purple"
    }
  };


 if (userchoice === gencomp) {
      drawgame();
    } else {
      let userwin = true;
      if (userchoice === "rock") {
        // paper,scissor
        userwin = gencomp === "paper" ? false : true;
      } else if (userchoice === "paper") {
        //rock scissor
        userwin = gencomp === "scissor" ? false : true;
      } else {
        //rock, paper
        userwin = gencomp === "rock" ? false : true;
      }

       showwinner(userwin);
    } 

};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        gameplay(userchoice);
    });
});






