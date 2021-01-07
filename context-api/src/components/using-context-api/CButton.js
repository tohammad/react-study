import React, {useContext} from 'react';
import Context from './Context';
const Button = () => {
    const {updateState } = useContext(Context);
    return (
        <button onClick= {updateState}>Update Count</button>
    )
}
export default Button;