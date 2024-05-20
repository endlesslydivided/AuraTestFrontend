import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { CompanyItem } from '../CompanyItem/CompanyItem';

const companies = [
    { ticker: 'AMZN', name: 'Amazon' },
    { ticker: 'MSFT', name: 'Microsoft' },
    { ticker: 'MSFT', name: 'Microsoft' },
    { ticker: 'ESTC', name: 'Elastic' },
    { ticker: 'U', name: 'Unity Software' },
    { ticker: 'CVNA', name: 'Carvana Co' },
    { ticker: 'EPAM', name: 'EPAM Systems' },
    { ticker: 'WBD', name: 'Warner Bros' },
];

export function CompanyList() {
    return (
        <Box marginTop={2} width={700}>
            <Card sx={{ padding: 2, backgroundColor: '#f5f5ff' }}>
                <Grid container spacing={2}>
                    {companies.map((item, index) => (
                        <CompanyItem key={index} company={item} />
                    ))}
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 2,
                    }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        width="100%"
                        justifyContent="space-between"
                    >
                        <Typography variant="body2" color="grey.200">
                            0 Companies saved
                        </Typography>
                        <Button
                            sx={{
                                color: 'grey.400',
                                textTransform: 'capitalize',
                            }}
                            variant="outlined"
                        >
                            Refresh companies
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
