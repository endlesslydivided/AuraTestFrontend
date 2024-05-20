import { Box, Typography, Skeleton, Stack } from '@mui/material';
import { Ai } from '../../model/types/ai';
import ThumbUpIcon from '@/shared/assets/svg/thumb-up-icon.svg?react';
import ThumbsDownIcon from '@/shared/assets/svg/thumb-down-icon.svg?react';
import OptionsIcon from '@/shared/assets/svg/options-icon.svg?react';
import RefreshIcon from '@/shared/assets/svg/refresh-icon.svg?react';
import StarIcon from '@/shared/assets/svg/star-icon.svg?react';
import DocumentIcon from '@/shared/assets/svg/document-icon.svg?react';
import DocumentFilledIcon from '@/shared/assets/svg/filled-document-icon.svg?react';

interface AiMessageItemProps {
    message: Ai;
    isLoading: boolean;
}

export function AiMessageItem(props: AiMessageItemProps) {
    const { message, isLoading } = props;
    return (
        <Box>
            <Typography
                padding={1}
                sx={{
                    backgroundColor: 'primary.100',
                }}
                textAlign="center"
            >
                {message.question}
            </Typography>
            <Box marginTop="20px">
                {isLoading || !message.content ? (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="150px"
                    />
                ) : (
                    <Typography fontFamily="Roboto Condensed">
                        {message.content[0].text}
                        <Stack direction="row" alignItems="center">
                            <RefreshIcon />
                            <Box marginLeft={5} paddingTop={1}>
                                <StarIcon />
                            </Box>
                            <Box display="flex" columnGap="10px" marginLeft={5}>
                                <DocumentIcon />
                                <DocumentFilledIcon />
                            </Box>
                            <Box
                                marginLeft={5}
                                display="flex"
                                alignItems="center"
                                columnGap="10px"
                            >
                                <ThumbUpIcon />
                                <ThumbsDownIcon />
                            </Box>
                            <Box marginLeft={5} paddingTop={1}>
                                <OptionsIcon />
                            </Box>
                        </Stack>
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
