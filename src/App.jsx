import { useState } from "react";
import { uploadFile } from "./firebase/firebase";


function App() {

  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    uploadFile(file)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name=""
        id=""
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button>Upload</button>
    </form>
  );
}

export default App;
