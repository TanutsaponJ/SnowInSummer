import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  // State variables
  const [products, setProducts] = useState([]);
  const [fitterItem, setFitterItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        setProducts(data);
        setFitterItem(data);
      } catch (error) {
        console.log("Error fetching data :", error);
      }
    };

    fetchData();
  }, []);

  // Filter products by category
  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFitterItem(filtered);
    setSelectedCategory(category);
  };

  // Show all products
  const showAll = () => {
    setFitterItem(products);
    setSelectedCategory("all");
  };

  // Sort products
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItem = [...fitterItem];
    switch (option) {
      case "A-Z":
        sortedItem.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItem.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItem.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItem.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFitterItem(sortedItem);
  };

  // Render the component
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="title">Or subscribe to the newsletter</h2>

      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-warp">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItem("Dress")}>Clothing</button>
            <button onClick={() => filterItem("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItem("Bag")}>Bag</button>
          </div>

          <div className="flex justify-end mb-4 rounded-md">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <div>
              <select
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                className="bg-black text-white px-2 py-2 rounded-sm"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to low</option>
              </select>
            </div>
          </div>
        </div>

        <ProductCard products={fitterItem} />
      </div>
    </div>
  );
};

export default Products;
