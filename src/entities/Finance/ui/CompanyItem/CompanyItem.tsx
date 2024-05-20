import { Grid, CardContent, Typography, Card, IconButton } from '@mui/material';
import { Company } from '../../model/types/finance';

import AddIcon from '@/shared/assets/svg/add-icon.svg?react';
interface CompanyItemProps {
    company: Company;
}

export function CompanyItem(props: CompanyItemProps) {
    const { company } = props;

    return (
        <Grid item xs={6} padding={0}>
            <Card
                variant="outlined"
                sx={{
                    padding: 0,
                }}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        '&:last-child': {
                            paddingBottom: '16px',
                        },
                    }}
                >
                    <Typography>
                        <strong>{company.ticker}</strong> {company.name}
                    </Typography>
                    <IconButton color="primary">
                        <AddIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    );
}
