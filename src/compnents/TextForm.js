import React, {useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("enter the text here1234");
    // text = "new text" // wrong way to change the state
    // setText = "new text" // right way to change the state
    const handleUpClick= () =>{
        // console.log("upperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
  }
    const handleloClick= () =>{
        // console.log("upperCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText)
  }
  const handleOnChange= (event) =>{
    // console.log("On change")
    setText(event.target.value)
  }
  
    return (
    <>
 <div className="container">
<div className="mb-3 my-3">
    <h1>{props.heading}</h1>    
<textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>convert to lowercase</button>
    </div>
    <div className="container my-3">
        <h1> Your Text Summary </h1>
        <p> {text.split(' ').length} words and {text.length} chracters</p>
        <h2>Preview</h2>
        <p>{0.008 * text.split(' ').length } minutes required to read this</p>
        <p> {text}</p>
    </div>
    </>
  )
}
