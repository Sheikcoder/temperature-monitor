import React , {useState} from 'react';
import ReactDOM from 'react';
import "./App.css"

const App = () => {
    const [value , setValue] = useState(10)
    const [tempColor , setTempColor] = useState("cold")

    const increase = () =>{
        if(value === 30) return;
        const newtemp = value +1;
        if(newtemp >= 15){
           setTempColor("hot"); 
        }
        setValue (newtemp);
    }

    const decrease = () =>{
        if(value === 0) return;
        let newTemp = value -1;
        if(newTemp < 15){
            setTempColor("cold");
        }
        setValue (newTemp);
    }

    return (
        <div className="app-container">
            <div className="temperature-display-container">
                <div className={`temperature-display ${tempColor}`}>{value}°C</div>
            </div>
            <div className="button-container">
                <button onClick={() => increase()}>+</button>
                <button onClick={() => decrease()}>-</button>
            </div>

        </div>
    )
}

export default App;
