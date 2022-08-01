import { useEffect, useState } from "react";
import styled from "styled-components";
const Div = styled.div`
  display: block;
  width: 97%;
  z-index: 10;
  height: 10rem;
  background-color: white;
  margin: 1rem 0.7rem;
  padding-top: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  .card_div1 {
    width: 100%;
    display: flex;
    & > div:nth-child(1) {
      width: 30%;
      background-color: white;
      & > img {
        width: 80%;
      }
    }
    & > div:nth-child(2) {
      width: 60%;
    }
    & > div:nth-child(3) {
      width: 10%;
      background-color: white;
      & > img {
        width: 60%;
      }
    }
  }
  .card_div2 {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    z-index: 10;
    & select {
      border: none;
      font-size: 17px;
      option {
        border: none;
        font-size: 18px;
      }
    }
    & select:avtive {
      border: none;
    }
    & select option:disabled {
      display: none;
    }
  }
`;
export const Cart = () => {

  let [cartProducts,setCartProducts] = useState([]);
  let token = localStorage.getItem("token");
  const getCart = async () => {
    const res = await fetch("http://localhost:8080/getOrder",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": token
      }
    });
    let data = await res.json();
    setCartProducts(data);
  }
  useEffect(() => {
    getCart();
  }
  ,[]);
  const changeQuantity = async (val, id) => {
    let res = await fetch(`http://localhost:8080/updateCart`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'token' : token
      },
      body: JSON.stringify({val,id})
      })
      let data = await res.json();
      getCart();
  };
  const deleteItem = async (id) => {
    let res = await fetch(`http://localhost:8080/deleteOrder`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'token' : token
      },
      body: JSON.stringify({id})
      })
      let data = await res.json();
      getCart();
};
  return (
    <div>
      <>
        {cartProducts.map((el,i) => (
          <Div key={i}>
            <div className="card_div1">
              <div>
                <img src={el.product.image_url} alt="" />
              </div>
              <div>{el.product.name}</div>
              <div>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-128.png"
                  alt="delete"
                  style={{"cursor":"pointer"}}
                  onClick={() => deleteItem(el.product._id)}
                />
              </div>
            </div>
            <hr />
            <div className="card_div2">
              <div>
                Quantity:
                <select
                  name="quan"
                  onChange={(e) => changeQuantity(e.target.value, el.product._id)}
                >
                  <option
                    style={{
                      backgroundColor: "rgb(252, 39, 121)",
                    }}
                  >
                    {+el.quantity}
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>+<option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div>
                <span
                  style={{
                    textDecoration: "line-through",
                    marginRight: "0.5rem",
                  }}
                >
                  ₹{+el.product.mrp * +el.quantity}
                </span>
                <span>₹{+(el.product.price )* +el.quantity}</span>
              </div>
            </div>
          </Div>
        ))}
      </>
    </div>
  );
};
