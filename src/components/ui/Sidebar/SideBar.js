import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import sidebarNews from "@/assets/Side Top News.png"

const SideBar = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sidebarNews} width={800} alt="latest News" />
                    </CardMedia>
                    <CardContent>
                        <p className="text-white font-bold bg-red-600 py-2 px-3 rounded-xl w-[110px] my-5">
                            Technology
                        </p>
                        <Typography gutterBottom>
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className="my-3">
                            By Najatul Islam - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default SideBar;