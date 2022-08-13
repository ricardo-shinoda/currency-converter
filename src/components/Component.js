import React, { useEffect, useState } from 'react';
// import context from '../context/Context';
import style from '../style/Component.module.css';
function Api() {
    const [ currency, setCurrency ] = useState(['BRL']);
    const [ value, setValue ] = useState([]);


    useEffect(() => {
        const data = async () => {
            const url = await fetch('https://economia.awesomeapi.com.br/json/all');
            const urlJson = await url.json();
            const urlArr = Object.keys(urlJson).filter((value) => value !== 'USDT');
            setCurrency(urlArr);
            
        };
        data();
    }, []);

    // const handleValue = ({ target }) => { setValue(target.value) }
    // console.log(value);

    return (
        <div className={style.component}>
            <form>
                <label>
                    <input
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
                    >
                        {currency.map((cur) => <option key={cur}>{cur}</option>)}
                    </select>
                </label>
                <button
                    type="button"
                    // onClick={handleValue}
                    >
                    Convert
                </button>
                  {/* <label>
                    <select
                    type="select"
                    >
                        {secCurrency}
                    </select>
                </label> */}
                <p>{value} paragrafo</p>
            </form>
        </div>

    )
}

export default Api;