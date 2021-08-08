import * as React from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Image from 'next/image'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: 'auto',
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '400px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#B1B1B1'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#B1B1B1',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#F1F3F4',
    boxShadow: "none",
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "#663399",
}))

const StyledBadge = styled(Badge)(({ theme }) => ({
    color: '#663399',
}))

const Header = () => {
    return (
        <div>
            <StyledAppBar position="static">
                <Toolbar>
                    <StyledIconButton
                        size="large"
                        edge="start"

                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </StyledIconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <>
                        <Box style={{ margin: '15px' }}><Image width={16} height={16} alt="" src='/images/arrow.svg' /> </Box>
                        <StyledBadge badgeContent={3} color='primary'>
                            <NotificationsNoneIcon></NotificationsNoneIcon>
                        </StyledBadge>
                        <Box style={{ margin: '15px' }}><Image width={60} height={58} alt="" src='/images/profilePhoto.png' /></Box>
                    </>
                </Toolbar>
            </StyledAppBar>
        </div>
    );
};

export default Header;