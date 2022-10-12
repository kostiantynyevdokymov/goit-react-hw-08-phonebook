import React from 'react';
import { MainPage, Title } from './Main.styled';
import PropTypes from 'prop-types';

const Main = ({ title, children }) => (
  <>
    <MainPage>
      <Title>{title}</Title>
      {children}
    </MainPage>
  </>
);

export default Main;

Main.propTypes = {
  title: PropTypes.string.isRequired,
};
