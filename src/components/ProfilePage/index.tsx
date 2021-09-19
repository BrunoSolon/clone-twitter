import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1> Bruno Solon</h1>
        <h2> bruno_solon </h2>

        <p>
          Developer @ <a href="https://google.com">Google</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo
          </li>
          <li>
            <CakeIcon />
            Nascido em 10 dezembro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>32 </strong>
          </span>
          <span>
            <strong>4332 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
