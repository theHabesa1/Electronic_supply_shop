import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data, loading, error} = useFetch("/shops/countByCity?cities=addis abeba,adama,dire dawa")

  console.log(data)
  return (
    <div className="featured">
        {loading ? (
          "Loading..."
        ) : ( 
          <>
      <div className="featuredItem">
        <img
          src="https://addisstandard.com/wp-content/uploads/2021/11/Finfinee-oromia-1-768x1024.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Addis Abeba</h1>
          <h2>{data[0]} shops</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cityadama.gov.et/sites/default/files/landmark/adama2.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Adama</h1>
          <h2>{data[1]} Shops</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/01/32/f4/7f/dire-dawa-ethiopia.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dire Dawa</h1>
          <h2>{data[2]} shops</h2>
        </div>
      </div>
        </> )}
    </div>
  );
};

export default Featured;
