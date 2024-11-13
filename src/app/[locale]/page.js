import Image from "next/image";
import styles from "../page.module.css";
import Main from "../../../components/Main.js";
import LanguageSelector from "../../../components/LanguageSelector.js";

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LanguageSelector />
        <Main />
      </main >
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
