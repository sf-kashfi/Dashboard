/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

type FormData = {
    username: string;
    password: string;
};

const Container = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  background: white;
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.1);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #0077ff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #005fcc;
  }
`;

const SignInForm = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Form Data:', data);
    };

    return (
        <Container>
            <Title>Sign In</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input
                        id="username"
                        type="text"
                        placeholder="UserName"
                        {...register('username', { required: true })}
                    />
                </div>
                <div>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        {...register('password', { required: true })}
                    />
                </div>
                <Button type="submit">Sign In</Button>
            </form>
        </Container>
    );
};

export default SignInForm;
