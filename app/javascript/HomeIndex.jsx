import { HelloReact } from "./components/HelloReact"
import React from 'react';
import ReactDOM from 'react-dom';

export const PostIndex = () => {

  return (
    <>
      <HelloReact />
    </>
  );
};

ReactDOM.render(<PostIndex />, document.getElementById('postIndex'));