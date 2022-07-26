import React from "react";
import Summary from "./cartSummary";
import EmptyCartIcon from "../../assets/images/dashboard/empty-cart.png";
import CancelIcon from "../../assets/images/cancel.png";
import { Link } from "react-router-dom";

function Details({ data }) {
  const pathName = window.location.pathname;
  return (
    <div>
      {!!data ? (
        <div className={`block w-full`}>
          <div className={`max-w-1100px mx-auto`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {data.map((content, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row space-x-0 space-y-6 md:space-x-6 md:space-y-0 items-center cart-item"
                  >
                    <img
                      src={content.itemPic}
                      className="item-pic order-2 md:order-1"
                      alt=""
                    />
                    <div className="order-3 md:order-2">
                      <p className="description">{content.description}</p>
                      <div className="flex space-x-4 items-center purchaser">
                        <img src={content.purchaserPic} alt="" />
                        <p>{content.purchaserName}</p>
                      </div>
                    </div>
                    <p className="price order-4 md:order-3">
                      <span className="newPrice">{content.oldPrice}</span>
                      <span className="oldPrice line-through">
                        {content.NewPrice}
                      </span>
                    </p>
                    <div className="self-end md:self-start order-1 md:order-4">
                      <Link to="/">
                        <img
                          src={CancelIcon}
                          className="delete-item"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Summary />
              </div>
            </div>
          </div>
        </div>
      ) : (
        pathName === "/my-cart" && (
          <div className="block w-full pt-24 pb-24 text-center noData">
            <img
              src={EmptyCartIcon}
              alt=""
              className="w-36 h-auto mx-auto"
            />
            <p className="mt-56px">Your cart is empty</p>
            <p className="mt-11px">
              <Link to="/list" className="">
                Browse Courses Now
              </Link>
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default Details;
