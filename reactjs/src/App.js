import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import logo from './logo.svg';
import './App.css';

const INITIAL_DATA = {name: "unknown", nationality: "unknown"};

const BASE_URI = 'http://localhost:9000/'

const App = () => {

    const [data, setData] = useState(INITIAL_DATA);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await Axios.get(BASE_URI);
            console.log(data);
            setData(data.data);
        } catch (e) {
            console.log("Blocked by cors");
            console.log(e);
        }
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {`Hi ${data.name} of ${data.nationality} origin`}
                </a>
            </header>
        </div>
    );
}

export default App;
