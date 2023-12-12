import { getSingleNews } from "@/utils/getSingleNews";

const NewsDetailsPage = async({params}) => {
    const {data} = await getSingleNews(params.newsId);
    console.log(data);
    return (
        <div>
            <div>{params.newsId}</div>
        </div>
    );
};

export default NewsDetailsPage;