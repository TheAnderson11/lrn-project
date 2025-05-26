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

const RegisterPage = () => {
  return (
    <RootContainer>
      <FormContainer>
        <ImgContainer>
          <LogoImg src={siteLogo} alt="siteLogo" />
          <Title>Registration</Title>
        </ImgContainer>
        <LabelText htmlFor="firstName">First Name</LabelText>
        <Input type="text" id="firstName" placeholder="Enter first name" />

        <LabelText htmlFor="userName">User Name</LabelText>
        <Input type="text" id="userName" placeholder="Enter user name" />

        <LabelText htmlFor="email">E-mail</LabelText>
        <Input type="email" id="email" placeholder="Enter e-mail" />

        <LabelText htmlFor="password">Password</LabelText>
        <Input type="password" id="password" placeholder="Enter password" />

        <LabelText htmlFor="reapetPassword">Reapet Password</LabelText>
        <Input type="reapetPassword" id="reapetPassword" placeholder="Enter reapet password" />
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
