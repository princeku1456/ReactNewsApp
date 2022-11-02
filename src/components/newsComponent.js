import React, { Component } from 'react'

import '../App.css';
export default class newsComponent extends Component {

  render() {
    let {title, description, imageUrl, newsUrl,author,publishedAt,source} = this.props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl?imageUrl:"https://clipartion.com/wp-content/uploads/2015/11/free-retro-clipart-of-a-man-reading-interesting-news-from-a-newspaper.jpg"} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="badge">
                    <span class="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                <a href={newsUrl} target="__blank" className="btn btn-sm btn-dark">read more</a>
            </div>
        </div>
      </div>
    )
  }
}
