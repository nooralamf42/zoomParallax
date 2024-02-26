import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import axios from "axios";

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

  const round = useTransform(scrollYProgress, [0, 1], [90, 1]);
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

  const paymentHandler = async () => {
    const {data: { id, amount }} = await axios.post('https://divine-perfumers-backend.vercel.app/createorder', {
      "amount" : 10000,
      "currency" : "INR",
      "receipt" : "testfjkdjsdlfk"
    },{
      headers: {
        "Content-Type": "application/json",
      },
    })


    console.log(amount)
    let options = {
      key: "rzp_test_xOKEYArzgTHRZ0", // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        console.log(response)
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var razor = new window.Razorpay(options);
    razor.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    razor.open()
  };
   


  return (
    <div className="h-screen flex justify-center items-center">
      <button
        className="p-2 border bg-green-400"
        onClick={() => paymentHandler()}
      >
        pay here
      </button>
    </div>
  );
  return (
    <>
      <div className="h-[25vh] sm:h-[50vh] box-border flex justify-center items-center">
        <h1 className="text-[10vw] font-semibold">Scroll to begin</h1>
      </div>
      <div ref={container} className="relative h-[300vh]">
        <div className="h-screen sticky top-0 overflow-hidden">
          {images.map((image, index) => (
            <motion.div
              style={{ scale: image.scale, rotate: round }}
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
