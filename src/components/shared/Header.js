import { Box, Container, Typography } from "@mui/material";
import headingImage from "@/assets/The-Dragon-News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";
import Image from "next/image";

const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box className="w-full py-5">
            <Container className="space-y-2">
                <Image src={headingImage} width={500} height={500} alt="logo" className="mx-auto" />
                <Typography color="gray" variant="body2" fontSize="18px" textAlign="center">Journalism Without Fear or Favour</Typography>
                <Typography color="gray" variant="body2" fontSize="18px" textAlign="center">
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;