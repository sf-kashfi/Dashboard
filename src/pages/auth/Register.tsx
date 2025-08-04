/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type SignUpFormData = {
    name: string;
    lastName: string,
    userName: string;
    password: string;
    confirmPassword: string;
};

const Container = styled.div`
  max-width: 420px;
  margin: 100px auto;
  padding: 36px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 28px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.1);
  }
`;

const Error = styled.p`
  color: red;
  margin-top: -14px;
  margin-bottom: 12px;
  font-size: 12px;
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
  background: #28a745;

  &:hover {
    background: #218838;
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

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpFormData>();

    const onSubmit = (data: SignUpFormData) => {
        console.log('Sign Up Data:', data);
    };

    return (
        <Container>
            <Title>Sign Up</Title>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Name"
                />
                {errors.name && <Error>{errors.name.message}</Error>}

                <Input
                    id="lastName"
                    {...register('lastName', { required: 'Last Name is required' })}
                    placeholder="Last Name"
                />
                {errors.lastName && <Error>{errors.lastName.message}</Error>}


                <Input
                    id="userName"
                    {...register('userName', {
                        required: 'username is required',
                    })}
                    placeholder="Username"
                />
                {errors.userName && <Error>{errors.userName.message}</Error>}


                <Input
                    id="password"
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                    placeholder="Password"
                />
                {errors.password && <Error>{errors.password.message}</Error>}


                <Input
                    id="confirmPassword"
                    type="password"
                    {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (value) =>
                            value === watch('password') || 'Passwords do not match',
                    })}
                    placeholder="Confirm Password"
                />
                {errors.confirmPassword && <Error>{errors.confirmPassword.message}</Error>}

                <ButtonGroup>
                    <LinkButton to="/auth/login">Sign In</LinkButton>
                    <Button type="submit">Create Account</Button>
                </ButtonGroup>
            </form>
        </Container>
    );
};

export default Register;
