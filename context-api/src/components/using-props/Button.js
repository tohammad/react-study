import React from 'react';
const Button = ({count, onUpdate}) => {
    return (
        <button onClick= {() => onUpdate(count + 1)}>Update Count</button>
    )
}
export default Button;