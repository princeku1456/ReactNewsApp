/* eslint-disable react-hooks/exhaustive-deps */
// import React, { Component } from 'react'

// import Spinner from './spinner';
// import NewsComponent from './newsComponent'

// import '../App.css';


// export default class news extends Component {
//     // eslint-disable-next-line no-unreachable

//     articles = []
//     constructor(){
//         // eslint-disable-next-line no-this-before-super
//         super();
//         this.state = {
//             articles: this.articles,
//             loading: false,
//             page:1,
//             totalResults:0
//         }
//     }

//     async updateNews(){
//         props.setProgress(10);
//         let url=`https://newsapi.org/v2/top-headlines?apiKey=77ca9bfef0744275b6724319a9db3b5b&country=${props.country}&category=${props.category}&page=${this.state.page}&pageSize=${props.pageSize}`;
//         this.setState({loading:true})
//         props.setProgress(30);
//         let data= await fetch(url);
//         let parsedData= await data.json();
//         props.setProgress(70);
//         this.setState({articles:parsedData.articles,
//                         totalResults:parsedData.totalResults, 
//                         loading:false
//                     })
//         props.setProgress(100);
//     }

//     componentDidMount(){
//         this.updateNews();
//     }

//     handleNextclick = () => {
//         this.setState({ page:this.state.page+1})
//         this.updateNews();
//     }
//     handlePrevclick = () => {
//         this.setState({ page:this.state.page-1})
//         this.updateNews();
//     }


//   render() {
    // return (
    //   <div>
    //     <div className="container main-news">
    //         <h1 className="text-center">{"Top headlines of " + props.newsType + " news"} </h1>
    //         {this.state.loading && <Spinner/>}
    //         <div className="row">
    //             {!this.state.loading && this.state.articles.map((element)=>{
    //                 return <div className="col-md-3 my-3" key={element.url}>
    //                             <NewsComponent title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
    //                         </div>
    //             })}
    //         </div>
    //     </div>
    //     <div className="container my-3 d-flex justify-content-between">
    //         <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
    //         <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
    //     </div>
    //   </div>
    // )
//   }
// }


import React,{useEffect, useState} from 'react'

import axios from 'axios';

import Spinner from './spinner';
import NewsComponent from './newsComponent'

import '../App.scss';

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const updateNews = async()=>{
        // props.setProgress(10);
        // let url=`https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
        // setLoading(true);
        // // props.setProgress(30);
        // let data= await fetch(url);
        // let parsedData= await data.json();
        // // props.setProgress(70);
        // setArticles(parsedData.articles);
        // setTotalResults(parsedData.totalResults)
        // setLoading(false);
        // // props.setProgress(100);
        let url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await axios.get(url);
        setArticles(data.data.articles);
        setTotalResults(data.data.totalResults);
        setLoading(false);
    }


    useEffect(()=>{
        updateNews();
    },[])
    
    const handleNextclick = () => {
        setPage(page+1);
        updateNews();
    }
    const handlePrevclick = () => {
        setPage(page-1);
        updateNews();
    }



  return (
    <div>
        <div className="container main-news">
            <h1 className="text-center">{"Top headlines of " + props.category + " news"} </h1>
            {loading && <Spinner/>}
            <div className="row">
                {!loading && articles.map((element)=>{
                    return <div className="col-md-4 col-lg-3 my-3" key={element.url}>
                                <NewsComponent title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                            </div>
                })}
            </div>
        </div>
        <div className="container my-3 d-flex justify-content-between">
            <button data-testid="button-1" disabled={page<=1} className="btn btn-dark" onClick={handlePrevclick}>&larr; Previous</button>
            <button data-testid="button-2" disabled={page+1 >= Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={handleNextclick}>Next &rarr;</button>
        </div>
    </div>
  )
}

export default News;
