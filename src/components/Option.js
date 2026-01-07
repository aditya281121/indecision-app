import React from 'react';

// const option = (props) => {
//      return (<div>
//           {props.optionText}
//           <button onClick={(e) => {
//             props.handleDeleteOption(props.optionText);
//           }}> remove </button>
//         </div>)
// }

const option = (props) => (<div>
          {props.optionText}
          <button onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}> remove </button>
        </div>);

export default option;