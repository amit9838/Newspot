import React, { Component } from 'react';
import defaultNewsImage from '../newspot.png'


class NewsItem extends Component {
    render() {
        let {title,description,url,imageUrl,publishedAt,source} = this.props
        
        
        const getbgcolor = () => {
            let colors = ["#3366cc","#dc3912","#ff9900","#109618","#990099","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#3366cc","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6","#3b3eac","#b77322","#16d620","#b91383","#f4359e","#9c5935","#a9c413","#2a778d","#668d1c","#bea413","#0c5922","#743411"];
            

            return colors[Math.floor(Math.random()*colors.length)];
        }

        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src = {imageUrl?imageUrl:defaultNewsImage} className="card-img-top rounded" alt={"No image available!"}/>
                        <div className="card-body p-2">
                            <h6 className="card-title">{title}</h6>
                            <span className="badge rounded-pill" style={{backgroundColor:getbgcolor()}}>{source?source:"Unknown"}</span>
                            <br />
                            <small className="text-muted bg-light rounded px-1">{new Date(publishedAt).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small>
                            <p className="card-text text-muted">{description?description.slice(0,88)+"...":"No description"}</p>
                            <a href={url} className = "btn btn-sm btn-link" target='_blank' rel='noreferrer' >Read More &raquo;</a>
                        </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;