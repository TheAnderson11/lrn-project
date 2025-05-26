import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.inputBackground};
  outline: none;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  &:focus {
    border-color: #4c82f7;
    box-shadow: 0 0 0 4px rgba(76, 130, 247, 0.2);
  }
`;

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => <StyledInput ref={ref} {...props} />,
);

export default Input;
