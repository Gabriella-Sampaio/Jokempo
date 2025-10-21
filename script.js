const choices = ['pedra', 'papel', 'tesoura'];
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        console.log("eu", playerChoice);
        let winner;
        let art;

        // const winner = determineWinner(playerChoice, computerChoice);
        // updateScores(winner);
        // showResult(playerChoice, computerChoice, winner);
        document.getElementById("escolhaJogador").innerHTML = "Jogador - " + playerChoice;
        document.getElementById("escolhaComputador").innerHTML = "Computador - " + computerChoice;


        if(playerChoice === computerChoice){
            winner = "Empate"
            art = "🤝"
        }

        else if((playerChoice == "tesoura" && computerChoice == "papel") || 
            (playerChoice == "papel" && computerChoice == "pedra") ||
            (playerChoice == "pedra" && computerChoice == "tesoura")){
            winner = "Jogador Vence"  
            art = "🎈🎉🥳 ( ˶ˆᗜˆ˵ ) 🥳🎉🎈"
        }

        else{
            winner = "Computador vence"
            art = "(╥﹏╥)🥀"
        }

        document.getElementById("resultado").innerHTML = "Resultado - " + winner;
        document.getElementById("art").innerHTML = art;

    });
});



function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log("computador", choices[randomIndex]);
    return choices[randomIndex];
}



