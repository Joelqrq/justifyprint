import { Route } from "react-router-dom";
import { ProductTemplate } from "../templates/ProductTemplate";
import { CustomBox } from "../pages/CustomBox/CustomBox";
import MoneyPacket from "../pages/MoneyPacket/MoneyPacket";
import { BusinessCard } from "../pages/BusinessCard/BusinessCard";
import { ArchFile } from "../pages/ArchFile/ArchFile";
import { ScratchCard } from "../pages/ScratchCard/ScratchCard";
import { BillBook } from "../pages/BillBook/BillBook";
import { Booklet } from "../pages/Booklet/Booklet";
import { Bookmark } from "../pages/Bookmark/Bookmark";

export const products = [
  {
    path: "/business-card",
    title: "business card",
    element: <BusinessCard />,
  },
  {
    path: "/money-packet",
    title: "money packet",
    element: <MoneyPacket />,
  },
  {
    path: "/custom-box",
    title: "custom box",
    element: <CustomBox />,
  },
  {
    path: "/arch-file",
    title: "arch file",
    element: <ArchFile />,
  },
  {
    path: "/scratch-card",
    title: "scratch card",
    element: <ScratchCard />,
  },
  {
    path: "/bill-book",
    title: "bill book",
    element: <BillBook />,
  },
  {
    path: "/booklet",
    title: "booklet",
    element: <Booklet />,
  },
  {
    path: "/bookmark",
    title: "bookmark",
    element: <Bookmark />,
  },
].sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }

  // names must be equal
  return 0;
});

export const getProductRoutes = () =>
  products.map((product) => (
    <Route
      element={product.element ?? <ProductTemplate data={product} />}
      path={product.path}
      key={product.title}
    />
  ));
