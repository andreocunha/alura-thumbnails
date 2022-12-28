import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/AluraMais.module.css'
import { handleDownload } from '../utils';

export default function AluraMais() {
  const [imageIcon, setImageIcon] = useState('/icons/react.png');
  const [imagePerson, setImagePerson] = useState('/icons/person.png');
  const [title, setTitle] = useState('Ícones e animações em apps com React Native');

  const chooseFileFromComputer = (setImage: any) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => handleUploadImage(event, setImage);
    input.click();
  }
  
  function handleUploadImage(event: any, setImage: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    }
    reader.readAsDataURL(file);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Thumbnail Alura+</title>
        <meta name="description" content="Gerar Thumbnails para Alura+" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.thumbnailArea} id="thumbnail-alura-mais">
        <Image src="/icons/alura-mais.png" alt="Alura+" width={100} height={60} className={styles.aluraMaisIcon} />
        <Image src={imageIcon} alt="React" width={150} height={150} className={styles.icon} 
          onClick={() => chooseFileFromComputer(setImageIcon)}
        />
        <Image src={imagePerson} alt="André Cunha" width={450} height={450} className={styles.person} 
          onClick={() => chooseFileFromComputer(setImagePerson)}
        />

        <p className={styles.title}>{title}</p>
      </div>

      <div className={styles.formArea}>
        <textarea placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => handleDownload(title, '#thumbnail-alura-mais')}>Baixar Imagem Alura+</button>
      </div>
    </div>
  )
}