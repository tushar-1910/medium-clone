import React, { useContext, useState } from "react";
import styles from "./Nav2.module.css";
import { Contexts } from "../../../contexts/Contexts";
export const Nav2 = () => {
  // const [filterData, setFilterdata] = useState([]);
  // const handleFilter = (e) => {
  //   const searchWord = e.target.value;
  //   const newFilter = SearchData.filter((val) => {
  //     return val.product_name.includes(searchWord);
  //   });
  //   setFilterdata(newFilter);
  // };

  const handleLogout=()=>{
    // console.log(name)
    alert("name")
  }
  // const cartProducts = useSelector((state) => state.cartProducts);
  

  const { handleshowBag } = useContext(Contexts);
  return (
    <div>
        <div className={styles.btn} onClick={handleshowBag}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z"
              fill="black"
            ></path>
          </svg>
          {/* <span className={styles.cartCount}>{cartProducts.length}</span> */}
        </div>
      </div>
  );
};
