import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import sidebarBanner from "@/assets/side banner.png"
import { getAllNews } from '@/utils/getAllNews';
import Link from 'next/link';

const SideBar = async () => {
    const { data } = await getAllNews();
    return (
        <Box className="my-5">
            <Link href={`/${data[3]?.category.toLowerCase()}/${data[3]?._id}`}>
                <Card>
                    <CardActionArea>
                        <CardMedia>
                            <Image src={data[3]?.thumbnail_url} width={800} height={500} alt="latest News" />
                        </CardMedia>
                        <CardContent>
                            <p className="text-white font-bold bg-red-600 py-2 px-3 rounded-xl w-[110px] my-5">
                                {data[3]?.category}
                            </p>
                            <Typography gutterBottom>
                                {data[3]?.title}
                            </Typography>
                            <Typography gutterBottom className="my-3">
                                By {data[3]?.author.name} - {data[3]?.author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data[3]?.details.length > 200 ? data[3]?.details.slice(0, 200) + "..." : data[3]?.details}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>

            <Box className="my-6">
                {
                    data?.slice(0, 6).map(news => (
                        <>
                            <hr />
                            <Link href={`/${news?.category.toLowerCase()}/${news?._id}`}>
                                <Grid className='my-6' container spacing={2}>
                                    <Grid item xs={6} md={4}>
                                        <Image className='rounded-xl w-full h-[81px]' src={news?.thumbnail_url} width={500} height={500} alt='news' />
                                    </Grid>
                                    <Grid item xs={6} md={8}>
                                        <Typography fontWeight={500} color="black">
                                            {news.title.length > 35 ? news?.title.slice(0, 35) + "..." : news?.title}
                                        </Typography>
                                        <Typography gutterBottom>
                                            {news?.author.published_date}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Link>
                        </>
                    ))
                }
            </Box>
            <Box className="my-4">
                <Image className='rounded-xl' src={sidebarBanner} width={360} height={400} alt='side banner' />
            </Box>
        </Box >
    );
};

export default SideBar;