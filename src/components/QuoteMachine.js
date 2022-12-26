import React from 'react'
import Button from './Button'
import COLORS_ARRAY from './ColorsArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


const QuoteMachine = (props) => (
    <>
        <p id="text">{props.selectedQuote.quote}</p>
        <p id="author"> - {props.selectedQuote.author}</p>
        <Button buttonDisplayName="Next Quote" clickHandler={props.clickHandler} accentColor={props.accentColor}/>
        <a id="tweet-quote" style={{backgroundColor: props.accentColor}}href={encodeURI( `http://www.twitter.com/intent/tweet?text="${props.selectedQuote.quote}" - ${props.selectedQuote.author}`)}><FontAwesomeIcon icon={faTwitter} /></a>
        
    </>    
        
);

export default QuoteMachine