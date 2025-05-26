import siteLogo from '../../../assets/logo.svg';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { LinkTo } from '../../../components/ui/LinkTo';
import {
  FormContainer,
  ImgContainer,
  LabelText,
  LogoImg,
  RootContainer,
  SpanText,
  Title,
} from '../authStyled';

const LoginPage = () => {
  return (
    <RootContainer>
      <FormContainer>
        <ImgContainer>
          <LogoImg src={siteLogo} alt="siteLogo" />
          <Title>Authorization</Title>
        </ImgContainer>
        <LabelText htmlFor="email">E-mail</LabelText>
        <Input type="email" id="email" placeholder="Enter e-mail" />

        <LabelText htmlFor="password">Password</LabelText>
        <Input type="password" id="password" placeholder="Enter password" />
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
