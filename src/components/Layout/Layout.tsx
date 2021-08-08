import * as React from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { AppProps } from 'next/app';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#F1F3F4',
    position: 'absolute',
    height: '100%',
    left: '93px',
    right: '0',
}));

const Layout = ({ children }: any) => {
    return (
        <>
            <Sidebar></Sidebar>
            <StyledBox sx={{ flexGrow: 1 }}>
                <Header></Header>
                {children}
            </StyledBox>
        </>
    );
};

export default Layout;