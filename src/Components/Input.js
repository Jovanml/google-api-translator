import { React, useState } from 'react'

const Input = ({ sendText }) => {
    const [text, setText] = useState("");

    return (
        <>
            <button 
            className='translate-btn'
            onClick={() => sendText(text)}>Translate</button>
            <textarea name="text" wrap="soft" 
            className='input-container' 
            onChange={text => setText(text.target.value)}
            placeholder='Enter a phrase to be translated'
            ></textarea>
            
        </>
            
    )
}

export default Input
