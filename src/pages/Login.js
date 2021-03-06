import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Input } from 'reactstrap';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

const LoginStyled = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 15%;
      
      @media (max-width: 800px) {
      
         form {
           height: 250px;
           width: 300px;
           margin-top: 20%;
         }

      }
`;

const FormStyled = styled.form`
      display: flex;
      background: rgb(63,94,251);
      background: radial-gradient(circle, 
        rgba(63,94,251,1) 0%, 
        rgba(252,70,107,1) 100%);
      height: 300px;
      width: 500px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 5%;

      h1 {
        margin-bottom: 20px;
      }

      Input {
        width: 300px;
      }

      Button {
        margin-top: 20px;
        width: 300px;
      }

      @media (max-width: 1000px) {
        input {
          width: 200px;
        }

        button {
          width: 200px;
        }
`;

export default function Login({ history }) {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const minLength = 3;

  const handleInputName = ({ target }) => {
    setUserName(target.value);
  };

  useEffect(() => () => {
    setIsLoading(false);
  }, []);

  return (
    <LoginStyled data-testid="page-login">
      {isLoading
        ? <Loading />
        : (
          <FormStyled
            onSubmit={ async (e) => {
              e.preventDefault();
              setIsLoading(true);
              await createUser({ name: userName });
              setIsLoading(false);
              history.push('/search');
            } }
          >
            <h1>TRYBETUNES</h1>
            <Input
              type="text"
              data-testid="login-name-input"
              onChange={ handleInputName }
              value={ userName }
              placeholder="nome"
              maxLength="15"
            />
            <Button
              disabled={ userName.length < minLength }
              type="submit"
              data-testid="login-submit-button"
              color="primary"
            >
              Entrar
            </Button>
          </FormStyled>
        )}
    </LoginStyled>

  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
