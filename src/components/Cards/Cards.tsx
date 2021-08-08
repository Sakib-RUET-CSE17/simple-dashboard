import React, { useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export type CardType = {
    title: string;
    details: string;
    icon: string;
    color: string;
    background: string;
}

const cardsData = [
    {
        title: 'New Leds',
        details: '205',
        icon: '/newLeds.svg',
        color: '#663399',
        background: '#F2F1FE'
    },
    {
        title: 'Sales',
        details: '$4021',
        icon: '/sales.svg',
        color: '#3981F7',
        background: '#C5DBFF'
    },
    {
        title: 'Orders',
        details: '80',
        icon: '/orders.svg',
        color: '#5DAE49',
        background: '#BCDDB3'
    },
    {
        title: 'Expense',
        details: '$1200',
        icon: '/expense.svg',
        color: '#FFC620',
        background: '#FFF6E0'
    },
]

const Cards = () => {
    const [cards, setCards] = useState<CardType[]>(cardsData)

    return (
        <Box style={{ margin: 'auto', backgroundColor: '#F1F3F4' }} sx={{ width: '96%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    cards.map(card => <SingleCard card={card} key={card.title}></SingleCard>)
                }
            </Grid>
        </Box>
    );
};

export default Cards;