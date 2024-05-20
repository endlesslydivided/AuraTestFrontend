import { AiMessageList } from '@/entities/Ai/ui/AiMessageList/AiMessageList';
import { SendMessageToAi } from '@/features/SendMessageToAi';
import { Box } from '@mui/material';
import { useState } from 'react';

export function AiDialog() {
    const [isResponseLoading, setResponseLoading] = useState(false);
    const isLoadingHandler = (isLoading: boolean) => {
        setResponseLoading(isLoading);
    };

    return (
        <Box
            display="flex"
            height="88vh"
            marginTop={2}
            flexDirection="column"
            justifyContent="space-between"
        >
            <AiMessageList isLoading={isResponseLoading} />
            <SendMessageToAi setIsLoading={isLoadingHandler} />
        </Box>
    );
}
