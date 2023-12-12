import { Box, Button, Container, IconButton, Typography } from "@mui/material";


// Icons 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";


const Footer = () => {
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
    return (
        <Box className="bg-[#011321] px-2 py-14">
            <Container>
                <Box
                    className="text-center"
                    sx={{
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
                </Box>

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
                <Typography color="gray" variant="body2" textAlign="center">&copy;2023 Dragon News. Design by Programming Hero</Typography>
            </Container>
        </Box>
    );
};

export default Footer;