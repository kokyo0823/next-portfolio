import Link from 'next/link';
import Image from 'next/image'
import { Layout, ContactForm } from "../components";
import styles from "../styles/Home.module.scss";


export default function Home({portfolio}) {
  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.home__top} id="top">
          <div className={styles.home__top_content}>
            <img className={styles.home__top_content_img} src="/image/topImg.svg" alt=""/>
            <div className={styles.home__top_content_title}>
              <h1>Portfolio</h1>
              <p>エンジニア大学生のポートフォリオサイト</p>
            </div>
          </div>
        </div>

        <div className={styles.home__about}　id="about">
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

        <div className={styles.home__works} id="works">
          <h2>Works</h2>
          <div className={styles.home__works_content}>
            {portfolio.map(portfolio => (
              <div className={styles.item}>
                <Link href={portfolio.url}>
                  <div className={styles.item_main}>
                    <div className={styles.item_main_left}>
                      <p className={styles.title}>{portfolio.title}</p>
                      <p>{portfolio.description}</p>
                      <div className={styles.tec}>
                        <p className={styles.tec_title}>採用技術</p>
                        <p className={styles.tex_text}>{portfolio.technology}</p>
                      </div>
                    </div>
                    <div
                    className={styles.item_main_right}
                    >
                      <img src={portfolio.image.url} alt="Picture of the author"/>
                    </div>
                  </div>
                </Link>
                <Link href={portfolio.url}>
                  <a className={styles.item_sub}>{portfolio.url}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.home__skills} id="skills">
          <h2>Skills</h2>
          <div className={styles.home__skills_content}>
            <div className={styles.item}>
              <div className={styles.item_left}>
                <img
                  className={styles.item_left_img_multi}
                  src="/image/html-5.svg"
                />
                <img
                  className={styles.item_left_img_multi}
                  src="/image/css-3.svg"
                />
              </div>
              <p className={styles.item_right}>
                見やすく、編集のしやすいコーディングができます。bemの設計規則を使った素早いコーディングが得意です。
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.item_left}>
                <img
                  className={styles.item_left_img}
                  src="/image/javascript.svg"
                />
              </div>
              <p className={styles.item_right}>
                基本的な文法や操作は理解しており、Reactやjqueryなどのライブラリを使うことができます。
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.item_left}>
                <img
                  className={styles.item_left_img}
                  src="/image/react.svg"
                />
              </div>
              <p className={styles.item_right}>
                外部のAPIを使った簡単なWEBアプリを作ることができます。
              </p>
            </div><div className={styles.item}>
              <div className={styles.item_left}>
                <img
                  className={styles.item_left_img}
                  src="/image/nextjs-icon.svg"
                />
              </div>
              <p className={styles.item_right}>
                外部のAPIを使った簡単なWEBアプリを作ることができます。
              </p>
            </div><div className={styles.item}>
              <div className={styles.item_left}>
                <img
                  className={styles.item_left_img}
                  src="/image/php-alt.svg"
                />
              </div>
              <p className={styles.item_right}>
                基本的な文法や操作は理解しており、WordPressを利用する際によく用います。
              </p>
            </div><div className={styles.item}>
              <div className={styles.item_left}>
                <img
                  className={styles.item_left_img}
                  src="/image/wordpress-icon.svg"
                />
              </div>
              <p className={styles.item_right}>
                今まで多くホームページの作成、修正をしており、さまざまな機能の実現が可能です。
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.home__contact}>
          <h2>Contact</h2>
          <ContactForm />
        </div> */}
      </div>
    </Layout>
  );
}


export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://kokyo-portfolio.microcms.io/api/v1/portfolio', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      portfolio: data.contents,
    },
  };
};
