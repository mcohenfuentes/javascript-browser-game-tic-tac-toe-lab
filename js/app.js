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

/*---------------------------- Variables (state) ----------------------------*/

let board = ['X', 'O', 'X','O','X','O','X','O',''];
let turn = 'X';
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.querySelector('#message')





/*-------------------------------- Functions --------------------------------*/
 
function init() {
render()
};

function render () {
   
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

updateBoard()

function updateMessage() {
    if (winner === 'false' && tie === 'false')
        render('turn message')
    else if (winner === 'false' && tie === 'true')
            render(`${Tie}`)
    else {
        render(`${Congrats}`)
    }
    }


/*----------------------------- Event Listeners -----------------------------*/



init()