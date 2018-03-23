import React from 'react'

const displayChar = (props) => {
    const style = {
        display: 'inline-block', 
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
      }

    return(
        <p style={style} onClick={props.clicked}>{props.char}</p>
    )
}

export default displayChar