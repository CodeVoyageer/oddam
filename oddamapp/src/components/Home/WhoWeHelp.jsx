import React, { useEffect, useState, useCallback } from "react";
import Decoration from "../../assets/Decoration.svg";
import "../../scss/HomeStyle/whoWeHelp.scss";
import { supabase } from "../../supabase";

const WhoWeHelp = () => {
  const [fetchData, setFetchData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("fundacje");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const getProducts = useCallback(async () => {
    try {
      let { data, error } = await supabase
        .from("fundacjom")
        .select("*")
        .eq("type", selectedCategory);
      if (error) throw error;
      if (data != null) {
        setFetchData(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }, [selectedCategory]);

  useEffect(() => {
    getProducts();
  }, [selectedCategory, currentPage, getProducts]);

  useEffect(() => {
    getProducts();
  }, [selectedCategory, currentPage, getProducts]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fetchData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(fetchData.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <>
      <section className="whoWeHelp-section" id="whoWeHelp">
        <div className="whoWeHelp-heading-block">
          <h1 className="whoWeHelp-heading">Komu pomagamy?</h1>
          <img src={Decoration} alt="decoration" />
          <div className="three-btns">
            <button
              className="whoWeHelp-btn"
              onClick={() => setSelectedCategory("fundacje")}
            >
              Fundacjom
            </button>
            <button
              className="whoWeHelp-btn"
              onClick={() => setSelectedCategory("organizacjom")}
            >
              Organizacjom pozarządowym
            </button>
            <button
              className="whoWeHelp-btn"
              onClick={() => setSelectedCategory("zbiorkom")}
            >
              Lokalnym zbiórkom
            </button>
          </div>
          <p className="whoWeHelp-description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
          {currentItems.map((item) => (
            <div className="collection-containers" key={item.id}>
              <div className="collection-container">
                <h1 className="collection-container-heading">{item.title}</h1>
                <div className="collection-block">
                  <p className="collection-block_description">
                    {item.description}
                  </p>
                  <p className="collection-block-description2">{item.things}</p>
                </div>
              </div>
            </div>
          ))}
          {totalPages > 1 && (
            <div className="page-numbers">
              {pageNumbers.map((number) => (
                <div
                  className={`number ${number === currentPage ? "active" : ""}`}
                  key={number}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WhoWeHelp;
