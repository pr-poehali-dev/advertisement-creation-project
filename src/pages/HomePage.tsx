import Icon from "@/components/ui/icon";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const features = [
  { icon: "Leaf", title: "100% натуральный состав", desc: "Никаких консервантов, красителей и искусственных добавок" },
  { icon: "Thermometer", title: "Без термообработки", desc: "Бережная технология сохраняет все витамины, минералы и нутриенты" },
  { icon: "TreePine", title: "Дикорастущие ягоды", desc: "Собираем бруснику в экологически чистых лесах Карелии" },
  { icon: "Award", title: "Живой продукт", desc: "Максимальная польза при минимальной обработке" },
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  const featuredProducts = products.filter((p) => p.inStock).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero-bg min-h-[88vh] flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-in-up opacity-0-init">
            <div className="inline-flex items-center gap-2 bg-[rgba(192,22,62,0.08)] border border-[rgba(192,22,62,0.2)] rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--berry)] animate-pulse"></span>
              <span className="text-[var(--berry)] text-sm font-semibold">Из дикорастущих ягод Карелии</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6" style={{ fontFamily: "Raleway" }}>
              Не<span className="berry-text">варенье</span>
              <br />
              <span className="text-[var(--forest)]">брусника</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              Живой продукт без термообработки. Все витамины, минералы и нутриенты ягод Карелии — в каждой ложке.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Без варки", "Натуральный состав", "Ягоды Карелии"].map((tag) => (
                <span key={tag} className="tag-forest text-sm font-semibold px-3 py-1 rounded-full">
                  ✓ {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("catalog")}
                className="btn-berry text-base font-bold px-8 py-3.5 rounded-2xl flex items-center gap-2 shadow-lg"
              >
                <Icon name="ShoppingBag" size={18} />
                Смотреть каталог
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="border-2 border-[var(--berry)] text-[var(--berry)] hover:bg-[var(--berry)] hover:text-white text-base font-bold px-8 py-3.5 rounded-2xl transition-all"
              >
                О нас
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in opacity-0-init delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[rgba(192,22,62,0.15)] to-[rgba(58,107,63,0.1)] rounded-3xl blur-2xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/3efe5698-d506-4576-adb7-b7241fc6f8a5/files/e7021c9a-9659-478c-8893-7caff959a690.jpg"
                alt="Неваренье из брусники"
                className="relative rounded-3xl w-full shadow-2xl animate-float"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-border">
              <div className="w-10 h-10 bg-[rgba(58,107,63,0.1)] rounded-xl flex items-center justify-center">
                <Icon name="Leaf" size={18} className="text-[var(--forest)]" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Состав</div>
                <div className="text-sm font-bold text-foreground">Только брусника</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-border">
              <div className="text-2xl font-black text-[var(--berry)]" style={{ fontFamily: "Raleway" }}>100%</div>
              <div className="text-xs text-muted-foreground">натуральный</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4"></div>
            <h2 className="text-4xl font-black text-foreground" style={{ fontFamily: "Raleway" }}>
              Почему неваренье?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Обычное варенье уничтожает большинство полезных веществ. Мы нашли способ сохранить всё.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-border bg-[var(--cream)] card-hover text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[rgba(192,22,62,0.1)] to-[rgba(58,107,63,0.08)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={f.icon} size={24} className="text-[var(--berry)]" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "Raleway" }}>{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular products */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-divider mb-4"></div>
              <h2 className="text-4xl font-black text-foreground" style={{ fontFamily: "Raleway" }}>
                Популярные товары
              </h2>
            </div>
            <button
              onClick={() => onNavigate("catalog")}
              className="hidden md:flex items-center gap-2 text-[var(--berry)] font-semibold hover:gap-3 transition-all"
            >
              Весь каталог <Icon name="ArrowRight" size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <button
              onClick={() => onNavigate("catalog")}
              className="btn-berry font-bold px-8 py-3 rounded-2xl"
            >
              Весь каталог
            </button>
          </div>
        </div>
      </section>

      {/* Forest banner */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/3efe5698-d506-4576-adb7-b7241fc6f8a5/files/8efdfffc-5aaa-4f72-98c1-50ee81d3c5cb.jpg"
          alt="Леса Карелии"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Raleway" }}>
              Прямо из лесов<br />Карелии
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Брусника растёт в дикой природе, вдали от городов и дорог. Мы собираем её вручную и бережно перерабатываем.
            </p>
            <button
              onClick={() => onNavigate("about")}
              className="bg-white text-[var(--berry)] font-bold px-8 py-3.5 rounded-2xl hover:bg-[var(--cream)] transition-colors flex items-center gap-2 w-fit"
            >
              <Icon name="TreePine" size={18} />
              Узнать историю
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0a0f] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full berry-gradient flex items-center justify-center">
              <span className="text-white text-sm font-bold">Н</span>
            </div>
            <span className="font-black text-xl" style={{ fontFamily: "Raleway" }}>неваренье брусника</span>
          </div>
          <p className="text-white/50 text-sm mb-4">100% натуральный продукт из дикорастущих ягод Карелии</p>
          <div className="flex justify-center gap-6 text-sm text-white/40">
            <span>© 2024 Неваренье</span>
            <span>·</span>
            <span>Сделано с любовью к природе</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;