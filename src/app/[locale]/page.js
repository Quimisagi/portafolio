import Image from "next/image";
import styles from "../page.module.css";
import Main from "../../../components/Main.js";

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{t('title')}</h1>
        <Main />
      </main >
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
