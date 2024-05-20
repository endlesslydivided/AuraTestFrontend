import { Modal, Box, Backdrop, Fade, Typography } from '@mui/material';
import CrossIcon from '@/shared/assets/svg/cross-icon.svg?react';
import { UploadDataFormAsync } from './UploadDataForm.async';
import { Suspense } from 'react';

interface UploadDataModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1020,
    height: 815,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
};

export function UploadDataModal(props: UploadDataModalProps) {
    const { isOpen, onClose } = props;
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'transparent',
                    },
                },
            }}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
        >
            <Fade in={isOpen}>
                <Box sx={style}>
                    <Box position="absolute" right={24} top={24}>
                        <button onClick={onClose}>
                            <CrossIcon />
                        </button>
                    </Box>
                    <Typography variant="h3">New Data</Typography>
                    <Suspense fallback={<div>Loading</div>}>
                        <UploadDataFormAsync
                            onClose={onClose}
                            onSuccessfulUpload={onClose}
                        />
                    </Suspense>
                </Box>
            </Fade>
        </Modal>
    );
}
