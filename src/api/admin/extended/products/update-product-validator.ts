import { registerOverriddenValidators } from '@medusajs/medusa';
import { AdminPostProductsProductReq as MedusaAdminPostProductsProductReq } from '@medusajs/medusa/dist/api/routes/admin/products/update-product';
import { IsString, IsOptional } from 'class-validator';

class AdminPostProductsProductReq extends MedusaAdminPostProductsProductReq {
  @IsString()
  @IsOptional()
  custom_field?: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  model?: string;
}

export function registerUpdateProductValidator() {
  registerOverriddenValidators(AdminPostProductsProductReq);
}
