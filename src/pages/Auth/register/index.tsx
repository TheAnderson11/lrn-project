import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import siteLogo from '../../../assets/logo.svg';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { LinkTo } from '../../../components/ui/LinkTo';
import { useRegDataMutation } from '../../../store/api/registerApi';
import { setUser } from '../../../store/slices/userSlice';
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
  const [regData, { isLoading }] = useRegDataMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  /* const [reapetPassword, setReapetPassword] = useState<string>(); */

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await regData({ firstName, userName, email, password });
      dispatch(setUser(result.data));
      console.log(result.data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <RootContainer onSubmit={handleForm}>
      <FormContainer>
        <ImgContainer>
          <LogoImg src={siteLogo} alt="siteLogo" />
          <Title>Registration</Title>
        </ImgContainer>
        <LabelText htmlFor="firstName">First Name</LabelText>
        <Input
          type="text"
          id="firstName"
          placeholder="Enter first name"
          onChange={e => setFirstName(e.target.value)}
        />

        <LabelText htmlFor="userName">User Name</LabelText>
        <Input
          type="text"
          id="userName"
          placeholder="Enter user name"
          onChange={e => setUserName(e.target.value)}
        />

        <LabelText htmlFor="email">E-mail</LabelText>
        <Input
          type="email"
          id="email"
          placeholder="Enter e-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <LabelText htmlFor="password">Password</LabelText>
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={e => setPassword(e.target.value)}
        />

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
