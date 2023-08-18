import express from 'express';
import {
  getCategories,
  getCategoryProducts,
  filterCategoriesByIds,
} from '../controllers/categoriesController.js';
const router = express.Router();

router.get('/', getCategories);
router.get('/:id/products', getCategoryProducts);
router.get('/filteredCategories/:ids', filterCategoriesByIds);

export default router;
