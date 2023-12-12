import { LinearProgress } from "@mui/material";

const LoadingPage = () => {
    return (
        <div className="flex justify-center items-center mx-auto w-full">
            <LinearProgress variant="buffer" value="progress" valueBuffer="buffer" />
        </div>
    );
};

export default LoadingPage;