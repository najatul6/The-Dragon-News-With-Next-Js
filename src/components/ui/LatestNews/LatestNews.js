import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import latestNews from "@/assets/Top-News.png"
import latestNews2 from "@/assets/news.png"
import Image from "next/image";

const LatestNews = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={latestNews} width={800} alt="latest News" />
                    </CardMedia>
                    <CardContent>
                        <p className="text-white font-bold bg-red-600 py-2 px-3 rounded-xl w-[110px] my-5">
                            Technology
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
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
            <Grid className="my-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={latestNews2} width={800} alt="latest News" />
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
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={latestNews2} width={800} alt="latest News" />
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
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={latestNews2} width={800} alt="latest News" />
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
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={latestNews2} width={800} alt="latest News" />
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
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;