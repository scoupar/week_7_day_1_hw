import React from 'react';

const Film = ({name, children}) => {
    return (
        <div className ="film">
            <li>
                <a href= {children}>{name}</a>
            </li>

        </div>
    )
}



export default Film;