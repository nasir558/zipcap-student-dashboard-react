import React from "react";
import { Link } from "react-router-dom";

function Summary() {
  return (
    <div>
      <div className={`block w-full summary  __dashboard__my-cart`}>
        <h2 className="title">Summary</h2>
        <div className="block">
          <div className="flex flex-row items-center totalPrice">
            <p className="pticeTitle">Subtotal</p>
            <p className="value ml-auto">$299</p>
          </div>
          <div className="flex flex-row items-center mb-zero totalPrice">
            <p className="pticeTitle">Total</p>
            <p className="value ml-auto">$249</p>
          </div>
          <div className="pl-4 pr-4">
            <button
              type="button"
              className="block w-full c-btn transition-all duration-300 addCartBtn"
            >
              Checkout
            </button>
          </div>
          <p className="formTItle">Coupan</p>
          <div className="pl-4 pr-4 coupanForm">
            <form action="#" method="POST">
              <div className="flex flex-row">
                <input
                  type="text"
                  name="coupan"
                  id="coupan"
                  className="flex-grow lg:flex-grow-0 searchInput bg-transparent"
                  placeholder="Enter Coupan"
                />
                <span>
                  <button
                    type="submit"
                    className="text-center submitBtn transition-all duration-300"
                  >
                    Apply
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="block w-full text-center noData">
        <p className="mt-11px">
          <Link to="/list" className="">
            Browse for more courses
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Summary;
