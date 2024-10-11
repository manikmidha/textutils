import React from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })
    let myStyle={
        color: props.mode ==='dark'?'white':'#212529',
        backgroundColor: props.mode ==='dark'?'#212529':'white',
        border: '2px solid',
        borderColor: props.mode ==='dark'?'white':'#212529' 
    }


    
return (
    <div className='container'>
        <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#212529'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2  className="accordion-header">
        <div className="accordion-button collapsed fs-3 " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Analyze Your text
        </div>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
        <div className="accordion-body fs-4" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently.Be it word count, character count or 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <div className="accordion-button collapsed fs-3" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free to use
        </div>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <button className="accordion-body fs-4" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils report the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        </button>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed fs-3" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Browser Compatible
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body fs-4" style={myStyle}>
            This word counter software works in any web browsers such as Chrome,Firefox,Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
        </div>
        </div>
    </div>
    </div>
    
        </div>
    )
}
