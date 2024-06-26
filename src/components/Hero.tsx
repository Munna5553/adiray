import styles from "../styles/hero.module.css"
import bg from "../assets/bg.png";
import toolbox from "../assets/toolbox.png"
import { Link } from "react-router-dom";
import { Button } from "./Button";


const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.bg} src={bg} alt="background" />
            <div className={styles.overlay}>
                <div className="flex flex-col items-center lg:items-start gap-6">
                    <h1 className="text-start leading-none text-[clamp(35px,3.5vw,5rem)] font-bold">
                        Explore Our <br /> <span className={styles.underline}>Products</span>
                    </h1>
                    <p className="text-slate-500 text-base font-semibold text-center lg:text-start max-w-md">
                        Transform your business with our high-quality raw materials, tailored to your unique needs.
                    </p>
                    <Button className="text-white bg-blue-800 hover:bg-blue-900">View More</Button>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Link to={""}>
                            <img className="w-[280.13px] h-[195.28px] left-[172.20px] top-[218.42px]" src={toolbox} />
                        </Link>

                        <Link to={""}>
                            <img className="w-[118.38px] h-[142.05px] left-[38.35px] top-[218.42px] " src={toolbox} />
                        </Link>
                    </div>

                    <div className="flex gap-2">
                        <Link to={""}>
                            <img className="w-[142.24px] h-[142.24px] left-[267.57px] top-[61.71px]" src={toolbox} />
                        </Link>

                        <Link to={""}>
                            <img className="w-[252.10px] h-[193.95px] left-0 top-[10px]" src={toolbox} />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;