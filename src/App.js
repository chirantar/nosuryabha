import logo from './logo.svg';
import './App.css';
import {useTypingText} from "./useTypingText";

function App() {

    const { word } = useTypingText(['Hi', 'Hello', 'whatsup'], 130, 20);

    return (
        <div className="App">
            <p>
                <h1>No {word}</h1>
            </p>
        </div>
    );
}

export default App;
