import styled from 'styled-components';

interface ButtonProprs {
  width?: string;
}

const Button = styled.button<ButtonProprs>`
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #4c82f7, #3a63d9);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: auto;
  box-shadow: 0 6px 12px rgba(76, 130, 247, 0.4);
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.2s ease;
  user-select: none;
  width: ${({ width }) => width || 'auto'};

  &:hover {
    border-color: #4c82f7;
    box-shadow: 0 0 0 4px rgba(76, 130, 247, 0.2);
  }
`;

export default Button;
