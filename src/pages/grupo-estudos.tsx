import Head from 'next/head'
import styles from '../styles/GrupoEstudos.module.css'
import { useEffect, useState } from 'react';
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

  const types = [
    {
      id: 0,
      nome: 'Discord',
      folder: 'discord',
      styles: {
        areaDownload: {
          height: '385px',
        },
        title: {
          fontSize: '1.8rem',
          top: '8.5rem',
          left: '11.5rem',
        },
        subTitle1: {
          fontSize: '1.2rem',
          bottom: '6.4rem',
          left: '11.5rem',
        },
        subTitle2: {
          fontSize: '1.2rem',
          bottom: '4.4rem',
          left: '11.5rem',
        },
        person: {
          width: '233px',
          height: '233px',
          bottom: '75px',
          right: '112px',
        },
        icons: {
          height: '15px',
          marginRight: '8px',
        }
      }
    },
    {
      id: 1,
      nome: 'Feed Insta e LinkedIn',
      folder: 'insta-linkedin',
      styles: {
        areaDownload: {
          height: '500px',
        },
        title: {
          fontSize: '1.7rem',
          top: '10.5rem',
          left: '2rem',
          maxWidth: '430px',
        },
        subTitle1: {
          fontSize: '1rem',
          bottom: '12.4rem',
          left: '2rem',
        },
        subTitle2: {
          fontSize: '1rem',
          bottom: '10.9rem',
          left: '2rem',
        },
        person: {
          width: '146px',
          height: '146px',
          bottom: '75px',
          right: '57px',
          borderBottomRightRadius: '18px',
        },
        icons: {
          height: '12px',
          marginRight: '6px',
        }
      }
    },
    {
      id: 2,
      nome: 'Stories Instagram',
      folder: 'stories',
      styles: {
        areaDownload: {
          height: '500px',
        },
        title: {
          fontSize: '0.95rem',
          top: '10rem',
          left: '1.5rem',
          maxWidth: '230px',
        },
        subTitle1: {
          fontSize: '0.8rem',
          bottom: '16.2rem',
          left: '1.5rem',
        },
        subTitle2: {
          fontSize: '0.8rem',
          bottom: '14.85rem',
          left: '1.5rem',
        },
        person: {
          width: '154.5px',
          height: '154.5px',
          bottom: '66px',
          right: '63.5px',
          borderBottomRightRadius: '10px',
        },
        icons: {
          height: '10px',
          marginRight: '4px',
        }
      }
    }
  ]

  const [escola, setEscola] = useState(escolas[0]);
  const [selectedType, setSelectedType] = useState(types[0].id);
  const [title, setTitle] = useState('Título em até 45 caracteres para preencher duas linhas');
  const [host, setHost] = useState('André Oliveira Cunha');
  const [date, setDate] = useState('09/09/2023 - 15:00');
  const [imagePerson, setImagePerson] = useState('/icons/add-photo.png');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsImageLoaded(true), 1000);
  }, [])

  return (
    <>
      <Head>
        <title>Thumbnail Grupo de Estudos</title>
        <meta name="description" content="Gerar Thumbnails para o Discord da Alura" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!isImageLoaded && <div className={styles.placeholder}>Carregando...</div>}
        <div 
          id="thumbnail-curso" 
          className={styles.areaDownload} 
          style={isImageLoaded ? {...types[selectedType].styles.areaDownload} : { display: 'none' }}
        >
          <img 
            src={`/templates/${types[selectedType].folder}/${escola?.imagem}`} 
            alt={escola?.nome} 
            className={styles.imageMain}
            onLoad={() => setTimeout(() => setIsImageLoaded(true), 500)}
            style={isImageLoaded ? {} : { display: 'none' }}
          />

          <div className={styles.infoArea}>
            <h1 
              style={{ 
                color: escola?.colorTitle,  
                ...types[selectedType].styles.title
              }}
              className={styles.title}>
                {title}
            </h1>
            <p 
              className={styles.subTitle1}
              style={types[selectedType].styles.subTitle1}
            >
              <img
                src='/icons/person.svg'
                alt='Ícone de pessoa'
                style={types[selectedType].styles.icons}
              />
              Host: {host}
            </p>
            <p 
              className={styles.subTitle2}
              style={types[selectedType].styles.subTitle2}
            >
              <img
                src='/icons/calendar.svg'
                alt='Ícone de calendário'
                style={types[selectedType].styles.icons}
              />
              Data: {date}
            </p>
          </div>

          <img 
            src={imagePerson} 
            alt="Imagem do instrutor" 
            width={450} 
            height={450} 
            className={styles.person} 
            style={{...types[selectedType].styles.person, borderColor: escola?.colorTitle}}
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
          types={types}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          onChange={() => setIsImageLoaded(false)}
        />
      </main>
    </>
  )
}
