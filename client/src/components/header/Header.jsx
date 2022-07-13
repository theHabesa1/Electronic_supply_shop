import {
  faHashtag,
  faMobile,
  faMoneyBill,
  faPercent,
  faPerson,
  faPlane,
  faTaxi,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    quantity: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const {user} = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faMobile} />
            <span>Products</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMoneyBill} />
            <span>Deals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPercent} />
            <span>Discounts</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMobile} />
            <span>New Items</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Others</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            { !user &&
              <button className="headerBtn">
                Sign in / Register
                </button>
              }
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faMobile} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Search for a product"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faHashtag} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.quantity} quantity `}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">quantity</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.quantity <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("quantity", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.quantity}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("quantity", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
