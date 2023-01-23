import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from '../styles/Readme.module.css'
import FileSaver from 'file-saver';

import { exampleReadme } from "../mocks/readme";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function Readme() {
  const [value, setValue] = useState<string | undefined>(exampleReadme);

  async function downloadReadme() {
    const file = new Blob([value!], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(file, 'README.md');
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-color-mode', 'dark')
  }, [])

  return (
    <div className={styles.container} data-color-mode="dark">
      <MDEditor 
        value={value} 
        onChange={setValue} 
        height={600}
        enableScroll={false}
        style={{
          width: '100%',
        }}
      />
      <button className={styles.downloadButton} onClick={downloadReadme}>Download</button>
    </div>
  );
}