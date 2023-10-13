import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=("");
        setText(newText);
        props.showAlert("Text Clear","success");
    }
    // const handleBoldClick=()=>{
    //    //console.log("Uppercase was clicked" + text);
    //     let newText=text.bold
    //     setText(newText);
    // }
    const speak=()=>{
        let msg= new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }
    
    const handleUpChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#212529'}}>
        <h1 style={{fontSize: '60px'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor: props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'white':'#212529'}}id="myBox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} style={{fontSize: '30px'}}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} style={{fontSize: '30px'}}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} style={{fontSize: '30px'}}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={speak} style={{fontSize: '30px'}}>Text Speech</button>
            {/*<button className="btn btn-primary mx-2" onClick={handleBoldClick}>Bold text</button>*/}
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#212529'}}>
            <h1 style={{fontSize: '40px'}}>Your text summary</h1>
            <p style={{fontSize: '30px'}}>{text.split(" ").length} words and {text.length} characters</p>
            <p style={{fontSize: '30px'}}>{0.008 * text.split(" ").length} Minutes read</p>
            <h3 style={{fontSize: '40px'}}>Preview</h3>
            <p style={{fontSize: '30px'}}>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  ) 
}
