import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import imgDefault from '../images/img.png';
import Footer from '../components/Footer';

const ProfilePage = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
`;

const ProfileDiv = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 100px;;
      width: 800px;
      text-align: center;
      word-wrap: break-word;

      label {
        font-size: 25px;
        color: #7B68EE;
      }

      p {
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: justify;
        max-width: 600px;
      }

      img {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        margin-bottom: 30px;
        border: 3px solid  #7B68EE;
      }

      Button {
        width: 150px;
        border: none;
        background-color: #7B68EE;
        margin-top: 50px;
        margin-bottom: 20px;;
      }

      Button:hover {
        border: none;
        background-color: #4B0082;
      }

      .exitButton {
          width: 150px;
          margin-top: 15px;
          margin-bottom: 80px;
        }

      @media (max-width: 1000px) {
        margin-top: 50px;
        p {
        font-size: 25px;
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: justify;
        max-width: 290px;
        word-wrap: break-word
        }

        img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        margin-bottom: 30px;
        border: 3px solid  #7B68EE;
        }

        Button {
        border: none;
        background-color: #7B68EE;
        margin-top: 30px;
        margin-bottom: 0px;
        }

      }

`;

export default function Profile({ history }) {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    const response = await getUser();
    setUser(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <ProfilePage data-testid="page-profile">
      {
        isLoading
          ? <Loading />
          : (
            <ProfileDiv>
              <img
                src={
                  user.image === ''
                    ? imgDefault
                    : user.image
                }
                alt="user"
                data-testid="profile-image"
              />
              <label htmlFor="userName">
                Nome:
                <p id="userName">
                  {user.name}
                </p>
              </label>
              <label htmlFor="userEmail">
                E-mail:
                <p id="userEmail">
                  {user.email}
                </p>
              </label>
              <label htmlFor="userDescription">
                Descri????o:
                <p id="userDescription">
                  {user.description}
                </p>
              </label>
              <Button
                onClick={ () => { history.push('/profile/edit'); } }
              >
                Editar perfil
              </Button>
              <Button
                className="exitButton"
                onClick={ () => { history.push('/'); } }
              >
                Sair
              </Button>
            </ProfileDiv>
          )
      }
      <Footer />
    </ProfilePage>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
