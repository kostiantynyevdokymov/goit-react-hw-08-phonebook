import styled from '@emotion/styled';

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;

  & span {
    margin-right: 5px;

    font-weight: 500;
  }

  & button {
    background-color: transparent;
    /* border: 1px solid black; */
    border-radius: 2px;

    transition: color 250ms linear;

    &:hover,
    &:focus {
      color: white;
      background-color: skyblue;
    }
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;
