import React from 'react';

const validateLenght = (props) => {
    const minLenght = 5
    const tooShortMessage = <p>Text is too short</p>
    const validLenghtMessage = <p>Text is long enough</p>
    
    let message = tooShortMessage
    if(props.textLength > minLenght) {
        message = validLenghtMessage
    }
    
    return(
        <div>
           {message}
        </div>
    )
}

export default validateLenght