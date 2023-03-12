import styled from "styled-components";

const Input = styled.input`
  width: 70%;
  height: 3rem;
  margin: 2rem 0 0 0;
  font-size: 1.4rem;
  padding: 0.5rem;
  border-radius: 0.7rem;
  border-style: none;
  text-align: center;
  &:focus {
    outline: none;
    color: black;
  }
  &::placeholder {
    color: black;
  }
`;

export default Input;
