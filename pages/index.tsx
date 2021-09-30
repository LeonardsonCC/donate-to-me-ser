import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>Nice</p>
      <button>Connect wallet</button>
    </div>
  );
};

export default Home;
