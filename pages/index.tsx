import type { NextPage } from "next";
import ConnectWallet from "../components/ConnectWallet";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>Nice</p>
      <ConnectWallet />
    </div>
  );
};

export default Home;
