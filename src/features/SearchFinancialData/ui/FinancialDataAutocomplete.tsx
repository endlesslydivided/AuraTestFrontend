import { useLazySearchFinancialDataQuery } from '@/entities/Finance';
import {
    Autocomplete,
    Box,
    CircularProgress,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';

export function FinancialDataAutocomplete() {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [fetchData, { data, isLoading }] = useLazySearchFinancialDataQuery();

    useEffect(() => {
        if (searchTerm) {
            fetchData(searchTerm);
        }
    }, [searchTerm, fetchData]);

    return (
        <Autocomplete
            sx={{
                width: 300,
            }}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onInputChange={(_, newInputValue) => {
                setSearchTerm(newInputValue);
            }}
            getOptionLabel={(option) => `${option.name}`}
            forcePopupIcon={false}
            isOptionEqualToValue={(option, value) =>
                `${option.symbol} ${option.name}` ===
                `${value.symbol} ${value.name}`
            }
            options={data || []}
            renderOption={(props, option) => {
                return (
                    <Box
                        component="li"
                        margin="0 5px"
                        {...props}
                        sx={{
                            '&.MuiAutocomplete-option.Mui-focused': {
                                backgroundColor: 'primary.light',
                            },
                        }}
                        key={option.symbol + option.name}
                    >
                        <Typography
                            fontFamily="Roboto Condensed"
                            fontWeight={700}
                            marginRight={2}
                        >
                            {option.symbol}
                        </Typography>
                        <Typography fontFamily="Roboto Condensed">
                            {option.name}
                        </Typography>
                    </Box>
                );
            }}
            loading={isLoading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search company or ticker"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {isLoading ? (
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                    />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
