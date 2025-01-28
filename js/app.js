//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/

const choices = ['X', 'O', ' '];

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [2, 4, 6],
  ]
  

/*---------------------------- Variables (state) ----------------------------*/

let board = ['', '', '','','','','','',''];
let turn = 'X';
let winner = true;
let tie = true;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.querySelector('#message')





/*-------------------------------- Functions --------------------------------*/
 
function init() {
render()
};

function render () {
    updateBoard()
    updateMessage()
};

function updateBoard() {
    board.forEach((square, index) => { 
    squareEls[index]
    console.log(squareEls[index])
    console.log(square)
    if (square === 'X') {
        squareEls[index].innerText = 'X'
    } else if (square === 'O') {
        squareEls[index].innerText = 'O'
    }
})
}



function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.innerText = 'Its xs turn'
    } else if (winner === false && tie === true) {
        messageEl.innerText = 'The game is tied'
    } else {
        messageEl.innerText = 'YOU WIN'
    }
}

    function handleClick(event) {
        console.log('it works')
        
        const squareIndex = event.target.id;
        console.log(squareIndex)
        placePiece(squareIndex);
        if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
            return
        }
        if (winner === true) {
            return
        }
        
        }
        function placePiece (index) {
            board[index] = turn
            console.log(board)
        }
    
        function checkForwinner () {
            if(
                board[0] !== "" && board[0] === board[1] && board[0] === board[2]
                board[3] !== "" && board[3] === board[4] && board[3] === board[5]
                board[6] !== "" && board[6] === board[7] && board[6] === board[8]
                board[0] !== "" && board[0] === board[3] && board[0] === board[6]
                board[1] !== "" && board[1] === board[4] && board[1] === board[7]
                board[2] !== "" && board[2] === board[5] && board[2] === board[6]
                board[0] !== "" && board[0] === board[4] && board[0] === board[8]
                board[2] !== "" && board[2] === board[4] && board[2] === board[6] 
            ) {
                winner = true;
            }
        };
    
    /*----------------------------- Event Listeners -----------------------------*/
   
    squareEls.forEach(square => {
        square.addEventListener('click', handleClick);
    });

init()