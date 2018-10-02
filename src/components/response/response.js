import React from 'react';

const Response = (props) => {
    return (
        <div className='respnseAnswer'>
        <h1> The answer is { props.response} </h1>
        </div>
    )
}
export default Response