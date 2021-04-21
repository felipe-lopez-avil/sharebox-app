import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Hero from '../components/Sections/Hero'
import Onboarding from '../components/Sections/Onboarding'
import Bestsellers from '../components/Sections/Bestsellers'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>ShareboxApp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero/>

        <div className={styles.sharing}>
          #SharingIsCaring
        </div>

        <Onboarding/>
        
        <Bestsellers/>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sharebox 2021©
          </a>
        </footer>
      </div>
    </Layout>
    
  )
}
