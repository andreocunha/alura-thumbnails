import React from "react";
import styles from '../styles/components/FormsGrupoEstudos.module.css';
import { handleDownload } from "../utils";

interface CardProps {
  id: number;
  nome: string;
  imagem: string;
  styles?: any;
}

interface FormsFiapProps {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  date: string;
  setDate: (date: string) => void;
  listCards: CardProps[];
  selectedCard: CardProps | undefined;
  setSelectedCard: (card: CardProps| undefined) => void;
  onChange?: () => void;
}

export function FormsFiap({ title, setTitle, description, setDescription, date, setDate, listCards, selectedCard, setSelectedCard, onChange }: FormsFiapProps) {
  return (
    <div className={styles.formArea}>
      <div className={styles.formSubArea}>
        <label htmlFor="title">Título</label>
        <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={55}/>

        <label htmlFor="subTitle">Descrição</label>
        <input type="text" placeholder="Host" value={description} onChange={(e) => setDescription(e.target.value)} maxLength={150} />

        <label htmlFor="subTitle">Data</label>
        <input type="text" placeholder="Data" value={date} onChange={(e) => setDate(e.target.value)} maxLength={30} />
      </div>
      <div className={styles.formSubArea}>
        <label htmlFor="tipo-thumbnail">Tipo de thumbnail</label>
        <select 
          name="tipo-thumbnail" 
          id="tipo-thumbnail" 
          onChange={(e) => setSelectedCard(listCards.find((card) => card.id === Number(e.target.value)))}
        >
          {listCards.map((card) => (
            <option key={card.id} value={card.id}>{card.nome}</option>
          ))}
        </select>
        <br />
        <button 
          onClick={() => 
            handleDownload(`${selectedCard?.nome}-${title}`, '#thumbnail-curso')
          }
        >
          Download Imagem
        </button>
      </div>
    </div>
  )

}