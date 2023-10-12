import React, { useState } from 'react'

export default function Test() {
    const initial = {
        player1: "",
        player2: ""
    }

    const deleter = (items) => {
        console.log(items);
        setdata(data.filter((item) => item !== items))
    }

    const replacer = (index, newPlayerData) => {
        setdata((prevData) => {
            const newData = [...prevData];
            newData[index] = newPlayerData;
            return newData;
        });
    };

    const [tab1, settab] = useState(initial);
    const [tab5, settab5] = useState(initial);
    const [data, setdata] = useState([]);


    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(tab1);
                    setdata([...data, tab1])



                    settab({
                        player1: "",
                        player2: ""
                    })
                }}

            >
                <label>PLAYER1:
                    <input
                        type='text'
                        id='pLayer1'
                        name='plAyer1'
                        value={tab1.player1}
                        onChange={(e) => settab({ ...tab1, player1: e.target.value })} />
                </label>
                <br />
                <label>PLAYER2:
                    <input
                        type="text"
                        id="pLayer2"
                        name="player2"
                        value={tab1.player2}
                        onChange={(e) => settab({ ...tab1, player2: e.target.value })} />
                </label>
                <button type='submit'>SUBMIT</button></form>
            <table border="1">
                <th>Player1</th><th>Player2</th>
                {data.map((item, index) => (
                    <tr key={index}><h1 onClick={() => deleter(item)}>X</h1>
                        <td>{item.player1}</td>
                        <td>{item.player2}</td>


                        <label>PLAYER1:
                    <input
                        type='text'
                        id='pLayer1'
                        name='plAyer1'
                        value={tab5.player1}
                        onChange={(e) => settab5({ ...tab5, player1: e.target.value })} />
                </label>
                <br />
                <label>PLAYER2:
                    <input
                        type="text"
                        id="pLayer2"
                        name="player2"
                        value={tab5.player2}
                        onChange={(e) => settab5({ ...tab5, player2: e.target.value })} />
                </label>
                        





                        <button onClick={() => replacer(index, tab5)}>
                            Replace</button>

                    </tr>))}

            </table>
        </div>
    )
}


