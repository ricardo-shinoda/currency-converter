import React, { useEffect, useState } from 'react';
// import context from '../context/Context';
import style from '../style/Component.module.css';
function Api() {
    const [ currency, setCurrency ] = useState(['USD']);
    const [ value, setValue ] = useState([]);
    const [ rate, setRate ] = useState([]);
    const [ expense, setExpense ] = useState([]);
    const [ currencies, setCurrencies ] = useState([]);


    useEffect(() => {
        const data = async () => {
            const url = await fetch('https://economia.awesomeapi.com.br/json/all');
            const urlJson = await url.json();
            const urlArr = Object.keys(urlJson).filter((value) => value !== 'USDT');
            setCurrencies(urlArr);
            
        };
        data();
    }, []);

    useEffect(() => {
        const rate = async () => {
            const url = await fetch('https://economia.awesomeapi.com.br/json/all');
            const urlJson = await url.json();
            const urlRate = Number(urlJson[currency].ask);
            setRate(urlRate)
            // console.log(urlJson);
        };
        rate();
    });

    const handleExpense = (e) => {
        // e.preventDefault();
        const valor = Number(value) * (rate);
        const arr = (valor).toFixed(2);
        setExpense(`R$ ${arr}`);
    }

    const handleReset = (e) => {
        e.preventDefault();
        Array.from(document.querySelectorAll('input')).forEach(input => (input.value = ''));
    }

    const handleCurChange = ({ target }) => { setCurrency(target.value) }

// console.log(expense);
// console.log(currency);
// console.log(rate);
// console.log(value);
// console.log(expense);
    return (
        <div className={style.component}>
            <form>
                <label>
                    <input
                        className="input"
                        type="number"
                        name="value"
                        id="value"
                        placeholder="value"
                        onChange={(e) => setValue(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    <select
                        type="select"  
                        placeholder="moeda 1"
                        onChange={handleCurChange} 
                    >
                        {currencies.map((cur) => <option key={cur}>{cur}</option>)}
                    </select>
                </label>
                <button
                    type="button"
                    onClick={e => { handleReset(e); handleExpense() } }
                >
                    Convert
                </button>
                <p className="result">{expense}</p>
            </form>
        </div>

    )
}

export default Api;