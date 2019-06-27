import React from 'react';

const ContentCard = (props:any) => {
    return <div>
        <h1>Content Card</h1>
        {props.children}
    </div>
};

export {ContentCard}