import siteLogo from '../../../assets/logo.svg';
import {
  FormContainer,
  ImgContainer,
  LabelText,
  LogoImg,
  RootContainer,
  SpanText,
  Title,
} from '../../../styles/authStyles';
import Button from '../../../styles/Button';
import Input from '../../../styles/Input';
import { LinkTo } from '../../../styles/LinkTo';

const LoginPage = () => {
  return (
    <RootContainer>
      <FormContainer>
        <ImgContainer>
          <LogoImg src={siteLogo} alt="siteLogo" />
          <Title>Authorization</Title>
        </ImgContainer>
        <LabelText htmlFor="email">E-mail</LabelText>
        <Input type="email" id="email" />

        <LabelText htmlFor="password">Password</LabelText>
        <Input type="password" id="password" />
        <Button width="80%" type="submit">
          submit
        </Button>
        <SpanText>
          if you don't have account <LinkTo to="/register">Registration</LinkTo>
        </SpanText>
      </FormContainer>
    </RootContainer>
  );
};

export default LoginPage;
