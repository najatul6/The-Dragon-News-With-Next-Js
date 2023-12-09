import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoriesList = async () => {
    const { data: allCategories } = await getAllCategories();
    return (
        <Box className="bg-[#F3F3F3] rounded-xl p-2 my-5 min-h-screen">
            <Typography className="my-5" variant="h4" fontWeight={600}>
                Categories
            </Typography>
            <Divider />
            <Stack rowGap={1} sx={{ mt: 2.5 }}>
                {
                    allCategories?.map(category => (
                        <Button variant="outlined" key={category.id}>
                            <Link href={`news?category=${category.title.toLowerCase( )}`}>
                                {category.title}
                            </Link>
                        </Button>
                    ))
                }
            </Stack>

        </Box>
    );
};

export default CategoriesList;