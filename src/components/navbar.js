// import React, { Component } from 'react'



import React from 'react'
const navbar=()=>{
  return (
    <div>
           <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsCenter</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/business">Business</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/entertainment">Entertainment</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/health">Health</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/science">Science</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/sports">Sports</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/technology">Technology</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
      </div>

  )
}

export default navbar;



// export default class navbar extends Component {
//   render() {
//     return (
//       <div>
//            <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
//               <div className="container-fluid">
//                 <a className="navbar-brand" href="/">NewsCenter</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                       <a className="nav-link active" aria-current="page" href="/">Home</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link" href="/business">Business</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link" href="/entertainment">Entertainment</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link" href="/health">Health</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link" href="/science">Science</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link" href="/sports">Sports</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link" href="/technology">Technology</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//       </div>
//     )
//   }
// }
