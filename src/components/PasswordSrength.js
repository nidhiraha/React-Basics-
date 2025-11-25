import React, { useState } from 'react';
// import './styles.css';

export const hasNumber = (passowrd) => {
  let arr = [...passowrd];
  for (let i of arr) {
    if (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57) {
      return true;
    } else {
      return false;
    }

  }
}
export const hasCAlphabet = (passowrd) => {
  let arr = [...passowrd];
  for (let i of arr) {
    if (i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) {
      return true;
    } else {
      return false;
    }

  }
}

export const hasSAlphabet = (passowrd) => {
  let arr = [...passowrd];
  for (let i of arr) {
    if (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) {
      return true;
    } else {
      return false;
    }

  }
}

export const haspecialCharacter = (passowrd) => {
  let arr = [...passowrd];
  for (let i of arr) {
    if ((i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) || (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) || (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57)) {
      return false;
    } else {
      return true;
    }

  }
}



// ✅ Export this so it can be tested 
export const checkPasswordStrength = (password) => {
  if (password == '' || undefined || null) return "Weak Password";
  let count = 0;
  if (password.length >= 8) {
    count++;
  }
  if (hasNumber(password)) {
    count++;
  }
  if (hasCAlphabet(password)) {
    count++;
  }
  if (hasSAlphabet(password)) {
    count++;
  }
  if (haspecialCharacter(password)) {
    count++;
  }
  if (count == 0) {
    return 'Level 1';
  }
  if (count == 2 || count == 3) {
    return 'Level 2';
  }
  if (count == 4 || count == 5) {
    return 'Level 3';
  }
};

const PasswordStrength = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input type="text" placeholder="Enter Password" onChange={(e) => {
        setInput(e.target.value);

      }} />
      <button onClick={() => {
        setOutput(checkPasswordStrength(input));
      }}>Check Strength</button>
      {output && <p>Strength: {output}</p>}
    </div>
  );
};

export default PasswordStrength;