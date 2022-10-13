import styled from '@emotion/styled';

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-top: 100px;
  color: skyblue;
`;

export const DevelopedBy = styled.p`
  margin: 20px 0;
  font-size: 18px;
  text-align: center;
  color: black;
`;

export const LinkIconsList = styled.ul`
  margin-top: 50px;
  list-style: none;

  display: flex;
  justify-content: center;
  & li {
    font-size: 36px;

    &:not(:last-child) {
      margin-right: 50px;
    }
    & a {
      color: black;

      transition: color 250ms linear;

      &:hover,
      &:focus {
        color: skyblue;
      }
    }
  }
`;
