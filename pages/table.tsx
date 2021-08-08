import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const theme = createTheme();

theme.typography.h3 = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#000000',
    fontSize: '0.9rem',
    marginLeft: '30px',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
    },
};

const table = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h3">This is table page dummy content</Typography>
        </ThemeProvider>
    );
};

export default table;