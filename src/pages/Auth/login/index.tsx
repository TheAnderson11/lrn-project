import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import siteLogo from '../../../assets/logo.svg';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { LinkTo } from '../../../components/ui/LinkTo';
import Loader from '../../../components/ui/Loading';
import { useSendDataMutation } from '../../../store/api/loginApi';
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

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sendData, { isLoading }] = useSendDataMutation();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await sendData({ email, password }).unwrap();
      dispatch(setUser(result));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <Loader textValue="Loading..." textColor="red" />;

  return (
    <RootContainer onSubmit={handleForm}>
      <FormContainer>
        <ImgContainer>
          <LogoImg src={siteLogo} alt="siteLogo" />
          <Title>Authorization</Title>
        </ImgContainer>
        <LabelText htmlFor="email">E-mail</LabelText>
        <Input
          type="email"
          id="email"
          placeholder="Enter e-mail"
          onChange={v => setEmail(v.target.value)}
        />

        <LabelText htmlFor="password">Password</LabelText>
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={v => setPassword(v.target.value)}
        />
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
