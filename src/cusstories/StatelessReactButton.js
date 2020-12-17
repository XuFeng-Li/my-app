import React from 'react';

export const StatelessReactButton = ({...props}) => {
    return (
        <button
            {...props}
            onClick={()=>{
                alert('123');
            }}
        >
            react stateless button
        </button>
    );
};
