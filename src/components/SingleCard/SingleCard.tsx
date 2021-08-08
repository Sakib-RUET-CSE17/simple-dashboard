import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Image from 'next/image'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardType } from '../Cards/Cards';

const theme = createTheme();

theme.typography.h6 = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '19px',
    color: '#43454D',
};

theme.typography.h4 = {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '41px',
};

interface IProps {
    card: CardType,
}

const SingleCard = ({ card }: IProps) => {
    const { icon, title, details, color, background } = card;
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card style={{ height: '131px', borderRadius: '24px', boxShadow: "none" }} sx={{ display: 'flex' }}>
                <Box style={{ margin: 'auto 10px', marginRight: '0', marginLeft: '20px', borderRadius: '18px', background: `${background}`, padding: '30px 10px' }}><Image width={20} height={20} alt="" src={`/images${icon}`} /></Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', marginTop: '17px' }}>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h6">
                                {title}
                            </Typography>
                            <Typography variant="h4" color={color}>
                                {details}
                            </Typography>
                        </ThemeProvider>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    );
};

export default SingleCard;