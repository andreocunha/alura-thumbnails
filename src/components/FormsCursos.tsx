import React from "react";
import { escolas } from "../mocks/escolas";
import styles from '../styles/components/FormsCursos.module.css';
import { handleDownload } from "../utils";

interface Escola {
  id: number;
  nome: string;
  imagem: string;
  color: string;
}

interface FormCursosProps {
  title: string;
  setTitle: (title: string) => void;
  subTitle: string;
  setSubTitle: (subTitle: string) => void;
  escola: Escola;
  setEscola: (escola: Escola) => void;
}

export function FormsCursos({ title, setTitle, subTitle, setSubTitle, escola, setEscola }: FormCursosProps) {
  return (
    <div className={styles.formArea}>
      <div className={styles.formSubArea}>
        <label htmlFor="title">Título</label>
        <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={70}/>

        <label htmlFor="subTitle">Subtítulo</label>
        <input type="text" placeholder="Subtítulo" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} maxLength={57} />
      </div>
      <div className={styles.formSubArea}>
        <label htmlFor="escola">Escola</label>
        <select 
          value={escola?.nome} 
          onChange={(e) => setEscola(escolas?.find((escola) => escola.nome === e.target.value)!)}
        >
          {escolas.map((escola) => (
            <option key={escola.nome} value={escola.nome}>{escola.nome}</option>
          ))}
        </select>
        <br />
        <button 
          onClick={() => 
            handleDownload(`${escola?.nome}-${title}`, '#thumbnail-curso')
          }
        >
          Download Imagem
        </button>
      </div>
      <a href="/readme" target="_blank" rel="noreferrer">Fazer o README online</a>
    </div>
  )

}