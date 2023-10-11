import { configureStore } from "@reduxjs/toolkit"

import tshirtsSlice from "../Tshirts/tshirtsSlice";
import shirtsSlice from '../Shirts/shirtsSlice';

export default configureStore({
    reducer: {
      tshirt : tshirtsSlice,
      shirt : shirtsSlice,
    }
});