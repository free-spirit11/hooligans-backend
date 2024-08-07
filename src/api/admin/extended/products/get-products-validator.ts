import { registerOverriddenValidators } from '@medusajs/medusa';
import { IsString, IsOptional } from 'class-validator';

import { AdminGetProductsParams as MedusaAdminGetProductsParams } from '@medusajs/medusa/dist/api/routes/admin/products/list-products';
import { StoreGetProductsParams as MedusaStoreGetProductsParams } from '@medusajs/medusa/dist/api/routes/store/products/list-products';
import { AdminGetProductParams as MedusaAdminGetProductParams } from '@medusajs/medusa/dist/api/routes/admin/products/get-product';

class AdminGetProductParams extends MedusaAdminGetProductParams {
  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  model?: string;
}

class AdminGetProductsParams extends MedusaAdminGetProductsParams {
  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  model?: string;
}

class StoreGetProductsParams extends MedusaStoreGetProductsParams {
  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  model?: string;
}

export function registerStoreGetProductsValidator() {
  registerOverriddenValidators(StoreGetProductsParams);
}

export function registerAdminGetProductsValidator() {
  registerOverriddenValidators(AdminGetProductsParams);
}

export function registerAdminGetProductValidator() {
  registerOverriddenValidators(AdminGetProductParams);
}
