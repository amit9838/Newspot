import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        let {title,description,url,imageUrl} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src = {imageUrl} className="card-img-top rounded" height="180px" width="480px" alt={title}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} className = "btn btn-primary" target='_blank' rel='noreferrer' >Read More</a>
                        </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;