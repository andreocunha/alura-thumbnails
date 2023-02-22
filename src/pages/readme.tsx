import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from '../styles/Readme.module.css'
import FileSaver from 'file-saver';
import { socket } from "../services/socketio";
import { AgentMarkdown } from "agentmarkdown"

import { exampleReadme } from "../mocks/readme";
import Swal from "sweetalert2";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function Readme() {
  const [value, setValue] = useState<string | undefined>('');

  async function downloadReadme() {
    const file = new Blob([value!], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(file, 'README.md');
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-color-mode', 'dark')

    // get the query params
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const subtitle = urlParams.get('subtitle');
    const escola = urlParams.get('escola');    


    // when user connect to socket
    // verify if the query params are not null
    if (!title && !subtitle && !escola) return;

    const promptText = `
    Faça um readme seguindo o exemplo, mas para o conteúdo 
    """
    titulo: ${title}
    subtitulo: ${subtitle}
    escola: ${escola}
    """
    Sempre mostre no começo do readme: ![Descricao da sua imagem](https://raw.githubusercontent.com/andreocunha/upload_files_test/main/exemplo-thumb.png)

    Exemplo:
    ${exampleReadme}
    `
    socket.emit('readme', promptText);

    
    socket.on('response', async (response: string) => {
      // const markdown = await AgentMarkdown.produce(response);
      // concat with the last value
      // if not undefined or '[DONE]'
      if (response && response !== '[DONE]') {
        setValue((prev) => prev + response)
      }
    })

    socket.on('wait', (result) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: true,
      })
      
      Toast.fire({
        icon: 'info',
        title: result
      })
    })
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