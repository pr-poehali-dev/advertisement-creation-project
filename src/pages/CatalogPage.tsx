import { useState, useMemo } from "react";
import Icon from "@/components/ui/icon";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const CatalogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyWild, setOnlyWild] = useState(false);
  const [onlyVitamins, setOnlyVitamins] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== "Все") list = list.filter((p) => p.category === selectedCategory);
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (onlyInStock) list = list.filter((p) => p.inStock);
    if (onlyWild) list = list.filter((p) => p.wild);
    if (onlyVitamins) list = list.filter((p) => p.vitamins);
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [selectedCategory, priceRange, onlyInStock, onlyWild, onlyVitamins, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("Все");
    setPriceRange([0, 3000]);
    setOnlyInStock(false);
    setOnlyWild(false);
    setOnlyVitamins(false);
    setSortBy("default");
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-sm mb-3 text-foreground uppercase tracking-wide">Категория</h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-left px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[var(--berry)] text-white"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <h3 className="font-bold text-sm mb-3 text-foreground uppercase tracking-wide">Цена, ₽</h3>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-24 border border-border rounded-lg px-2 py-1.5 text-sm bg-background text-foreground"
            min={0}
            max={priceRange[1]}
          />
          <span className="text-muted-foreground">—</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="w-24 border border-border rounded-lg px-2 py-1.5 text-sm bg-background text-foreground"
            min={priceRange[0]}
            max={5000}
          />
        </div>
        <input
          type="range"
          min={0}
          max={3000}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full accent-[var(--berry)]"
        />
      </div>

      <div className="border-t border-border pt-5 space-y-3">
        <h3 className="font-bold text-sm mb-3 text-foreground uppercase tracking-wide">Характеристики</h3>
        {[
          { label: "Только в наличии", value: onlyInStock, set: setOnlyInStock },
          { label: "Дикорастущие ягоды", value: onlyWild, set: setOnlyWild },
          { label: "Сохранение витаминов", value: onlyVitamins, set: setOnlyVitamins },
        ].map(({ label, value, set }) => (
          <label key={label} className="flex items-center gap-3 cursor-pointer group">
            <div
              onClick={() => set(!value)}
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                value ? "bg-[var(--berry)] border-[var(--berry)]" : "border-border group-hover:border-[var(--berry)]"
              }`}
            >
              {value && <Icon name="Check" size={12} className="text-white" />}
            </div>
            <span className="text-sm text-foreground/80">{label}</span>
          </label>
        ))}
      </div>

      <button
        onClick={resetFilters}
        className="w-full border border-border text-sm font-semibold py-2.5 rounded-xl hover:bg-secondary transition-colors text-muted-foreground"
      >
        Сбросить фильтры
      </button>
    </div>
  );

  return (
    <div className="bg-[var(--cream)] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-border py-10">
        <div className="container mx-auto px-4">
          <div className="section-divider mb-4"></div>
          <h1 className="text-4xl font-black text-foreground mb-2" style={{ fontFamily: "Raleway" }}>Каталог</h1>
          <p className="text-muted-foreground">Натуральные продукты из дикорастущей брусники Карелии</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex gap-8">
          {/* Sidebar desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
              <FilterPanel />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <div className="text-sm text-muted-foreground">
                Найдено: <span className="font-bold text-foreground">{filtered.length}</span> товаров
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-sm font-semibold border border-border px-4 py-2 rounded-xl hover:bg-secondary transition-colors"
                >
                  <Icon name="SlidersHorizontal" size={15} />
                  Фильтры
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-border rounded-xl px-4 py-2 text-sm bg-white text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--berry)]"
                >
                  <option value="default">По умолчанию</option>
                  <option value="price-asc">Цена: по возрастанию</option>
                  <option value="price-desc">Цена: по убыванию</option>
                </select>
              </div>
            </div>

            {/* Active filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategory !== "Все" && (
                <span className="inline-flex items-center gap-1 bg-[rgba(192,22,62,0.1)] text-[var(--berry)] text-xs font-semibold px-3 py-1 rounded-full">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory("Все")}><Icon name="X" size={10} /></button>
                </span>
              )}
              {onlyInStock && (
                <span className="inline-flex items-center gap-1 bg-[rgba(192,22,62,0.1)] text-[var(--berry)] text-xs font-semibold px-3 py-1 rounded-full">
                  В наличии <button onClick={() => setOnlyInStock(false)}><Icon name="X" size={10} /></button>
                </span>
              )}
              {onlyWild && (
                <span className="inline-flex items-center gap-1 bg-[rgba(58,107,63,0.1)] text-[var(--forest)] text-xs font-semibold px-3 py-1 rounded-full">
                  Дикорастущие <button onClick={() => setOnlyWild(false)}><Icon name="X" size={10} /></button>
                </span>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <Icon name="PackageSearch" size={48} className="text-muted-foreground mx-auto mb-4" />
                <div className="text-xl font-bold text-foreground mb-2">Ничего не найдено</div>
                <p className="text-muted-foreground mb-6">Попробуйте изменить фильтры</p>
                <button onClick={resetFilters} className="btn-berry font-bold px-6 py-2.5 rounded-xl">
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)}></div>
          <div className="relative ml-auto w-80 bg-white h-full overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-lg" style={{ fontFamily: "Raleway" }}>Фильтры</span>
              <button onClick={() => setFilterOpen(false)} className="p-2 rounded-xl hover:bg-secondary">
                <Icon name="X" size={18} />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setFilterOpen(false)}
              className="w-full btn-berry font-bold py-3 rounded-xl mt-6"
            >
              Применить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
