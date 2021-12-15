import Input from './Components/Input';
import Output from './Components/Output';
import {useState} from 'react';
function App() {

  const [output, setOutput] = useState("");


  const sendText = async (text) =>{
    await fetch('https://google-translate-app-1221.herokuapp.com/',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ text: `${text}` })
    });
    const translation = await getTranslation();
    setOutput(translation);
  };

  const getTranslation = async () =>{
    const res = await fetch('https://google-translate-app-1221.herokuapp.com/');
    const data = await res.json()
    return data.text;
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
