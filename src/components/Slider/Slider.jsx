import HeroSlider, { Slide,Overlay } from "hero-slider";
import { Link } from 'react-router-dom'



const imagenes = [
    {
        id: 1,
        img1: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    {
        id: 2,
        img1: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 3,
        img1: 'https://images.unsplash.com/photo-1560252719-59e35a3bbc6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 4,
        img1: 'https://images.unsplash.com/photo-1582731595896-f959c4fb1509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80'
    },   
    ]

const Slider = () => {
  return (
        <HeroSlider
            height={"100vh"}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                console.debug(
                    "onBeforeSliding(previousSlide, nextSlide): ",
                    previousSlide,
                    nextSlide
                ),
                onAfterSliding: (nextSlide) =>
                console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}>

    <Overlay>
        <div className="flex justify-center flex-col items-center h-full">
            <div>
                <h1 className="text-white text-7xl font-bold leading-relaxed drop-shadow-lg">Ficha lo mejor de <br/> hardware para tu pc</h1>
            </div>
            <div className="mt-10">
                <Link to="/product" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Ver productos
                </Link>
                
            </div>
        </div>
    </Overlay>

            {
            imagenes?.map((img) =>(

                <Slide
                    key={img.id}
                    shouldRenderMask
                    background={{
                        backgroundImageSrc: img.img1
                    }}
                />
            ))

            }
        </HeroSlider>
  );
}

export default Slider;