"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';

// Icons 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from './Header';

const navItem = [
    {
        route: "Home",
        pathname: "/"
    },
    {
        route: "Pages",
        pathname: "/pages"
    },
    {
        route: "Category",
        pathname: "/categories/news?category=all-news"
    },
    {
        route: "News",
        pathname: "/news"
    },
    {
        route: "Post",
        pathname: "/post"
    },
    {
        route: "Contact",
        pathname: "/contact"
    },
];

function Navbar() {

    return (
        <>
            <Header />
            <AppBar position="static" className="bg-black">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image src={logo} alt="logo" width={100} height={100} />
                        <Box className="w-full text-center">
                            {navItem.map((item) => (
                                <Link
                                    href={item.pathname}
                                    key={item}
                                >
                                    <Button className="text-white">
                                        {item.route}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box>
                            <Stack direction="row" sx={{
                                "& svg": {
                                    color: "white",
                                },
                            }}>
                                <IconButton >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton >
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton >
                                    <YouTubeIcon />
                                </IconButton>
                                <IconButton >
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton >
                                    <InstagramIcon />
                                </IconButton>
                            </Stack>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;