import express from 'express';
import {
  getProducts,
  getPopularProducts,
  getProduct,
  searchProductByName,
  filterProductsByCategories,
} from '../controllers/productsController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/popular', getPopularProducts);
router.get('/searchProducts', searchProductByName);
router.get('/filteredProducts/:catIds/products', filterProductsByCategories);
router.get('/:id', getProduct);

export default router;
