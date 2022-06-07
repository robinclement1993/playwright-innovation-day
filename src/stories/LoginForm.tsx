import React, { useState } from 'react';
import { Input, Button, Alert } from 'antd';
import "antd/dist/antd.css";

const LoginForm: React.FC = () => {
  const [showSucces, setShowSuccess] = useState(false);  
  return (
    <>
      <div style={{
        border: '1px solid', 
        display: 'flex', 
        flexDirection: 'column', 
        width: '20%',
        padding: '4px',
        marginBottom: '20px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '4px' }}>
            <span>Email</span>
            <Input type='email' data-testid="email" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
            <span>Password</span>
            <Input type='password' data-testid="password" />
          </div>
        <Button type='primary' onClick={() => setShowSuccess(true)}>Login</Button>
      </div>

      {showSucces && 
        <Alert style={{ width: '20%' }} showIcon type='success' message="Login successful!" />
      }
    </>
  )
};

export default LoginForm;