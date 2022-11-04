
import loading from './MisteriousMist.gif'

import React from 'react'

const Spinner =()=>{
  return (
    <div className='text-center'>
            <img src={loading} alt="Loading..."/>
      </div>
  )
}

export default Spinner;


// export default class spinner extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//             <img src={loading} alt="Loading..."/>
//       </div>
//     )
//   }
// }
