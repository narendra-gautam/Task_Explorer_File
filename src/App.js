import React from "react";
import { FileExplorerRoot } from "./components/FileExplorerRoot";
import { fileStructure } from "./Data";
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Files Explorers in React Task
      </h1>
      
      <hr />
      <div className="file-structure-container">
        <FileExplorerRoot initialState={fileStructure} />
      </div>
    </div>
  );
}