import express from "express";
import { deleteProducts, getAllProducts, getProductById, updateProducts } from "../controllers/Product.js";
import { createProducts } from "../controllers/Product.js";
const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProducts);
router.get(`/:id`, getProductById);
router.patch(`/:id`, updateProducts);
router.delete('/:id',deleteProducts);

export default router;