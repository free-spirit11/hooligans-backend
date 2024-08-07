import { registerCreateProductValidator } from './admin/extended/products/create-product-validator';
import { registerUpdateProductValidator } from './admin/extended/products/update-product-validator';
import {
  registerAdminGetProductsValidator,
  registerStoreGetProductsValidator,
  registerAdminGetProductValidator,
} from './admin/extended/products/get-products-validator';

// Register validators
registerCreateProductValidator();
registerUpdateProductValidator();
registerAdminGetProductsValidator();
registerStoreGetProductsValidator();
registerAdminGetProductValidator();
