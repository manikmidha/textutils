import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text``);
        props.showAlert("Copied to Clipboard", "success");
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
    //    console.log("Uppercase was clicked" + text);
    //     let newText=text.handleBoldClick;
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
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor: props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'white':'#212529'}}id="myBox" rows="8"></textarea>
        </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} style={{fontSize: '20px'}}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} style={{fontSize: '20px'}}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} style={{fontSize: '20px'}}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={speak} style={{fontSize: '20px'}}>Text Speech</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} style={{fontSize: '20px'}}>Copy text</button>
            {/*<button className="btn btn-primary mx-2" onClick={handleBoldClick}>Bold text</button>*/}
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#212529'}}>
            <h2 style={{fontSize: '30px'}}>Your text summary</h2>
            <p style={{fontSize: '20px'}}>{text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p style={{fontSize: '20px'}}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2 style={{fontSize: '30px'}}>Preview</h2>
            <p style={{fontSize: '20px'}}>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  ) 
}
