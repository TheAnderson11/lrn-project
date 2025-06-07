import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  textValue: string;
  textColor: string;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PulsingText = styled.span<{ textColor?: string }>`
  font-size: 1.5rem;
  color: ${({ textColor }) => textColor || '#555'};
  animation: ${pulse} 1.5s infinite;
`;

const SpinnerIcon = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
  font-size: 2rem;
  color: red;
`;

const Loader = ({ textValue, textColor }: LoaderProps) => {
  return (
    <LoaderContainer>
      <SpinnerTextWrapper>
        <PulsingText textColor={textColor}>{textValue}</PulsingText>
        <SpinnerIcon />
      </SpinnerTextWrapper>
    </LoaderContainer>
  );
};

export default Loader;
