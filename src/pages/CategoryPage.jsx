import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function CategoryPage() {
  const { slug } = useParams(); // 👈 category name
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/news")
      .then(res => {
        const filteredNews = res.data.filter(
          item => item.category === slug
        );
        setNews(filteredNews);
      })
      .catch(err => console.log(err));
  }, [slug]);

  return (
    <div className="max-w-6xl mx-auto px-5">
      <h1 className="text-2xl font-bold mb-5 capitalize">
        {slug} News
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {news.map(item => (
          <Link to={`/news/${item.slug}`}>
            <div key={item.id} className=" flex flex-row gap-2 items-center border border-gray-400 rounded-lg p-3 shadow hover:-translate-y-1 duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="rounded mb-3 w-30 h-20 md:w-40 md:h-30 hover:scale-105 duration-300" />
              <div>
                <h2 className="font-semibold md:mb-3 hover:text-blue-500">{item.title}</h2>
                <p className="text-sm text-gray-600 hover:text-gray-800">
                  {item.shortDescription}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {news.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          এই ক্যাটাগরিতে কোনো নিউজ নেই
        </p>
      )}
    </div>
  );
}

export default CategoryPage;
