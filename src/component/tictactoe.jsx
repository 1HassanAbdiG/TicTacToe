import React, { useState } from 'react';
import './tic.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Tictactoe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [player1, setPlayer1] = useState("X");
    const [player2, setPlayer2] = useState("O");

   
    

    function handleClick(i) {
        const newSquares = squares.slice();
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';

        // Update scores if a player has won
        const winner = calculateWinner(newSquares);
        if (winner) {
            const newScores = scores.map((score) => {
                if (score.player === winner) {
                    return { ...score, score: score.score + 1 };
                }
                return score;
            });
            setScores(newScores);
        }

        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    function renderSquare(i) {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }

    function resetBoard() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else if (squares.every((square) => square !== null)) {
        status = 'Draw! The game is a tie!';
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [afficheNomPrenom, setAfficheNomPrenom] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayer1(nom);
        setPlayer2(prenom);
        console.log("JJJJJ",player1)
        console.log("JJ{{",{player1})
        
        
       

        setAfficheNomPrenom(true);

    };
    console.log("JJ{{",{afficheNomPrenom})
    const [scores, setScores] = useState([
        { player: player1, score: 0 },
        { player: player2, score: 0 },
        
    ]);
    
   
    return (
        <div>
            
                <h1 className="text-center">Tic Tac Toe</h1><br></br>
                <div className='conteneurticta'>
                <form onSubmit={handleSubmit}>
                    <label>
                        player1 :
                        <input
                            type="text"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        player2 :
                        <input
                            type="text"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Afficher</button>
                </form>
                {afficheNomPrenom && (
                    <div>
                        <p> X : {nom}</p>
                        <p> O : {prenom}</p>
                    </div>
                )}
            </div>

            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button className="reset-button" onClick={resetBoard}>Reset</button>
            <div className="scores">
                <h2>Scores</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Player1</th>
                            <th>score X </th>
                            <th>score O </th>
                            <th>Player1</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                    <td>{player1}</td>
                    
                        {scores.map((score, index) => (
                            
                        
                                <td key={index}>{score.score}</td>
                            
                        ))}
                        <td>{player2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tictactoe;
