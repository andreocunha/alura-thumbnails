import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from '../styles/Readme.module.css'
import FileSaver from 'file-saver';
import { comecoReadme, exampleReadme, fimReadme, templateReadme } from "../data/readme";
import Swal from "sweetalert2";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function Readme() {
  const [temporaryValue, setTemporaryValue] = useState<string>('');
  const [value, setValue] = useState<string | undefined>(exampleReadme);

  async function downloadReadme() {
    const file = new Blob([value!], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(file, 'README.md');
  }

  async function makeReadmeAI(title: string, subtitle: string, escola: string) {
    // use sweetalert to get textarea value
    const { value: detalhes } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Detalhes do curso',
      inputPlaceholder: 'Digite os detalhes do curso',
      inputAttributes: {
        'aria-label': 'Digite os detalhes do curso',
        'maxlength': '1000'
      },
      showCancelButton: true
    })

    if (detalhes) {
      setTemporaryValue(comecoReadme)

    const prompt = `
Siga exatamente o template abaixo para criar o readme com base nas informações abaixo:
titulo: ${title}
subtitulo: ${subtitle}
escola: ${escola}
detalhes: ${detalhes}

Template:
${templateReadme}
`

    fetch("https://api.openai.com/v1/chat/completions", {
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content": prompt
          }
        ]
      }),
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        const result = data?.choices[0]?.message?.content || '';
        console.log(result);
        setTemporaryValue(result + fimReadme);
      });
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-color-mode', 'dark')

    // get the query params
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const subtitle = urlParams.get('subtitle');
    const escola = urlParams.get('escola');
    if (title && subtitle && escola) {
      makeReadmeAI(title, subtitle, escola);
    }
  }, [])

  useEffect(() => {
    if (temporaryValue) {
      // add letter by letter
      let i = 0;
      let valueToSet = value;
      const interval = setInterval(() => {
        valueToSet = valueToSet + temporaryValue[i];
        setValue(valueToSet);
        i++;
        if (i === temporaryValue.length - 1) {
          clearInterval(interval);
        }
      }, 10);
    }
  }, [temporaryValue])

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