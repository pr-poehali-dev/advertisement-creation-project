import { useState } from "react";
import Icon from "@/components/ui/icon";

const JAR_IMG = "https://cdn.poehali.dev/projects/3efe5698-d506-4576-adb7-b7241fc6f8a5/bucket/04108889-1158-47bf-a88a-ac86e548db22.jpg";

const BENEFITS = [
  { icon: "Leaf", title: "100% натуральный состав", desc: "Только брусника и сахар. Никаких консервантов, красителей и ароматизаторов." },
  { icon: "Thermometer", title: "Бережная технология", desc: "Ягоды не варятся — витамины, минералы и нутриенты полностью сохраняются." },
  { icon: "MapPin", title: "Карелия, дикая природа", desc: "Ягоды собраны вручную в нетронутых лесах Карелии, вдали от дорог и городов." },
  { icon: "Award", title: "Органически сертифицировано", desc: "Сертификат RU-BIO-108. Соответствует стандартам ЕС органического земледелия." },
];

const USES = [
  { emoji: "🥞", label: "К блинам и оладьям" },
  { emoji: "🧀", label: "К сырам и мясу" },
  { emoji: "🍵", label: "В чай и морс" },
  { emoji: "🍦", label: "К мороженому" },
  { emoji: "🥗", label: "В салатные заправки" },
  { emoji: "🎂", label: "К выпечке" },
];

