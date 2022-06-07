import React from 'react';

const LoginForm: React.FC = () => (
  <div style={{
    border: '1px solid', 
    display: 'flex', 
    flexDirection: 'column', 
    width: '20%'
    }}>
    <input type='email' data-testid="email" />
    <input type='password' data-testid="password" />
  </div>
);

export default LoginForm;