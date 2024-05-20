import { aiActions } from '@/entities/Ai';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import SendIcon from '@/shared/assets/svg/send-icon.svg?react';
import { useGetChatResponseMutation } from '@/entities/Ai';
import { useAppDispatch } from '@/shared';
interface SendMessageToAiProps {
    setIsLoading: (isLoading: boolean) => void;
}

type SendMessageToAiForm = {
    message: string;
};
export function SendMessageToAi(props: SendMessageToAiProps) {
    const { setIsLoading } = props;

    const { register, handleSubmit, setValue, watch } =
        useForm<SendMessageToAiForm>({
            mode: 'all',
            defaultValues: { message: '' },
        });

    const message = watch('message');

    const dispatch = useAppDispatch();

    const [submitResponse, { isLoading }] = useGetChatResponseMutation();

    const onSubmit = (data: SendMessageToAiForm) => {
        dispatch(aiActions.pushAiQuestion(data.message));
        setValue('message', '');
        setIsLoading(true);
        submitResponse(data.message)
            .unwrap()
            .then((response) => {
                setIsLoading(isLoading);
                dispatch(aiActions.updateLastAiResponse(response));
            });
    };
    return (
        <Box width="100%">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    {...register('message', { required: true })}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {message.length ? (
                                    <button type="submit">
                                        <SendIcon />
                                    </button>
                                ) : (
                                    <></>
                                )}
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Hi, I’m Aura, you AI Assistant. Tell me, what question do you have?"
                />
            </form>
        </Box>
    );
}
