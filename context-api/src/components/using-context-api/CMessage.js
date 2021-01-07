import React, {useContext} from 'react';
import Context from './Context';
const CMessage = () => {
    const { count } = useContext(Context);
    return (
        <div> 
            <h2> 
                {count}
            </h2> 
        </div>
    )
}

export default CMessage;