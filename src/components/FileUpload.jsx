import React, { useState } from 'react';
function FileUpload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('i need a loan');
  const [userId, setUserId] = useState('12345'); // Example user ID, replace as needed
  const [uploadStatus, setUploadStatus] = useState('');
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('text', text);
    formData.append('user_id', userId); // Add user ID to form data
    try {
      const response = await fetch('http://127.0.0.1:8000/chatbot', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        setUploadStatus('Upload successful!');
        console.log('Success:', data);
      } else {
        setUploadStatus('Upload failed!');
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      setUploadStatus('Upload failed!');
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            File:
            <input type="file" onChange={handleFileChange} />
          </label>
        </div>
        <div>
          <label>
            Text:
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            User ID:
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}
export default FileUpload;