export default function Index() {
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  const handleBuy = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F2EA", fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav style={{ backgroundColor: "rgba(247,242,234,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E8DDD0" }} className="sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Cormorant', serif", fontSize: "1.15rem", color: "#2D5016", fontWeight: 600, letterSpacing: "0.04em" }}>
              Ягоды Карелии
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full inline-block mr-1.5" style={{ backgroundColor: "#7DB356" }} />
            <span style={{ fontSize: "0.8rem", color: "#5A7A40" }}>В наличии</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center animate-fade-in-up">
            {/* organic bg blobs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full opacity-25" style={{ background: "radial-gradient(circle, #C0163E 0%, transparent 70%)" }} />
            </div>
            <div className="absolute -top-4 -right-4 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: "#7DB356" }} />
            {/* Decorative dots */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute w-2.5 h-2.5 rounded-full opacity-50" style={{
                backgroundColor: i % 2 === 0 ? "#C0163E" : "#7DB356",
                top: `${[10, 70, 20, 80, 5, 60][i]}%`,
                left: `${[5, 8, 85, 88, 50, 92][i]}%`,
              }} />
            ))}
            <div className="relative animate-float">
              <img
                src={JAR_IMG}
                alt="Неваренье Брусника — Ягоды Карелии"
                className="w-72 sm:w-80 lg:w-96 drop-shadow-2xl object-contain"
                style={{ filter: "drop-shadow(0 20px 40px rgba(192,22,62,0.18))" }}
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(125,179,86,0.12)", color: "#4A7C2F", border: "1px solid rgba(125,179,86,0.3)" }}>
                <Icon name="Leaf" size={12} /> Органически сертифицировано
              </span>
            </div>

            <div className="animate-fade-in-up delay-100 opacity-0-init">
              <h1 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2.8rem, 6vw, 4.2rem)", lineHeight: 1.05, fontWeight: 700, color: "#1E1810" }}>
                Неваренье<br />
                <span style={{ color: "#C0163E", fontStyle: "italic" }}>Брусника</span>
              </h1>
              <p className="mt-3 text-sm" style={{ color: "#6B5A4A", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
                Vaccinium vitis-idaea L.
              </p>
            </div>

            <p className="animate-fade-in-up delay-200 opacity-0-init leading-relaxed" style={{ color: "#4A3D32", fontSize: "1.05rem" }}>
              Дикорастущая брусника из карельских лесов, приготовленная без варки. Вся сила ягоды — в каждой ложке.
            </p>

            {/* tags */}
            <div className="flex flex-wrap gap-2 animate-fade-in-up delay-300 opacity-0-init">
              {["Без варки", "Без консервантов", "Дикоросы", "Карелия", "RU-BIO-108"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(192,22,62,0.08)", color: "#8B1A2E", border: "1px solid rgba(192,22,62,0.2)" }}>
                  {t}
                </span>
              ))}
            </div>

            {/* price & buy */}
            <div className="animate-fade-in-up delay-400 opacity-0-init space-y-4">
              <div className="flex items-baseline gap-3">
                <span style={{ fontFamily: "'Cormorant', serif", fontSize: "2.6rem", fontWeight: 700, color: "#C0163E" }}>490 ₽</span>
                <span style={{ color: "#8B7A6A", fontSize: "0.9rem" }}>/ 200 г</span>
              </div>

              <div className="flex items-center gap-4">
                {/* qty */}
                <div className="flex items-center rounded-xl overflow-hidden" style={{ border: "1.5px solid #D9C9B8" }}>
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-2 text-lg transition-colors hover:bg-white" style={{ color: "#8B1A2E" }}>−</button>
                  <span className="px-4 py-2 font-semibold text-sm" style={{ minWidth: "2.5rem", textAlign: "center" }}>{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="px-3 py-2 text-lg transition-colors hover:bg-white" style={{ color: "#8B1A2E" }}>+</button>
                </div>

                {/* buy btn */}
                <button
                  onClick={handleBuy}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: added ? "linear-gradient(135deg, #4A7C2F, #7DB356)" : "linear-gradient(135deg, #8B1A2E, #C0163E)",
                    boxShadow: added ? "0 8px 24px rgba(74,124,47,0.3)" : "0 8px 24px rgba(192,22,62,0.3)",
                  }}
                >
                  <Icon name={added ? "Check" : "ShoppingCart"} size={18} />
                  {added ? "Добавлено!" : "В корзину"}
                </button>
              </div>

              <div className="flex items-center gap-5 text-sm" style={{ color: "#7A6A5A" }}>
                <span className="flex items-center gap-1.5"><Icon name="Truck" size={14} style={{ color: "#4A7C2F" }} /> Доставка от 1 дня</span>
                <span className="flex items-center gap-1.5"><Icon name="RefreshCw" size={14} style={{ color: "#4A7C2F" }} /> Возврат 14 дней</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #D9C9B8, transparent)" }} />
      </div>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="text-center mb-10">
          <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1E1810" }}>
            Почему <span style={{ color: "#C0163E", fontStyle: "italic" }}>Неваренье</span>?
          </h2>
          <p className="mt-2" style={{ color: "#7A6A5A", fontSize: "0.95rem" }}>Не варенье — это принципиальная разница</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="animate-fade-in-up opacity-0-init rounded-2xl p-6 space-y-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${i * 0.1}s`,
                backgroundColor: "white",
                border: "1px solid #EDE3D8",
                boxShadow: "0 2px 16px rgba(139,26,46,0.05)",
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(192,22,62,0.08)" }}>
                <Icon name={b.icon} fallback="Leaf" size={22} style={{ color: "#C0163E" }} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "1.15rem", fontWeight: 700, color: "#1E1810", lineHeight: 1.2 }}>{b.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#7A6A5A", lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-14" style={{ backgroundColor: "rgba(192,22,62,0.04)", borderTop: "1px solid #EDE3D8", borderBottom: "1px solid #EDE3D8" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1E1810" }}>
              С чем подавать
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {USES.map((u, i) => (
              <div
                key={i}
                className="animate-fade-in-up opacity-0-init flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  backgroundColor: "white",
                  border: "1px solid #EDE3D8",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{u.emoji}</span>
                <span style={{ fontSize: "0.72rem", color: "#7A6A5A", textAlign: "center", lineHeight: 1.3 }}>{u.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPOSITION */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1E1810", marginBottom: "1rem" }}>
              Состав и хранение
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl" style={{ backgroundColor: "white", border: "1px solid #EDE3D8" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#C0163E" }}>Состав</p>
                <p style={{ color: "#4A3D32", lineHeight: 1.7 }}>Брусника дикорастущая, сахар. Без добавок, консервантов и красителей.</p>
              </div>
              <div className="p-5 rounded-2xl" style={{ backgroundColor: "white", border: "1px solid #EDE3D8" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#4A7C2F" }}>Хранение</p>
                <p style={{ color: "#4A3D32", lineHeight: 1.7 }}>До вскрытия: 18 месяцев при t° от +5 до +25°C. После вскрытия хранить в холодильнике до 6 месяцев.</p>
              </div>
              <div className="p-5 rounded-2xl" style={{ backgroundColor: "white", border: "1px solid #EDE3D8" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#7A6A5A" }}>Масса нетто</p>
                <p style={{ color: "#4A3D32" }}>200 г</p>
              </div>
            </div>
          </div>

          {/* bio cert block */}
          <div className="flex flex-col gap-5">
            <div className="p-7 rounded-2xl text-center" style={{ backgroundColor: "white", border: "2px solid rgba(74,124,47,0.25)", boxShadow: "0 4px 24px rgba(74,124,47,0.08)" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(74,124,47,0.1)" }}>
                <span style={{ fontSize: "2rem" }}>🌿</span>
              </div>
              <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "1.4rem", fontWeight: 700, color: "#2D5016", marginBottom: "0.5rem" }}>
                Органически сертифицировано
              </h3>
              <p style={{ color: "#5A7A40", fontSize: "0.875rem", lineHeight: 1.6 }}>
                RU-BIO-108 · Non-EU Agriculture<br />
                Продукт соответствует требованиям органического производства
              </p>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(192,22,62,0.06), rgba(192,22,62,0.02))", border: "1px solid rgba(192,22,62,0.2)" }}>
              <p style={{ fontFamily: "'Cormorant', serif", fontSize: "1.5rem", fontStyle: "italic", color: "#8B1A2E", lineHeight: 1.5, textAlign: "center" }}>
                «Дары карельского леса — <br />в каждой баночке»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #8B1A2E 0%, #C0163E 60%, #A52040 100%)" }}>
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>
            Попробуйте настоящую брусниковую силу
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", marginBottom: "2rem" }}>
            200 г · 490 ₽ · Доставка по всей России
          </p>
          <button
            onClick={handleBuy}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ backgroundColor: "white", color: "#8B1A2E", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
          >
            <Icon name="ShoppingCart" size={20} />
            Заказать сейчас
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ backgroundColor: "#1E1810" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span style={{ fontFamily: "'Cormorant', serif", fontSize: "1.1rem", color: "#C8A882", fontWeight: 600 }}>Ягоды Карелии</span>
          <p style={{ color: "#6B5A4A", fontSize: "0.8rem" }}>© 2026 · 100% натуральный продукт · Карелия, Россия</p>
          <div className="flex items-center gap-4" style={{ color: "#6B5A4A", fontSize: "0.8rem" }}>
            <span className="cursor-pointer hover:text-[#C8A882] transition-colors">Доставка</span>
            <span className="cursor-pointer hover:text-[#C8A882] transition-colors">Контакты</span>
          </div>
        </div>
      </footer>
    </div>
  );
}