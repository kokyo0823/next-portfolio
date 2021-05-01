import Link from 'next/link';
import Image from 'next/image'
import { Layout, ContactForm } from "../components";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.home__about}>
          <h2>About</h2>
          <div className={styles.home__about_content}>
            <Image
            className={styles.home__about_content_img}
            src="/image/profile.JPG"
            alt="Picture of the author"
            width={200}
            height={200}
            />
            <p>山口県出身、岡山の大学在学中の学生エンジニア。<br/>
            大学は工学部情報系に所属。大学2年からWEB制作に没頭し、さまざまなサイトの構築・デザインに携わる。<br/>
            現在はフロントエンドやバックエンドなど幅広く勉強中。<br/>
            趣味は写真・サイクリング・ガジェット集め・古着などなど。</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
