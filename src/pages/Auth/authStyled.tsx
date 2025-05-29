import styled from 'styled-components';

export const RootContainer = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  height: 80px;
  gap: 8px;
`;

export const LogoImg = styled.img`
  max-width: 60px;
  height: auto;
  object-fit: contain;
`;

export const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  margin: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  min-width: 500px;
  min-height: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
`;

export const LabelText = styled.label`
  align-self: stretch;
  font-weight: 600;
  font-size: 14px;
  padding-left: 2px;
`;

export const SpanText = styled.span`
  font-weight: small;
  margin-top: auto;
  font-size: 14px;
  text-align: left;
`;
