import SidebarIcon from '@/shared/assets/svg/sidebar-icon.svg?react';
import IconImage from '@/shared/assets/svg/icon-image.svg?react';
import { Stack } from '@mui/material';

export function Sidebar() {
    return (
        <aside>
            <Stack height="100vh" width="100px" bgcolor="background.default">
                <SidebarIcon
                    style={{
                        alignSelf: 'center',
                        marginTop: '20px',
                    }}
                />
                <Stack height="100%" justifyContent="space-between">
                    <Stack marginTop={10} alignSelf="center" rowGap={2.5}>
                        <IconImage />
                        <IconImage />
                        <IconImage />
                    </Stack>
                    <Stack marginBottom={5} alignSelf="center" rowGap={2.5}>
                        <IconImage />
                        <IconImage />
                        <IconImage />
                    </Stack>
                </Stack>
            </Stack>
        </aside>
    );
}
