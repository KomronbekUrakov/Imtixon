import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchResults.css"

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query")?.toLowerCase() || "";

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);

      const apiUrl = "http://makeup-api.herokuapp.com/api/v1/products.json";

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const filteredResults = data.filter((product: any) =>
          product.name.toLowerCase().includes(query)
        );

        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="container">
      <h2>Search Results</h2>
      <div className="">
        {loading ? (
          <p>Loading...</p>
        ) : searchResults.length > 0 ? (
          <div className="SearchResults">
            {searchResults.map((product, index) => (
              <div className="ProductCard" key={index}>
                <img
                  width={290}
                  height={290}
                  src={product.api_featured_image}
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src =
                          "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq")
                      }
                  alt={product.name}
                />
                <h3>{product.name}</h3>
                <p>Brand: {product.brand}</p>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
