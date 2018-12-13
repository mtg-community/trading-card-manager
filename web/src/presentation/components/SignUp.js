import React from 'react';

export const SignUpComponent = ({handleEmail,handlePassword,handleSubmit,password,email}) => {
    return (
        <form  onSubmit={(event) => handleSubmit(event)}>
            <input type="email" placeholder="email" value={email} onChange={(event) => handleEmail(event.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={ event => handlePassword(event.target.value) } />
            <button type="submit">Submit</button>
        </form>
    );
}