import { registerOverriddenValidators } from '@medusajs/medusa';
import { AdminPostProductsReq as MedusaAdminPostProductsReq } from '@medusajs/medusa/dist/api/routes/admin/products/create-product';
import { IsString, IsOptional } from 'class-validator';

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  model?: string;
}

export function registerCreateProductValidator() {
  registerOverriddenValidators(AdminPostProductsReq);
}
