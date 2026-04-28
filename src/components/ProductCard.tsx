import Icon from "@/components/ui/icon";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card card-hover bg-white rounded-2xl overflow-hidden border border-border group">
      <div className="relative overflow-hidden h-56">
        <img
          src={product.image}
          alt={product.name}
          className="product-img w-full h-full object-cover"
        />
        {product.oldPrice && (
          <span className="absolute top-3 left-3 bg-[var(--honey)] text-white text-xs font-bold px-2 py-1 rounded-lg">
            Скидка
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white text-foreground text-sm font-bold px-4 py-2 rounded-xl">
              Нет в наличии
            </span>
          </div>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[var(--berry)] hover:text-white">
          <Icon name="Heart" size={14} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {product.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag-forest text-[10px] font-semibold px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-base text-foreground leading-snug mb-1" style={{ fontFamily: "Raleway" }}>
          {product.name}
        </h3>

        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-1">
          <Icon name="Package" size={12} className="text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{product.weight}</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-xl font-black text-[var(--berry)]" style={{ fontFamily: "Raleway" }}>
              {product.price.toLocaleString("ru-RU")} ₽
            </span>
            {product.oldPrice && (
              <span className="text-xs text-muted-foreground line-through ml-2">
                {product.oldPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>
          <button
            disabled={!product.inStock}
            className="btn-berry text-xs font-bold px-4 py-2 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-1"
          >
            <Icon name="ShoppingCart" size={13} />
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
