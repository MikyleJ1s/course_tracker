import React from 'react';

const formValidation = (data) => {
    const {email, password} = data;
    if (email === null || email === ""){  
        alert("Email can't be blank"); 
        return false;
    } else if(password.length < 6){
        alert("Password must be at least 6 characters long.");
        return false;
    }
    return true;
}

export default formValidation;