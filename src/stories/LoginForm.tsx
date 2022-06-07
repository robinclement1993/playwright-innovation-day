import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [showSucces, setShowSuccess] = useState(false);  
  return (
    <div style={{
      border: '1px solid', 
      display: 'flex', 
      flexDirection: 'column', 
      width: '20%'
      }}>
      <input type='email' data-testid="email" />
      <input type='password' data-testid="password" />
      <button onClick={() => setShowSuccess(true)}>Login</button>
      {showSucces && 
        <span>Everything is perfect. Your account is ready and we should probably get you started!</span>
      }
    </div>
  )
};

export default LoginForm;