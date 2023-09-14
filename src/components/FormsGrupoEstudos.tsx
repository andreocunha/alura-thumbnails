import React from "react";
import styles from '../styles/components/FormsGrupoEstudos.module.css';
import { handleDownload } from "../utils";

interface Escola {
  id: number;
  nome: string;
  imagem: string;
  colorTitle: string;
  colorSubtitle?: string;
}

interface TypeProps {
  id: number;
  nome: string;
  folder: string;
}

interface FormsGrupoEstudosProps {
  title: string;
  setTitle: (title: string) => void;
  host: string;
  setHost: (host: string) => void;
  date: string;
  setDate: (date: string) => void;
  escola: Escola;
  setEscola: (escola: Escola) => void;
  escolas: Escola[];
  types: TypeProps[];
  selectedType: number;
  setSelectedType: (id: number) => void;
}

export function FormsGrupoEstudos({ title, setTitle, host, setHost, date, setDate, escola, setEscola, escolas, types, selectedType, setSelectedType }: FormsGrupoEstudosProps) {
  return (
    <div className={styles.formArea}>
      <div className={styles.formSubArea}>
        <label htmlFor="title">Título</label>
        <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={55}/>

        <label htmlFor="subTitle">Host</label>
        <input type="text" placeholder="Host" value={host} onChange={(e) => setHost(e.target.value)} maxLength={30} />

        <label htmlFor="subTitle">Data</label>
        <input type="text" placeholder="Data" value={date} onChange={(e) => setDate(e.target.value)} maxLength={30} />
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
        <label htmlFor="tipo">Tipo</label>
        <select 
          value={selectedType} 
          onChange={(e) => {setSelectedType(Number(e.target.value))}}
        >
          {types.map((type) => (
            <option key={type.nome} value={type.id}>{type.nome}</option>
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
    </div>
  )

}