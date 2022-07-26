import React from "react";
import CartSummary from "./cartDetails";
import ItemPic from "../../assets/images/item-pic.png";
import PurchaserPic from "../../assets/images/p-pic.png";
import Layout from "../Layout/Layout";

function Index() {
  const dataCartItems = [
    {
      itemPic: ItemPic,
      description:
        "Adobe Lightroom, Photo editing masterclass, Edit your photos like a pro with Adobe Lightroom",
      purchaserPic: PurchaserPic,
      purchaserName: "Ainee",
      oldPrice: "$45",
      NewPrice: "$150",
    },
    {
      itemPic: ItemPic,
      description:
        "Adobe Lightroom, Photo editing masterclass, Edit your photos like a pro with Adobe Lightroom",
      purchaserPic: PurchaserPic,
      purchaserName: "Ainee",
      oldPrice: "$45",
      NewPrice: "$150",
    },
    {
      itemPic: ItemPic,
      description:
        "Adobe Lightroom, Photo editing masterclass, Edit your photos like a pro with Adobe Lightroom",
      purchaserPic: PurchaserPic,
      purchaserName: "Ainee",
      oldPrice: "$45",
      NewPrice: "$150",
    },
  ];
  return (
    <Layout>
      <div>
        <div className="wishList">
          <h3 className="titleDashboard mb-28px text-2xl font-semibold pb-26px">
            Cart
          </h3>
          <div className="cart">
            <CartSummary data={dataCartItems} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
