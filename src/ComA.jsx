import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';

const ComA = () => {
    const [num, setNum] = useState(1);
    const [name, setName] = useState('');
    const [moves, setMoves] = useState('');
    const [moveList, setMoveList] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                setName(response.data.name);
                setMoves(response.data.moves.length);
                setMoveList(response.data.moves.map(move => move.move.name));
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [num]); //num as a dependency to run the useeffect when num changes

    return (
        <>
        <h1>Select the Number : </h1>
        <select value={num} onChange={(e)=>{setNum(e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>

            <h1>You Choose <span style={{ color: 'red' }}>{num}</span>  value</h1>
            <h1>My name is <span style={{ color: 'red' }}>{name}</span>  </h1>
            <h1>I have <span style={{ color: 'red' }}>{moves}</span>  moves</h1>
            <h1>Moves :
                <ul>
                    {moveList.map((move, index) => (

                        <span style={{ color: 'red' }}><li key={index}>{move}</li></span>
                    ))}
                </ul>
            </h1>

            
        </>
    )
}
export default ComA;