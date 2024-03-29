import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

class Square extends React.Component{
    render(){
        return(
            <button className ="square">
                {this.props.value}

            </button>
        );
    }
}

class Board extends React.Component{
    renderSquare(i){
        return <Square value ={i} />;
    }

//test
//tkjkjsfkjg

render()
{
    const status = 'Next player: X';


return(
    <div>
    <div className ="status">{status}</div>
    <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}

    </div>
<div className="board-row">
    {this.renderSquare(3)}
    {this.renderSquare(4)}
    {this.renderSquare(5)}
</div>

<div className="board-row">
    {this.renderSquare(6)}
    {this.renderSquare(7)}
    {this.renderSquare(8)}
</div>

</div>

);
}
}
//game component
class Game extends React.Component {
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

//==============

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

