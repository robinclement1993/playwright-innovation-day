import React, { useState } from 'react';
import { Input, Button, Alert, Form } from 'antd';
import "antd/dist/antd.css";

interface LoginFormProps {
  disablePassword: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ disablePassword }) => {
  const [showSucces, setShowSuccess] = useState(false); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    if (email === "" || password === "") {
      return;
    }

    setShowSuccess(true);
  };

  return (
    <>
      <form 
        style={{
          border: '1px solid', 
          display: 'flex', 
          flexDirection: 'column', 
          width: '20%',
          padding: '4px',
          marginBottom: '20px',
          }}
        onSubmit={handleFormSubmit}
        >
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '4px' }}>
            <span>Email</span>
            <Input onChange={(e) => setEmail(e.target.value)} type='email' name='email' data-testid="email" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
            <span>Password</span>
            <Input disabled={disablePassword} type='password' onChange={(e) => setPassword(e.target.value)} name='password' data-testid="password" />
          </div>
        <Button htmlType='submit' type='primary'>Login</Button>
      </form>

      {showSucces && 
        <Alert style={{ width: '20%' }} showIcon type='success' message="Login successful!" />
      }
    </>
  )
};

export default LoginForm;