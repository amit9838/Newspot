import React, { Component } from 'react'
import NewsItem from './NewsItem'
import "./api.json"
import Spinner from './Spinner';

export default class News extends Component {
    
    
    
    constructor(props) {
        super();
        this.state = {
            articles : [],
            loading:false,
            page:1,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc461573c4e14525933041aab7618283&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        });
    }
    
    handlePrevClick = async () => {
        console.log("previous");
        console.log("Next");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc461573c4e14525933041aab7618283&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page:this.state.page -1,
            articles:parsedData.articles,
            loading:false
        });
    }
    handleNextClick = async () => {
        console.log("Next");
        console.log(this.state.totalResults);
        console.log(this.props.pageSize);
        console.log(this.state.page);
        if(this.state.page+1<Math.ceil(this.state.totalResults/this.props.pageSize)){
            this.setState({loading:true})
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc461573c4e14525933041aab7618283&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page:this.state.page +1,
                articles:parsedData.articles,
                loading:false
            });

        }
    }

    render() {
        return (
            <div className='container'>
                <h3 className='mt-2 p-2 bg-light border rounded'>Top  Headlines - {this.props.category}</h3>
                {this.state.loading&&<Spinner/>}
                <div className="d-flex flex-wrap justify-content-around">
                    {!this.state.loading && this.state.articles.map((element) => {
                    return <div key={element.url} className="mx-2 my-2">
                            <NewsItem title ={element.title} description = {element.description} url = {element.url} imageUrl = {element.urlToImage} />
                        </div>
                    })}
                </div>
                <div className="paginator my-2">
                    <div className="bg-light px-2 py-2 rounded border">
                        <button className="btn btn-primary" disabled = {this.state.page<=1} onClick={this.handlePrevClick}> &#8249; Previous</button>
                        <div className="btn btn-primary mx-3">{this.state.page}/{Math.ceil(this.state.totalResults/this.props.pageSize)}</div>
                        <button className="btn btn-primary" disabled ={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}   onClick={this.handleNextClick}>Next &#8250;</button>
                    </div>
                </div>
            </div>
        )
    }
}
