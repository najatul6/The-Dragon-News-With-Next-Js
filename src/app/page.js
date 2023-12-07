import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/Sidebar/SideBar";
import { Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography>
          Latest News
        </Typography>
        <LatestNews />
      </Grid>
      <Grid item xs={4}>
        <h1>Sylhet</h1>
        <SideBar/>
      </Grid>
    </Grid>
  );
};

export default HomePage;