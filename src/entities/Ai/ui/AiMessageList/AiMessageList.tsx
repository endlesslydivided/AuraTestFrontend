import { useAppSelector } from '@/shared/hooks/redux-hooks/redux-hooks';
import { AiMessageItem } from '../AiMessageItem/AiMessageItem';
import { Stack } from '@mui/material';

interface AiMessageListProps {
    isLoading: boolean;
}

export function AiMessageList(props: AiMessageListProps) {
    const { isLoading } = props;
    const messages = useAppSelector((state) => state.ai.aiResponses);

    return (
        <Stack
            maxHeight="800px"
            sx={{
                overflowY: 'auto',
            }}
        >
            {messages.map((item) => {
                return (
                    <AiMessageItem
                        key={item.createdAt}
                        isLoading={isLoading}
                        message={item}
                    />
                );
            })}
        </Stack>
    );
}
