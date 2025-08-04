/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: white;
  background: #0077cc;

  &:hover {
    background: #005fa3;
  }
`;

const LinkButton = styled(Link)`
  flex: 1;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  background: #f0f0f0;
  color: #333;

  &:hover {
    background: #e0e0e0;
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
                <ButtonGroup>
                    <LinkButton to="/auth/register">Sign Up</LinkButton>
                    <Button type="submit">Sign In</Button>
                </ButtonGroup>
            </form>

        </Container>
    );
};

export default SignInForm;
