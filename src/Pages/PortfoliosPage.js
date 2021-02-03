import React from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Tittle from "../Components/Tittle";
import portfolios from "../Components/allportfolios";
import { useState } from "react";

const allCategories = [
  "Wszystko",
  ...new Set(portfolios.map((item) => item.category)),
];
function PortfoliosPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);
  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filterData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filterData);
  };
  return (
    <div className="PortfoliosPage">
      <div className="title">
        <Tittle title={"Twórczość"} span={"Nikifora"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfoliosPage;
