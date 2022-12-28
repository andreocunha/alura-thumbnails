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
                src="/icons/alura-mais.png"
                alt="13"
                width={70}
                height={40}
                priority
              />
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}
