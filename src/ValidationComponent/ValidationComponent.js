import React from 'react'

const validateLenght = (props) => {
    const minLenght = 5
    const tooShortMessage = "Text is too short"
    const validLenghtMessage = "Text is long enough"

    return(
      props.textLength < minLenght ?    
        <div>
            <p>{tooShortMessage}</p>
        </div>  :
        <div>
            <p>{validLenghtMessage}</p>
        </div>
    )
}

export default validateLenght