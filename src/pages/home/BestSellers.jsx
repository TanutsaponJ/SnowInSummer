import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const bestseller = products.filter((item) => item.status === "Best Sellers");
  //   console.log(bestseller);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div>
        <h2 className="title">Best sellers</h2>
        <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per{" "}
        </p>
      </div>

      {/* Best seller product cards */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestseller.map((products) => (
            <SwiperSlide key={products.id}>
              <Link to={`/shop/${products.id}`}>
                <img
                  src={products.image}
                  alt={products.title} // Use product title as alt text
                  className="mx-auto w-full hover:scale-105 transition-all duration-300 "
                />
              </Link>
              <div className="mt-4 px-4">
                <h4 className="text-base font-semibold mb-2">
                  {products.title}
                </h4>

                <div className="flex justify-between">
                  <p className="text-black/50">{products.category}</p>
                  <p className="font-semibold">
                    ${products.price.toFixed(2)}
                  </p>{" "}
                  {/* Format price as currency */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
