import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);

  const round = useTransform(scrollYProgress, [0, 1], [90, 1])
  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1670445045282-36648e89af6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "right-[64vw] h-[35vh] w-[25vw] top-[50vh]",
      scale: scale9,
    },
    // main image
    {
      src: "https://images.unsplash.com/photo-1599342166997-58552e91d9f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "w-[25vw] h-[25vh]",
      scale: scale4,
    },
    {
      src: "https://images.unsplash.com/photo-1623742310401-d8057c3c43c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "top-[7vh] right-[63vw] w-[25vw] h-[40vh]",
      scale: scale3,
    },
    {
      src: "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "w-[20vw] h-[40vh] right-[15vw] top-[16vh]",
      scale: scale5,
    },
    {
      src: "https://images.unsplash.com/photo-1695972235528-ceeec1456eef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "top-[7vh] w-[18vw] h-[25vh] right-[37vw]",
      scale: scale6,
    },
    {
      src: "https://images.unsplash.com/photo-1458538977777-0549b2370168?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "w-[20vw] h-[30vh] top-[65vh]",
      scale: scale7,
    },
    {
      src: "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "top-[60vh] w-[25vw] right-[10vw]",
      scale: scale8,
    },
  ];

  return (
    <>
    <div className="h-[25vh] sm:h-[50vh] box-border flex justify-center items-center">
      <h1 className="text-[10vw] font-semibold">Scroll to begin</h1>
    </div>
    <div ref={container} className="relative h-[300vh]">
      <div className="h-screen sticky top-0 overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            style={{ scale: image.scale , rotate: round}}
            key={index}
            className="flex justify-center items-center h-full w-full absolute top-0"
          >
            <div className={`absolute ${image.className}`}>
              <img
                className="object-cover w-full h-full"
                src={image.src}
                alt=""
                srcset=""
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
      <div className="h-[100vh] flex justify-center items-center">
        <h1 className="text-[10vw] font">was it smooth?</h1>
      </div>
    </>
  );
}

export default App;
