// import './App.css';

// import React, { Component } from 'react'

// import Navbar from './components/navbar'
// import News from './components/news'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   pageSize=16;
//   country="us";
//   apiKey = '9cbd5b0c2d474a35b90ac1a242b0d0df';
//   state={
//     progress:0
//   }
//   setProgress=(progress)=>{
//     this.setState({progress:progress})
//   }
  
//   render() {
//     return (
//       <div>
//          {/* 9cbd5b0c2d474a35b90ac1a242b0d0df */}
//          {/* 77ca9bfef0744275b6724319a9db3b5b */}
//          <Router>
//             <Navbar/>
//             <LoadingBar
//               color='#E8E8E8'
//               progress={this.state.progress}
//               height={3}
//             />
//             <Routes>
//                 <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={this.country} newsType={"general"} category={"general"}/>}/>
//                 <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={this.country} newsType={"business"} category={"business"}/>}/>
//                 <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={this.country} newsType={"entertainment"} category={"entertainment"}/>}/>
//                 <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={this.country} newsType={"health"} category={"health"}/>}/>
//                 <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={this.country} newsType={"science"} category={"science"}/>}/>
//                 <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={this.country} newsType={"sports"} category={"sports"}/>}/>
//                 <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={this.country} newsType={"technology"} category={"technology"}/>}/>
//             </Routes>
//           </Router>
//       </div>
//     )
//   }
// }



import './App.scss';

import React, {useState} from 'react'

import Navbar from './components/navbar'
import News from './components/news'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';



const App=()=>{

  const pageSize=16;
  const country="us";
  const apiKey = '9cbd5b0c2d474a35b90ac1a242b0d0df';
  // eslint-disable-next-line no-lone-blocks
  {/* 9cbd5b0c2d474a35b90ac1a242b0d0df */}
         // eslint-disable-next-line no-lone-blocks
         {/* 77ca9bfef0744275b6724319a9db3b5b */}
  const [progress, setProgress] = useState(0)

  return (
    <div>
        <Router>
            <Navbar/>
            <LoadingBar
              color='#E8E8E8'
              progress={progress}
              height={3}
            />
            <Routes>
                <Route path="/" element={<News setProgress={ setProgress} apiKey={ apiKey}  pageSize={ pageSize} country={ country} category={"general"}/>}/>
                <Route path="/business" element={<News setProgress={ setProgress} apiKey={ apiKey}  pageSize={ pageSize} country={ country} category={"business"}/>}/>
                <Route path="/entertainment" element={<News setProgress={ setProgress} apiKey={ apiKey}  pageSize={ pageSize} country={ country} category={"entertainment"}/>}/>
                <Route path="/health" element={<News setProgress={ setProgress} apiKey={ apiKey}  pageSize={ pageSize} country={ country} category={"health"}/>}/>
                <Route path="/science" element={<News setProgress={ setProgress} apiKey={ apiKey}  pageSize={ pageSize} country={ country} category={"science"}/>}/>
                <Route path="/sports" element={<News setProgress={ setProgress} apiKey={ apiKey}  pageSize={ pageSize} country={ country} category={"sports"}/>}/>
                <Route path="/technology" element={<News setProgress={ setProgress} apiKey={ apiKey}  pageSize={ pageSize} country={ country} category={"technology"}/>}/>
            </Routes>
          </Router>
    </div>
  )
}


export default App;