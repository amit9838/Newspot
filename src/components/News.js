import React, { Component } from 'react'
import NewsItem from './NewsItem'
import "./api.json"
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    key = 'bc461573c4e14525933041aab7618283';
    api = localStorage.getItem('apiKey') ? localStorage.getItem('apiKey') : this.key;
    constructor(props) {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
    }

    async componentDidMount() {
        this.fetchMoreData();
    }

    fetchMoreData = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            totalResults: parsedData.totalResults,
            articles:  this.state.articles.concat(parsedData.articles),
            page:this.state.page+1,
            loading: false
        });
      };

    render() {
        return (
            <div className='container'>
                <h3 className='mt-2 p-2 bg-light border rounded'>Top  Headlines - {this.props.category}</h3>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="d-flex flex-wrap justify-content-around">
                        {this.state.articles.map((element) => {
                            return <div key={element.url} className="mx-2 my-2">
                                <NewsItem title={element.title} description={element.description} url={element.url} imageUrl={element.urlToImage} publishedAt={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
