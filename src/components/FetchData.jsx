import React, { useEffect, useState } from "react";
import axios from "axios";
import './FetchData.css';

const FetchData = ({ type }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const url = type
        ? `https://newsapi.org/v2/top-headlines?country=in&category=${type}&apiKey=28df1762137c4ee6b77f29d8cb745a25`
        : "https://newsapi.org/v2/top-headlines?country=in&apiKey=28df1762137c4ee6b77f29d8cb745a25";
      const response = await axios.get(url);
      setData(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div className="container fetch-data">
      <h2 className="text-center">
        {type ? <u style={{textTransform: "uppercase"}}>{type}</u> : <u>TOP HEADLINES</u>}
      </h2>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-3"
        style={{ minHeight: "100vh" }}
      >
        {loading ? (
          "Fetching..."
        ) : (
          <>
            {data.map((item) => (
              <div
                key={item.url}
                className="container my-3 p-3"
                style={{
                  width: "800px",
                  boxShadow: "2px 2px 10px silver",
                  borderRadius: "10px",
                }}
              >
                <h5 className="my-2">{item.title}</h5>
                <div className="d-flex justify-content-center align-items-center flex-column my-3">
                  <img
                    src={item.urlToImage}
                    alt="Image not found"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="my-1">{item.description}</p>
                <a className="btn btn-dark my-2" href={item.url} target="_blank">
                  View more
                </a>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FetchData;
