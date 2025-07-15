import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4];
  return (
    <div className="grid md:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link className="btn btn-primary" to='/products'>Our Products</Link>
        </div>
      </div>
      <div className="lg:carousel carousel-center bg-neutral rounded-box max-w-md space-x-6 p-6 hidden h-[28rem]">
        {images.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <img src={image} className="rounded-box h-full w-80" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
