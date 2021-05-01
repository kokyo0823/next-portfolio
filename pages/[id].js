import Link from 'next/link'
import styles from "../styles/Home.module.scss";

// post：getStaticPropsから取得したデータ
export default ({ portfolio }) => {
  return (
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
  )
}

export const getStaticPaths = async () => {
  // 外部APIエンドポイントを呼び出しデータ取得
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://kokyo-portfolio.microcms.io/api/v1/portfolio', key)
    .then(res => res.json())
    .catch(() => null);

  // 事前ビルドしたいパスを指定
  const paths = data.contents.map((post) => ({
    params: {
      // ファイル名と合わせる ※文字列指定
      id: post.id.toString(),
    },
  }))
  // paths：事前ビルドするパス対象を指定するパラメータ
  // fallback：事前ビルドしたパス以外にアクセスしたときのパラメータ true:カスタム404Pageを表示 false:404pageを表示
  return { paths, fallback: false }
}

// paramsには上記pathsで指定した値が入る（1postずつ）
export const getStaticProps = async ({params}) => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch(`https://kokyo-portfolio.microcms.io/api/v1/portfolio/${params.id}`, key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      portfolio: data,
    },
  };
};
