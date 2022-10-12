import styled from '@emotion/styled';

const Form = styled.form`
  padding: 15px 10px;
  width: 210px;
  height: 190px;
  border: none;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  & input {
    width: 200px;
  }
`;

export default Form;
