import Image from "next/image";
import styles from "./page.module.css";
import MainPage from "./pages/MainPage/MainPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <MainPage />
      <footer className={styles.footer}></footer>
    </div>
  );
}
