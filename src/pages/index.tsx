import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Thumbnails Alura</title>
        <meta name="description" content="Site para gerar Thumbnails para Alura" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.logoArea} >
        <a href="https://alura.com.br" target="_blank" rel="noopener noreferrer">
          <Image src="/alura-logo.svg" alt="Logo Alura" width={120} height={60} />
        </a>
      </div>
      <main className={styles.main}>
        <h1>Escolha um tipo de Thumbnail</h1>
        <div className={styles.center}>
          <Link href="/github">
            <div className={styles.icon}>
              <Image
                src="/icons/github.png"
                alt="13"
                width={40}
                height={40}
                priority
              />
            </div>
          </Link>
          <Link href="/alura+">
            <div className={styles.icon}>
              <Image
                src="/icons/alura-plus.png"
                alt="13"
                width={44}
                height={40}
                priority
              />
            </div>
          </Link>
          <Link href="/grupo-estudos">
            <div className={styles.icon}>
              <Image
                src="/icons/study-group.png"
                alt="13"
                width={40}
                height={40}
                priority
              />
            </div>
          </Link>
        </div>
        <footer className={styles.footer}>
          <a
            href="https://github.com/andreocunha/alura-thumbnails"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feito por André Cunha
          </a>
        </footer>
      </main>
    </>
  )
}
