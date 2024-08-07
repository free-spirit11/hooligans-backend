export default async function () {
  const imports = (await import(
    '@medusajs/medusa/dist/api/routes/store/products/index'
  )) as any;
  imports.allowedStoreProductsFields = [
    ...imports.allowedStoreProductsFields,
    'brand',
    'model',
  ];
  imports.defaultStoreProductsFields = [
    ...imports.defaultStoreProductsFields,
    'brand',
    'model',
  ];
}
