import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.container}>
      <h1>Hello, traveler!</h1>
      <Link href='/notes' className='btn btn-primary'>{"Let's see the test"}</Link>
    </section>
  )
}
