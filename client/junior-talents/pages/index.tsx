import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Junior Talents</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
            <ul>
              <li className={styles['nav-item']}>
                <Link href='/login'>Вход</Link>
              </li>
              <li className={styles['nav-item']}>
                <Link href='/register'>Регистрация</Link>
              </li>
            </ul>
          </nav>
      </header>
      <main className={styles.main}>        
        <h1 className={styles.title}>
          <span className={styles['junior']}>Джуниър</span> <span className={styles['talents']}>Таланти</span>
        </h1>

        <p>Топ джуниъри събрани на едно място</p>
        <p>Възможност за всички джуниъри да се докажат като им се даде възможност да работят по реални проекти на клиенти</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
