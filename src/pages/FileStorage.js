// src/pages/FileStorage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FileStorage = () => {
  return (
    <main className="container my-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">File Storage</h2>
          <div className="card p-4 shadow-sm">
            <h3 className="mb-3">Upload Files</h3>
            <form>
              <div className="mb-3">
                <input type="file" className="form-control" id="fileUpload" />
              </div>
              <button type="submit" className="btn btn-primary">Upload</button>
            </form>
          </div>
          <div className="card mt-4 p-4 shadow-sm">
            <h3 className="mb-3">Your Files</h3>
            <ul className="list-group">
              {/* Placeholder list items; replace with dynamic content */}
              <li className="list-group-item">File 1</li>
              <li className="list-group-item">File 2</li>
              <li className="list-group-item">File 3</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FileStorage;

