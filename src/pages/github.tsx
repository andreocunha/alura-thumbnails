import Head from 'next/head'
import styles from '../styles/Github.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { escolas } from '../mocks/escolas';
import { FormsCursos } from '../components/FormsCursos';

export default function Github() {
  const [escola, setEscola] = useState(escolas[0]);
  const [title, setTitle] = useState('Gerador de Thumbnail da Alura para o Github');
  const [subTitle, setSubTitle] = useState('adaptado por André Cunha');

  return (
    <>
      <Head>
        <title>Thumbnail Github</title>
        <meta name="description" content="Gerar Thumbnails do Github para Alura" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div id="thumbnail-curso" className={styles.areaDownload}>
          <Image src={escola?.imagem} alt={escola?.nome} width={1000} height={500} />
          <div className={styles.infoArea}>
            <h1 style={{ color: escola?.colorTitle }} className={styles.title}>{title}</h1>
            <p style={escola?.colorSubtitle ? { color: escola?.colorSubtitle } : {}} className={styles.subTitle}>{subTitle}</p>
          </div>
        </div>

        <FormsCursos
          title={title}
          setTitle={setTitle}
          subTitle={subTitle}
          setSubTitle={setSubTitle}
          escola={escola}
          setEscola={setEscola}
        />
      </main>
    </>
  )
}
