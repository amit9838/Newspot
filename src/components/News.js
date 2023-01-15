import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
    const key = 'bc461573c4e14525933041aab7618283';
    const api = localStorage.getItem('apiKey') ? localStorage.getItem('apiKey') : key;

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}`
        fetchMoreData();
    }, [])
    

    const fetchMoreData = async() => {
        props.setProgress(5);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api}&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        props.setProgress(35);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setPage(page+1);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
      };

 
        return (
            <div className='container'>
                <h3 className='mt-2 p-2 bg-light border rounded'>Top  Headlines - {capitalizeFirstLetter(props.category)}</h3>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<Spinner/>}
                >
                    <div className="d-flex flex-wrap justify-content-around">
                        {articles.map((element,index) => {
                            return <div key={index} className="mx-2 my-2">
                                <NewsItem title={element.title} description={element.description} url={element.url} imageUrl={element.urlToImage} publishedAt={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }

    export default News;
