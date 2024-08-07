import React, { useState } from 'react';
import type { WidgetConfig, ProductDetailsWidgetProps } from '@medusajs/admin';
import { useAdminProduct, useAdminUpdateProduct } from 'medusa-react';
import { FaEdit, FaSave } from 'react-icons/fa';
import './product-widget.css';

const ProductWidget = ({ product }: ProductDetailsWidgetProps) => {
  const {
    product: usedProduct,
    isLoading,
    error,
  } = useAdminProduct(product.id);
  const updateProduct = useAdminUpdateProduct(product.id);

  const [isEditing, setIsEditing] = useState(false);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  // Update local state when usedProduct changes
  React.useEffect(() => {
    if (usedProduct) {
      setBrand(usedProduct.brand || '');
      setModel(usedProduct.model || '');
    }
  }, [usedProduct]);

  const handleSave = async () => {
    try {
      await updateProduct.mutateAsync({ brand, model });
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating product:', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <div className='product-widget'>
      <h1>
        Product Details
        <button
          onClick={() => setIsEditing(!isEditing)}
          className='edit-button'
        >
          {isEditing ? <FaSave onClick={handleSave} /> : <FaEdit />}
        </button>
      </h1>
      <div className='details-item'>
        <h2>Brand</h2>
        {isEditing ? (
          <input
            type='text'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        ) : (
          <h2>{usedProduct.brand}</h2>
        )}
      </div>
      <div className='details-item'>
        <h2>Model</h2>
        {isEditing ? (
          <input
            type='text'
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        ) : (
          <h2>{usedProduct.model}</h2>
        )}
      </div>
    </div>
  );
};

export const config: WidgetConfig = {
  zone: 'product.details.before',
};

export default ProductWidget;
