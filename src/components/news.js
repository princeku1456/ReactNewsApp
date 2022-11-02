import React, { Component } from 'react'

import Spinner from './spinner';
import NewsComponent from './newsComponent'

export default class news extends Component {
    // eslint-disable-next-line no-unreachable
    articles = []
    constructor(){
        // eslint-disable-next-line no-this-before-super
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page:1
        }
    }

    async updateNews(){
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?apiKey=77ca9bfef0744275b6724319a9db3b5b&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        this.props.setProgress(30);
        let data= await fetch(url);
        let parsedData= await data.json();
        this.props.setProgress(70);
        this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults, loading:false})
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updateNews();
    }

    handleNextclick = async () => {
        this.setState({ page:this.state.page+1})
        this.updateNews();
    }
    handlePrevclick = async () => {
        this.setState({ page:this.state.page-1})
        this.updateNews();
    }


  render() {
    return (
      <div>
        <div className="container my-3">
            <h1 className="text-center">{"Top headlines of " + this.props.newsType + " news"} </h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-3 my-3" key={element.url}>
                                <NewsComponent title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                            </div>
                })}
            </div>
        </div>
        <div className="container my-3 d-flex justify-content-between">
            <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
