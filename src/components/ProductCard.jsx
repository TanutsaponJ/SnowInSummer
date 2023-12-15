import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ products }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
      {products.slice(0, 8).map((product) => (
        <div key={product.id}>
          <Link to={`/shop/${product.id}`}>
            <img
              src={product.image}
              alt={product.title} // Use product title as alt text
              className="mx-auto w-full hover:scale-105 transition-all duration-300 "
            />
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{product.title}</h4>

            <div className="flex justify-between">
              <p className="text-black/50">{product.category}</p>
              <p className="font-semibold">${product.price.toFixed(2)}</p>{" "}
              {/* Format price as currency */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductCard;
