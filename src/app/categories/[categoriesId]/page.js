import { Box } from "@mui/material";

const DynamicNewsPage = ({searchParams}) => {
    return (
        <Box>
            <h1>
                News for: {searchParams.categoriesId}
            </h1>
        </Box>
    );
};

export default DynamicNewsPage;