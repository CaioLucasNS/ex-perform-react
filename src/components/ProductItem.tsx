import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

/**
 * Quando usar o memo?
 *
 * 1. Pure Funcional Components (componentes puros);
 *  - são funções que dados os mesmos parâmetros, sempre retornam o mesmo resultado;
 * 2. Renders too often (componentes que renderizam demais);
 * 3. Re-renders with same props;
 * 4. Medium to big size components;
 *  - o memo não trás muitos ganhos quando aplicado em componentes muito pequenos.
 */
