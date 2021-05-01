import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.body}>
      <Head>
        <meta
          name="description"
          content="杉山誇京のポートフォリオサイト"
        />
        <title>ポートフォリオサイト</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;700&display=swap');
        </style>
      </Head>
      <div className={styles.leftBack}></div>
      <header className={styles.header}>
        {/* <div className={styles.header_line}></div> */}
        <ul>
          <li><Link href="#top"><a><p>●</p>Top</a></Link></li>
          <li><Link href="#about"><a><p>●</p>About</a></Link></li>
          <li><Link href="#works"><a><p>●</p>Works</a></Link></li>
          <li><Link href="#skills"><a><p>●</p>Skills</a></Link></li>
          {/* <li><p>●</p>Contact</li> */}
        </ul>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p className={styles.footer_thank}>Thank you for watching</p>
        <p className={styles.footer_copy}>@2021 Kokyo Sugiyama</p>
      </footer>
    </div>
  )
}
export default Layout
