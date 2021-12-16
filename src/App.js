import Input from './Components/Input';
import Output from './Components/Output';
import {useState} from 'react';
function App() {

  const [output, setOutput] = useState("");

  const sendText = async (text) =>{
    const res = await fetch('https://google-translate-app-1221.herokuapp.com/',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ text: `${text}` })
    });

    const data = await res.json();
    const translation = await data.text
    await setOutput(translation);
  };

  return (
    <div className='container'>
      <h1>Google Translate API Demo</h1>
      <Input sendText={sendText}/>
      <Output outputText={output}/>
    </div>
  );
}

export default App;
