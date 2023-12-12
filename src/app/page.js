import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/Sidebar/SideBar";
import { Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography className="my-5" fontSize={28} fontWeight={600}>
          Latest News
        </Typography>
        <LatestNews />
      </Grid>
      <Grid item xs={4}>
        <Typography className="my-5" fontSize={28} fontWeight={600}>
          Sylhet
        </Typography>
        <SideBar />
      </Grid>
    </Grid>
  );
};

export default HomePage;