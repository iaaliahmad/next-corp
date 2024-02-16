
import styles from "./page.module.css";
import homeImg from "../../public/images/home.jpg";
import HeroImg from "../components/HeroImg";

export default function Home() {
  return (
    <>
      <HeroImg imgData={homeImg} imgAlt="home img" title="Next Js Home" />
    </>
  );
}
