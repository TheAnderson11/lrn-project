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

const RegisterPage = () => {
  return (
    <RootContainer>
      <FormContainer>
        <ImgContainer>
          <LogoImg src={siteLogo} alt="siteLogo" />
          <Title>Registration</Title>
        </ImgContainer>
        <LabelText htmlFor="firstName">First Name</LabelText>
        <Input type="text" id="firstName" />

        <LabelText htmlFor="userName">User Name</LabelText>
        <Input type="text" id="userName" />

        <LabelText htmlFor="email">E-mail</LabelText>
        <Input type="email" id="email" />

        <LabelText htmlFor="password">Password</LabelText>
        <Input type="password" id="password" />

        <LabelText htmlFor="reapetPassword">Reapet Password</LabelText>
        <Input type="reapetPassword" id="reapetPassword" />
        <Button width="80%" type="submit">
          submit
        </Button>
        <SpanText>
          if you have account <LinkTo to="/login">Authorization</LinkTo>
        </SpanText>
      </FormContainer>
    </RootContainer>
  );
};

export default RegisterPage;
