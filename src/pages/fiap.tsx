import Head from 'next/head'
import styles from '../styles/Fiap.module.css'
import { useEffect, useState } from 'react';
import { FormsFiap } from '../components/FormsFiap';
import { fiapCards } from '../data/fiap';

export default function Fiap() {


  const [selectedCard, setSelectedCard] = useState(fiapCards[0]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsImageLoaded(true), 500);
  }, [])

  useEffect(() => {
    setIsImageLoaded(false);
    setTitle(selectedCard.textExample[0]);
    setDescription(selectedCard.textExample[1]);
    setDate(selectedCard.textExample[2]);
  }, [selectedCard])

  return (
    <>
      <Head>
        <title>Thumbnails FIAP</title>
        <meta name="description" content="Gerar Thumbnails para a FIAP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!isImageLoaded && <div className={styles.placeholder}>Carregando...</div>}
        <div 
          id="thumbnail-curso" 
          className={styles.areaDownload} 
          style={isImageLoaded ? {} : { display: 'none' }}
        >
          <img 
            src={`/templates/fiap/${selectedCard?.imagem}`} 
            alt={selectedCard?.nome} 
            className={styles.imageMain}
            onLoad={() => setTimeout(() => setIsImageLoaded(true), 500)}
            style={isImageLoaded ? {} : { display: 'none' }}
          />

          <div className={styles.infoArea}>
            <h1 style={selectedCard.styles.title} className={styles.title}>
              {title}
            </h1>
            <p className={styles.subTitle1} style={selectedCard.styles.subTitle1}>
              {description}
            </p>
            <p className={styles.subTitle2} style={selectedCard.styles.subTitle2}>
              {date}
            </p>
          </div>
        </div>

        <FormsFiap
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          listCards={fiapCards}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard as any}
        />
      </main>
    </>
  )
}
