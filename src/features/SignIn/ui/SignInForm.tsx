import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import userJson from '../mock/user-auth.json';
import { userActions } from '@/entities/User';
import { Box, InputLabel } from '@mui/material';
import { useId } from 'react';
import { useAppDispatch } from '@/shared';

type Inputs = {
    username: string;
    password: string;
};

export function SignInForm() {
    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isValid },
    } = useForm<Inputs>({ mode: 'all' });

    const dispatch = useAppDispatch();

    const loginId = useId();
    const passwordId = useId();
    const onSubmit = (data: Inputs) => {
        if (
            data.username === userJson.username &&
            data.password === userJson.password
        ) {
            dispatch(userActions.setUserData({ username: data.username }));
            return;
        }

        setError('username', { message: 'Invalid username or password' });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexDirection="column" gap="40px" width={400}>
                <Box>
                    <InputLabel
                        sx={{
                            color: 'primary.main',
                        }}
                        htmlFor={loginId}
                    >
                        User
                    </InputLabel>
                    <TextField
                        fullWidth
                        {...register('username', {
                            required: 'Username is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        id={loginId}
                        placeholder="johndoe"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: '#000',
                                backgroundColor: '#ffffff',
                            },
                        }}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                </Box>
                <Box>
                    <InputLabel
                        sx={{
                            color: 'primary.main',
                        }}
                        htmlFor={passwordId}
                    >
                        Password
                    </InputLabel>
                    <TextField
                        fullWidth
                        {...register('password', {
                            required: 'Password is required',
                        })}
                        id={passwordId}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: '#000',
                                backgroundColor: '#ffffff',
                            },
                        }}
                        placeholder="123456789"
                        type="password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </Box>
                <Button
                    disabled={!isValid}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{
                        '&.Mui-disabled': {
                            background: '#eaeaea',
                            color: '#c0c0c0',
                        },
                    }}
                >
                    Sign In
                </Button>
            </Box>
        </form>
    );
}
