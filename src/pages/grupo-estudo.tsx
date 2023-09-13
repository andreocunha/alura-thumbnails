import Head from 'next/head'
import styles from '../styles/Discord.module.css'
import { useState } from 'react';
// import { escolas } from '../data/escolas';
import { FormsGrupoEstudos } from '../components/FormsGrupoEstudos';
import { chooseFileFromComputer } from '../utils';

export default function StudyGroup() {
  const escolas = [
    {
      id: 1,
      nome: 'Mobile',
      imagem: 'mobile.png',
      colorTitle: '#FFBA05'
    },
    {
      id: 2,
      nome: 'Front-end',
      imagem: 'front-end.png',
      colorTitle: '#6BD1FF'
    },
  ]
  const [escola, setEscola] = useState(escolas[0]);
  const [title, setTitle] = useState('Título em até 45 caracteres para preencher duas linhas');
  const [host, setHost] = useState('André Cunha');
  const [date, setDate] = useState('09/09/2023');
  const [imagePerson, setImagePerson] = useState('/icons/add-photo.png');

  return (
    <>
      <Head>
        <title>Thumbnail Grupo de Estudos</title>
        <meta name="description" content="Gerar Thumbnails para o Discord da Alura" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div id="thumbnail-curso" className={styles.areaDownload}>
          <img src={"/templates/discord/"+escola?.imagem} alt={escola?.nome} className={styles.imageMain}/>
          <div className={styles.infoArea}>
            <h1 style={{ color: escola?.colorTitle }} className={styles.title}>{title}</h1>
            <p className={styles.subTitle1}>{host}</p>
            <p className={styles.subTitle2}>{date}</p>
          </div>

          <img 
            src={imagePerson} 
            alt="Imagem do instrutor" 
            width={450} 
            height={450} 
            className={styles.person} 
            onClick={() => chooseFileFromComputer(setImagePerson)}
          />
        </div>

        <FormsGrupoEstudos
          title={title}
          setTitle={setTitle}
          host={host}
          setHost={setHost}
          date={date}
          setDate={setDate}
          escola={escola}
          setEscola={setEscola}
          escolas={escolas}
        />
      </main>
    </>
  )
}
