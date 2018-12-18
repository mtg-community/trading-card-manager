import React from 'react'

export const PrivateComponent = ({user}) =>{
    return (
        <h1>{`Only accessible to ${user}`}</h1>
    );
}
