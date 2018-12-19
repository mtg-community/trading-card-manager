import React from 'react'

export const Private = ({user}) =>{
    return (
        <h1>{`Only accessible to ${user}`}</h1>
    );
};


