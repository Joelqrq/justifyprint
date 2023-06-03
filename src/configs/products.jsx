import { Route } from 'react-router-dom';
import { ProductTemplate } from '../templates/ProductTemplate';
import { CustomBox } from '../pages/CustomBox/CustomBox';
import MoneyPacket from '../pages/MoneyPacket/MoneyPacket';

const products = [
  {
    path: '/business-card',
    title: 'business card',
    description: 'some description',
    carouselFolder: 'business-card',
    price: 'from $2',
  },
  {
    path: '/money-packet',
    title: 'money packet',
    element: <MoneyPacket />,
  },
  {
    path: '/custom-box',
    title: 'custom box',
    element: <CustomBox />,
  },
];

export const getProductRoutes = () =>
  products.map((product) => (
    <Route
      element={product.element ?? <ProductTemplate data={product} />}
      path={product.path}
      key={product.title}
    />
  ));
