import { Route } from "react-router-dom";
import { ProductTemplate } from "../templates/ProductTemplate";
import { CustomBox } from "../pages/CustomBox/CustomBox";
import { MoneyPacket } from "../pages/MoneyPacket/MoneyPacket";
import { BusinessCard } from "../pages/BusinessCard/BusinessCard";
import { ArchFile } from "../pages/ArchFile/ArchFile";
import { ScratchCard } from "../pages/ScratchCard/ScratchCard";
import { BillBook } from "../pages/BillBook/BillBook";
import { Booklet } from "../pages/Booklet/Booklet";
import { Bookmark } from "../pages/Bookmark/Bookmark";
import { ButtonBadge } from "../pages/ButtonBadge/ButtonBadge";
import { Envelope } from "../pages/Envelope/Envelope";
import { HardCoverMenu } from "../pages/HardCoverMenu/HardCoverMenu";
import { LShapePlasticFolder } from "../pages/LShapePlasticFolder/LShapePlasticFolder";
import { Folder } from "../pages/Folder/Folder";
import { HandFan } from "../pages/HandFan/HandFan";
import { Hanger } from "../pages/Hanger/Hanger";
import { Magnet } from "../pages/Magnet/Magnet";
import { Notepad } from "../pages/Notepad/Notepad";
import { Pillow } from "../pages/Pillow/Pillow";
import { PVCCard } from "../pages/PVCCard/PVCCard";
import { StampChop } from "../pages/StampChop/StampChop";
import { TentCard } from "../pages/TentCard/TentCard";
import { Voucher } from "../pages/Voucher/Voucher";
import { Wobbler } from "../pages/Wobbler/Wobbler";
import { DeskCalendar } from "../pages/DeskCalendar/DeskCalendar";
import { StaticClingWindowSticker } from "../pages/StaticClingWindowSticker/StaticClingWindowSticker";
import { UVDTFSticker } from "../pages/UVDTFSticker/UVDTFSticker";
import { Banner } from "../pages/Banner/Banner";
import { RollUpStand } from "../pages/RollUpStand/RollUpStand";
import { LooseSheet } from "../pages/LooseSheet/LooseSheet";
import { CanvasToteBag } from "../pages/CanvasToteBag/CanvasToteBag";
import { NonWovenBag } from "../pages/NonWovenBag/NonWovenBag";
import { LabelSticker } from "../pages/LabelSticker/LabelSticker";
import { PackagingBox } from "../pages/PackagingBox/PackagingBox";
import { PaperBag } from "../pages/PaperBag/PaperBag";
import { StandingPouch } from "../pages/StandingPouch/StandingPouch";
import { Lanyard } from "../pages/Lanyard/Lanyard";
import { Letterhead } from "../pages/Letterhead/Letterhead";
import { NewspaperPrint } from "../pages/NewspaperPrint/NewspaperPrint";

export const products = [
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
  {
    path: "/business-card",
    title: "business card",
    element: <BusinessCard />,
  },
  {
    path: "/button-badge",
    title: "button badge",
    element: <ButtonBadge />,
  },
  {
    path: "/envelope",
    title: "envelope",
    element: <Envelope />,
  },{
    path: "/folder",
    title: "folder",
    element: <Folder />,
  },{
    path: "/hand-fan",
    title: "hand fan",
    element: <HandFan />,
  },
  {
    path: "/hanger",
    title: "hanger",
    element: <Hanger />,
  },
  {
    path: "/hard-cover-menu",
    title: "hard cover menu",
    element: <HardCoverMenu />,
  },
  {
    path: "/l-shape-plastic-folder",
    title: "l shape plastic folder",
    element: <LShapePlasticFolder />,
  },
  {
    path: "/magnet",
    title: "magnet",
    element: <Magnet />,
  },
  {
    path: "/money-packet",
    title: "money packet",
    element: <MoneyPacket />,
  },
  {
    path: "/notepad",
    title: "notepad",
    element: <Notepad />,
  },
  {
    path: "/pillow",
    title: "pillow",
    element: <Pillow />,
  },
  {
    path: "/pvc-card",
    title: "pVC Card",
    element: <PVCCard />,
  },
  {
    path: "/scratch-card",
    title: "scratch card",
    element: <ScratchCard />,
  },
  {
    path: "/stamp-chop",
    title: "stamp chop",
    element: <StampChop />,
  },
  {
    path: "/tent-card",
    title: "tent card",
    element: <TentCard />,
  },
  {
    path: "/voucher",
    title: "voucher",
    element: <Voucher />,
  },
  {
    path: "/wobbler",
    title: "wobbler",
    element: <Wobbler />,
  },
  {
    path: "/desk-calendar",
    title: "desk calendar",
    element: <DeskCalendar />,
  },
  {
    path: "/static-cling-window-sticker",
    title: "static cling window sticker",
    element: <StaticClingWindowSticker />,
  },
  {
    path: "/uv-dtf-sticker",
    title: "uV DTF sticker",
    element: <UVDTFSticker />,
  },
  {
    path: "/banner",
    title: "banner",
    element: <Banner />,
  },
  {
    path: "/roll-up-stand",
    title: "roll up stand",
    element: <RollUpStand />,
  },
  {
    path: "/loose-sheet",
    title: "loose sheet",
    element: <LooseSheet />,
  },
  {
    path: "/canvas-tote-bag",
    title: "canvas tote bag",
    element: <CanvasToteBag />,
  },
  {
    path: "/non-woven-bag",
    title: "non-Woven Bag",
    element: <NonWovenBag />,
  },
  {
    path: "/label-sticker",
    title: "label sticker",
    element: <LabelSticker />,
  },
  {
    path: "/packaging-box",
    title: "packaging box",
    element: <PackagingBox />,
  },
  {
    path: "/paper-bag",
    title: "paper bag",
    element: <PaperBag />,
  },
  {
    path: "/standing-pouch",
    title: "standing pouch",
    element: <StandingPouch />,
  },
  {
    path: "/lanyard",
    title: "lanyard",
    element: <Lanyard />,
  },
  {
    path: "/letterhead",
    title: "letterhead",
    element: <Letterhead />,
  },
  {
    path: "/newspaper-print",
    title: "newspaper print",
    element: <NewspaperPrint />,
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
