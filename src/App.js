import React, { useState } from 'react';
import { ChatBubbleOutline } from '@mui/icons-material';
import "./App.css"
import FileUpload from './components/FileUpload';

function App() {
  const [open, setOpen] = useState(false);
  const handleIconClick = () => {
    setOpen((prev) => !prev); // Toggle the state when the icon is clicked
  };
  return (
    // <div>
    //       <iframe src="http://localhost:5173/" allowfullscreen className=""></iframe>

    // </div>
    <div className="page">
    {/* <div className="container">
    {open && <iframe src="http://localhost:5173/" allowfullscreen className="iframe"></iframe>}
      <div className="chatIcon">
        <div className="chatIconDiv" onClick={handleIconClick}>
          <ChatBubbleOutline style={{ fontSize: '30px', color: 'var(--primary)' }} />
        </div>
      </div>
    </div> */}
    <FileUpload/>
  </div>
  );
}

export default App;
