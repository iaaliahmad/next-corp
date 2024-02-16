import HeroImg from "../../components/HeroImg";
import performanceImg from "../../../public/images/performance.jpg";

export default function Index() {
    return (
        <HeroImg imgData={performanceImg} imgAlt="performance img" title="Next Js Performance" />
    );
}