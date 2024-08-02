import { FileExplorer } from "./FileExplorer";
import React from "react";

export const FileExplorerRoot = ({ initialState }) => {
  const [data, setData] = React.useState(initialState);

  const traverse = (path, tempData) => {
   
    let temp = tempData;
    for (let i = 0; i < path.length - 1; i++) {
      const currentPathIndex = path[i];
      temp = temp[currentPathIndex].child;
    }

    return [temp, path[path.length - 1]];
  };
  const deleteNode = (path) => {
    console.log(path);
    const tempData = [...data];
    const [node, index] = traverse(path, tempData);
    node.splice(index, 1);
    setData(() => tempData);
  };

  const addNode = ({ inputVal, path, type }) => {
    const tempData = [...data];
    const [node, idx] = traverse(path, tempData);
    const newNode = {
      id: new Date(),
      name: inputVal,
    };
    if (type === "folder") {
      newNode.child = [];
    }
    node[idx].child.push(newNode);
    setData(() => tempData);
  };

  return <FileExplorer data={data} deleteNode={deleteNode} addNode={addNode} />;
};
