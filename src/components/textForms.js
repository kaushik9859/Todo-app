import React, { useState } from 'react';

export default function TextForms(prop) {
    const [text, setText] = useState('Enter the text:');

    const handleOnClick = () => {
        console.log("button was clicked");
        const newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div
            className='container my-3'
            style={{
                backgroundColor: prop.mode === 'light' ? 'white' : 'black',  // Corrected color logic
                color: prop.mode === 'light' ? 'black' : 'white'
            }}
        >
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Textarea</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: prop.mode === 'light' ? 'white' : 'grey',  // Updated background color logic
                        color: prop.mode === 'light' ? 'black' : 'white'
                    }}
                ></textarea>
                <button type="button" className="btn btn-primary mx-2 my-4" onClick={handleOnClick}>
                    To upperCase
                </button>
            </div>
        </div>
    );
}
