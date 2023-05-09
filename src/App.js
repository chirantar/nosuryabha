import './App.css';
import {useTypingText} from "./useTypingText";

function App() {

    const { word } = useTypingText(['hiiii', 'hello', 'whatsup', 'how are you?'], 130, 20);

    return (
        <div className="App">
            <p>
                <h1 className="header1">No <strike className="strike">{word}</strike></h1>
                <h6 className="header6">No need to call me🤦‍♀, I am already taken️</h6>
            </p>
        </div>
    );
}

export default App;
