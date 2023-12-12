import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { getCategoriesNews } from "@/utils/getCategoriesNews";
import Link from "next/link";

const DynamicNewsPage = async ({ searchParams }) => {
    const { data } = await getCategoriesNews(searchParams.category)
    return (
        <Box>
            <Typography variant="h2" width={850} className="border-red-600 border-b-4 uppercase font-bold" sx={{ mt: 2.5 }}>
                {searchParams.category}
            </Typography>
            <Divider />
            <Grid className="my-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data?.map(news => (
                        <Grid key={news.id} item xs={6}>
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            sx={{
                                                "& img": {
                                                    width: "100%",
                                                    height: "250px",
                                                },
                                            }}
                                        >
                                            <Image className="h-[250px]" src={news?.thumbnail_url} width={800} height={300} alt="latest News" />
                                        </CardMedia>
                                        <CardContent>
                                            <p className="text-white font-bold bg-red-600 py-2 px-3 rounded-xl inline-block my-5">
                                                {news?.category}
                                            </p>
                                            <Typography variant="h6" gutterBottom>
                                                {news?.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                            </Typography>
                                            <Typography gutterBottom className="my-3">
                                                By {news?.author?.name} - {news?.author?.published_date}
                                            </Typography>

                                            {
                                                news?.details.length > 200 ?
                                                    <Typography variant="body2" color="text.secondary">
                                                        {news?.details.slice(1, 200)} ...
                                                    </Typography>
                                                    :
                                                    <Typography variant="body2" color="text.secondary">
                                                        {news?.details}
                                                    </Typography>
                                            }

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    );
};

export default DynamicNewsPage;