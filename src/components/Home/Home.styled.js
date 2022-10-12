import styled from '@emotion/styled';

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-top: 100px;
  color: black;
`;

export const DevelopedBy = styled.p`
  margin: 5px 0;
  font-size: 28px;
  text-align: center;
  color: black;
`;

export const LinkIconsList = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  & li {
    font-size: 36px;

    &:not(:last-child) {
      margin-right: 10px;
    }
    & a {
      color: black;

      transition: color 250ms linear;

      &:hover,
      &:focus {
        color: orangered;
      }
    }
  }
`;
