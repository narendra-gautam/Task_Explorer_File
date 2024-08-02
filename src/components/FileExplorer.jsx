import { useState } from "react";

export const FileExplorer = ({ data, deleteNode, addNode, path = [] }) => {
  const [showCreateInput, setCreateInput] = useState(null);
  const [createInputVal, setCreateInputVal] = useState("");

  const handleCreate = (path, type, index) => {
    setCreateInput(() => ({
      path,
      type,
      index,
    }));
  };

  const handleAddNode = () => {
    addNode({
      inputVal: createInputVal,
      ...showCreateInput,
    });
    setCreateInput(null);
    setCreateInputVal("");
  };

  return (
    <div className="level">
      {data.map((node, index) => {
        const currentPath = [...path, index];
        return (
          <div className="node-container" key={node.id}>
            <span className="node-name">{node.name}</span>
            <span>
              <button onClick={() => deleteNode(currentPath)}>Delete</button>
              {node.child && (
                <>
                  <button
                    onClick={() => handleCreate(currentPath, "file", index)}
                  >
                    Create File
                  </button>
                  <button
                    onClick={() => handleCreate(currentPath, "folder", index)}
                  >
                    Create Folder
                  </button>
                </>
              )}
            </span>
            {showCreateInput && showCreateInput.index === index && (
              <div style={{ margin: "10px 0" }}>
                <input
                  value={createInputVal}
                  onChange={(e) => setCreateInputVal(e.target.value)}
                />
                <button onClick={handleAddNode}>Add</button>
              </div>
            )}

            {node.child && (
              <FileExplorer
                data={node.child}
                deleteNode={deleteNode}
                path={currentPath}
                addNode={addNode}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
