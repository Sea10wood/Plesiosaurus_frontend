import React, { useState } from "react";

interface FileNode {
  name: string;
  isDirectory: boolean;
  children?: FileNode[];
}

const FileNodeComponent: React.FC<{ node: FileNode }> = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleToggle}>
        {node.isDirectory && (isOpen ? "[-] " : "[+] ")}
        {node.name}
      </div>
      {isOpen && node.children && (
        <div style={{ marginLeft: "20vw", textAlign: "left" }}>
          {node.children.map((child, index) => (
            <FileNodeComponent key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const fileTree: FileNode = {
  name: "/root",
  isDirectory: true,
  children: [
    {
      name: "/usr",
      isDirectory: true,
      children: [
        { name: "/user/host", isDirectory: false },
        { name: "/user/lib", isDirectory: false },
      ],
    },
    {
      name: "/bin",
      isDirectory: false,
    },
    {
      name: "/home",
      isDirectory: true,
      children: [
        { name: "/user/Sea10", isDirectory: false },
        {
          name: "/lib",
          isDirectory: true,
          children: [
            { name: "/lib/Sea5", isDirectory: false },
            { name: "/lib/Sea1", isDirectory: false },
          ],
        },
      ],
    },
  ],
};

const FileTree: React.FC = () => {
  return <FileNodeComponent node={fileTree} />;
};

export default FileTree;
