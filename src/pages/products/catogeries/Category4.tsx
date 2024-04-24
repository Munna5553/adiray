import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import clothes from "../../../assets/clothes.png"
import apple from "../../../assets/apple.jpeg"

const Category4 = () => {
    return (
        <section className="pt-40">
            <div className="relative h-64 overflow-hidden group">
                <img className="object-cover h-full w-full group-hover:scale-150 ease-in-out duration-1000" src={clothes} alt="clothes" />
                <div className="absolute inset-0 overflow-hidden bg-transparent backdrop-blur-sm z-10  flex items-center justify-center">
                    <h1 className="text-[clamp(30px,2.5vw,4rem)] font-semibold">
                        Our <span className="text-[#FFC900]">Products/</span> catogery4
                    </h1>
                </div>
            </div>

            <section className="flex justify-center items-center py-20 px-5">
                <div className="flex flex-wrap gap-8 justify-center">
                    <Link to={""} className="relative w-80 h-96">
                        <img className="w-full h-full object-cover rounded-lg" src={clothes} alt="clothes" />
                        <Button className="absolute bottom-0 bg-blue-700 text-white w-full">
                            product 1
                        </Button>
                    </Link>

                    <Link to={""} className="relative w-80 h-96">
                        <img className="w-96 h-96 object-cover rounded-lg" src={apple} alt="apple" />
                        <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">product 2</Button>
                    </Link>

                    <Link to={""} className="relative w-80 h-96">
                        <img className="w-96 h-96 object-cover rounded-lg" src={clothes} alt="clothes" />
                        <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">product 3</Button>
                    </Link>

                    <Link to={""} className="relative w-80 h-96">
                        <img className="w-96 h-96 object-cover rounded-lg" src={apple} alt="apple" />
                        <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">product 4</Button>
                    </Link>
                    <Link to={""} className="relative w-80 h-96">
                        <img className="w-full h-full object-cover rounded-lg" src={clothes} alt="clothes" />
                        <Button className="absolute bottom-0 bg-blue-700 text-white w-full">
                            product 5
                        </Button>
                    </Link>

                    <Link to={""} className="relative w-80 h-96">
                        <img className="w-96 h-96 object-cover rounded-lg" src={apple} alt="apple" />
                        <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">product 6</Button>
                    </Link>

                    <Link to={""} className="relative w-80 h-96">
                        <img className="w-96 h-96 object-cover rounded-lg" src={clothes} alt="clothes" />
                        <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">product 7</Button>
                    </Link>

                    <Link to={""} className="relative w-80 h-96">
                        <img className="w-96 h-96 object-cover rounded-lg" src={apple} alt="apple" />
                        <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">product 8</Button>
                    </Link>
                    <Link to={""} className="relative w-80 h-96">
                        <img className="w-96 h-96 object-cover rounded-lg" src={apple} alt="apple" />
                        <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">product 9</Button>
                    </Link>
                </div>
            </section>
        </section>
    )
}

export default Category4;