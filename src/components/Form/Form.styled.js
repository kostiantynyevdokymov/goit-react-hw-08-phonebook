import styled from '@emotion/styled';

const Form = styled.form`
  padding: 15px 10px;
  width: 300px;
  height: 190px;
  border: 3px solid skyblue;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  & input {
    border: 2px solid skyblue;
    width: 200px;
    & :hover,
    & :focus {
      border-color: #477587;
    }
  }
`;

export default Form;
