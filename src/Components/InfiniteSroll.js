import React, { useEffect, useRef, useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  // Fetch API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
        .then(res => res.json())
        .then(newData => {
            setData(prev => [...prev, ...newData]);
        })
        .catch(err => console.error(err));
}, [page]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={{ padding: "10px", border: "1px solid #ccc" }}>
          {item.title}
        </div>
      ))}

      {/* Loader */}
      <div ref={loaderRef} style={{ height: "50px", textAlign: "center" }}>
        Loading...
      </div>
    </div>
  );
};

export default InfiniteScroll;