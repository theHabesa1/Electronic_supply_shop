import useFetch from "../../hooks/useFetch";
import "./propertyList.css";


const PropertyList = () => {
  const {data, loading, error} = useFetch("/shops/countByType");
  const images = [
    "https://pub-static.fotor.com/assets/projects/pages/8a67c885-d571-416c-bbec-4db96a77b5d2/orange-electronics-shop-logo-a3dc77e4-b512-4f30-bd77-82cedc42b3f4.jpg",

    "https://img.freepik.com/free-vector/repair-shop-logo-template-design-vector-emblem-design-concept-creative-symbol-icon_316488-1719.jpg?w=2000",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7G9cGYZ_DAaoVOBWV4mohysRNEHiWm6ohNQ&usqp=CAU",
    "https://e7.pngegg.com/pngimages/267/59/png-clipart-blue-and-white-check-logo-illustration-verified-badge-logo-youtube-youtube-blue-angle-thumbnail.png",
    "https://static.vecteezy.com/system/resources/thumbnails/003/170/437/small/computer-accessories-line-icon-free-vector.jpg"



  ]
  return (
    <div className="pList">
      {loading ? (
        "Loading..."
      ) : (
        <>
      {data && images.map((img,i) =>(
      
      <div className="pListItem" key={i}>
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[i]?.type}</h1>
          <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
      </div> 
    ))  
    }

       </> )}
    </div>
  );
};

export default PropertyList;
