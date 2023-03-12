import styled from "styled-components";

const Button = styled.button`
  margin: 2rem;
  font-size: 1rem;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 0.7rem;
  border-style: none;
  background: #0d7ffbba;
  color: white;
  transition: background 0.7s ease-in-out;
  &:hover {
    background: #1580ff;
  }
  &:focus,
  &:placeholder {
    border-style: none;
    outline: none;
  }
`;

export default Button;
