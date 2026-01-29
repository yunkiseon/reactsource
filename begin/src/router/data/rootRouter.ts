import { createBrowserRouter } from 'react-router-dom';
import productRouter from './productRouter';

// http://localhost:5173/products/~~~~

const rootRouter = createBrowserRouter([
  // {
  //     path:"/products",
  //     Component: Products,
  //     children:productRouter(),
  // },
  // {
  //     path:"/member",
  //     Component: Member,
  //     children:memberRouter(),
  // }
]);
export default rootRouter;
