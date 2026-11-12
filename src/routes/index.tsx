import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import banner from "@/assets/banner-365.png.asset.json";
import showcase from "@/assets/recipes-showcase.png.asset.json";
import bShop from "@/assets/bonus-shopping-list.webp.asset.json";
import bMeal from "@/assets/bonus-meal-plan.webp.asset.json";
import bSub from "@/assets/bonus-substitutions.webp.asset.json";
import revBrownie from "@/assets/review-brownie.jpg.asset.json";

const CHECKOUT_BASIC = "https://pay.wiapy.com/Ci6of1B5M1ll?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=";
const CHECKOUT_PREMIUM = "https://pay.wiapy.com/3IdUSNfye7KS?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "365 Receitas Sem Açúcar, Sem Glúten e Sem Lactose | Chef Luana" },
      { name: "description", content: "Bolos, pães, sobremesas, lanches e refeições leves e deliciosas. Acesso imediato + 3 bônus exclusivos." },
      { property: "og:title", content: "365 Receitas Sem Açúcar, Sem Glúten e Sem Lactose" },
      { property: "og:description", content: "Receitas práticas para comer bem todos os dias sem abrir mão do prazer à mesa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const goPlans = () => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <button onClick={goPlans} className="btn-cta mx-auto max-w-md text-base sm:text-lg">
      {children} <span aria-hidden>→</span>
    </button>
  );
}

function Title({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`font-display text-center text-3xl font-black leading-tight sm:text-4xl ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {children}
    </h2>
  );
}

const benefits = [
  ["🍰", "365 receitas doces e salgadas"], ["🌿", "Sem açúcar, sem glúten e sem lactose"],
  ["📖", "Receitas simples e ilustradas"], ["🍽️", "Café, almoço, jantar e sobremesa"],
  ["🪶", "Mais leveza sem perder o sabor"], ["👩‍🍳", "Fáceis para quem não tem prática"],
  ["✨", "Adeus à mesmice e ao sem graça"], ["📱", "Acesso no celular ou impresso"],
];
const gallery = ["https://i.imgur.com/54fZgju.png", "https://i.imgur.com/JCYrYsk.png", "https://i.imgur.com/BWTdeN8.png", "https://i.imgur.com/8zjkqxs.png"];
const prints = ["https://i.imgur.com/c9fOqG0.png", "https://i.imgur.com/1KLUKCZ.png", "https://i.imgur.com/ag5ojSh.png", "https://i.imgur.com/FHc94su.png"];
const recipes = [
  ["https://i.imgur.com/9XqdBay.png", "Bolo de Cenoura com Cobertura Cremosa", "Fofinho, doce na medida e sem açúcar refinado"],
  ["https://i.imgur.com/1yPajyN.png", "Pão Caseiro Sem Glúten", "Macio, simples e perfeito para o café da manhã"],
  ["https://i.imgur.com/cY8OF7l.png", "Panqueca Leve de Banana", "Rápida, nutritiva e sem lactose"],
  ["https://i.ibb.co/ynNxVxN0/Lasanha-vegan-Made-by-Choices.webp", "Lasanha Cremosa Sem Glúten", "Confortável, saborosa e perfeita para a família"],
  ["https://i.imgur.com/wS19SoM.png", "Brigadeiro Sem Açúcar", "Cremoso, chocolatudo e sem culpa"],
  ["https://i.imgur.com/tql5cat.png", "Torta Salgada de Frango", "Prática, leve e ótima para qualquer refeição"],
  ["https://i.ibb.co/8g3T7TDc/Small-Batch-Brownies-Eats-Delightful.webp", "Brownie Fit de Chocolate", "Úmido, intenso e sem farinha de trigo"],
  ["https://i.ibb.co/WNVfYtVy/Cookies-Veganos-com-peda-os-de-Chocolate-Cozinha-Roman.webp", "Cookie Crocante Sem Glúten", "Crocante por fora, macio por dentro"],
];
const categories = [
  ["Café da Manhã Leve", 50], ["Pães, Bolos e Massas Sem Glúten", 55], ["Almoços e Jantares Práticos", 70],
  ["Lanches e Salgados Saudáveis", 50], ["Sobremesas Sem Açúcar", 65], ["Receitas Sem Lactose Cremosas", 35],
  ["Molhos, Cremes e Acompanhamentos", 25], ["Bebidas, Vitaminas e Extras", 15],
] as const;
const forYou = [
  "Quer comer melhor sem viver de comida sem graça", "Sente que açúcar, glúten ou lactose pesam na sua rotina",
  "Quer preparar receitas leves, bonitas e saborosas em casa", "Cansou de procurar opções diferentes e nunca saber o que fazer",
  "Precisa de ideias rápidas para o café, almoço, jantar e sobremesa", "Quer agradar a família mesmo fazendo receitas mais equilibradas",
];
const bonuses = [
  [bShop.url, "Lista de Compras Essenciais", "Ingredientes certos para montar sua despensa sem erro.", "R$ 29,90"],
  [bMeal.url, "Cardápio de 30 Dias", "Ideias prontas para variar suas refeições o mês inteiro.", "R$ 39,90"],
  [bSub.url, "Guia de Substituições", "Trocas simples para manter sabor, textura e cremosidade.", "R$ 24,90"],
];
const reviews = [
  ["AM", "Ana M.", "12 de março de 2025", "Eu achava que receita sem açúcar ficava sem graça, mas o bolo de cenoura me surpreendeu. Ficou fofinho e todo mundo aqui em casa comeu sem perceber diferença.", "https://i.imgur.com/UY37i9U.png", 34],
  ["JS", "Juliana S.", "3 de abril de 2025", "Comprei por causa das sobremesas e já fiz brownie, brigadeiro e panqueca. Tudo simples e gostoso. Agora tenho opção quando bate vontade de doce.", revBrownie.url, 28],
  ["CF", "Camila F.", "28 de março de 2025", "Eu sempre ficava meio pesada depois de comer pão e massa. As versões sem glúten do livro me ajudaram muito a variar o café da manhã e os lanches.", "https://i.imgur.com/3xXF7tP.png", 51],
  ["PR", "Patricia R.", "18 de fevereiro de 2025", "Minha filha tem restrição com lactose e eu vivia sem ideia do que fazer. Agora consigo preparar bolo, torta e até receitas cremosas que ela ama.", "https://i.imgur.com/z8Xaea1.png", 62],
  ["RB", "Renata B.", "5 de abril de 2025", "As receitas são bem explicadas e não pedem ingredientes impossíveis. Fiz a torta salgada e virou receita fixa aqui em casa.", "https://i.imgur.com/Hfbl72C.png", 47],
  ["LC", "Larissa C.", "21 de março de 2025", "Os cookies sem glúten ficaram perfeitos. Crocantes por fora, macios por dentro. Meu marido nem acreditou que eram sem açúcar refinado.", "https://i.imgur.com/zGqQ3BH.png", 39],
] as const;
const delivery = [["📱", "No Celular", "Acesse onde estiver"], ["💻", "No Computador", "Tela grande pra cozinhar"], ["🖨️", "Para Imprimir", "Seu caderno de receitas"], ["⚡", "Envio Imediato", "Liberado em segundos"]];
const faq = [
  ["As receitas ficam gostosas de verdade?", "Sim. As receitas foram pensadas para manter sabor, textura e aparência de comida comum, mas em versões sem açúcar, sem glúten e sem lactose. A ideia é comer melhor sem sentir que está em uma dieta sem graça."],
  ["São receitas saudáveis de verdade?", "São receitas mais leves e equilibradas, feitas para quem quer reduzir açúcar, glúten e lactose no dia a dia. Ainda assim, o foco é praticidade e sabor, com opções para diferentes momentos da rotina."],
  ["Preciso comprar ingredientes caros ou difíceis?", "Não. A maior parte das receitas usa ingredientes acessíveis e fáceis de encontrar em mercados comuns. O objetivo é facilitar sua vida, não complicar."],
  ["As receitas servem para a família toda?", "Sim. As receitas foram criadas para agradar adultos, crianças e pessoas que querem comer de forma mais leve, mesmo sem ter restrições alimentares."],
  ["São receitas simples de fazer?", "Sim. O material foi feito para a cozinha do dia a dia, com passo a passo direto, ingredientes organizados e preparos fáceis de acompanhar."],
  ["Preciso saber cozinhar para aproveitar?", "Não. Mesmo quem tem pouca prática consegue acompanhar as receitas, porque o conteúdo é simples, didático e pensado para iniciantes."],
  ["Como vou receber o produto?", "Após a compra, você recebe o acesso imediatamente no seu e-mail. Pode abrir pelo celular, computador, tablet ou imprimir se preferir."],
  ["E se eu não gostar?", "Você tem 15 dias de garantia incondicional. Se não ficar satisfeito(a), basta solicitar o reembolso dentro do prazo e seu dinheiro será devolvido."],
  ["Por quanto tempo tenho acesso?", "O acesso é vitalício. Você compra uma vez e pode consultar as receitas sempre que quiser."],
];

function Check() {
  return <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-xs font-black text-primary-foreground">✓</span>;
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-background pb-24 text-foreground">
      <div className="sticky top-0 z-40 bg-primary-deep px-4 py-2.5 text-center text-sm font-bold text-primary-foreground">
        ⏰ A promoção dessa página acaba no dia <span className="text-gold">11/11/2026</span>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-5 pb-12 pt-10 text-center">
        <h1 className="font-display text-4xl font-black leading-[1.05] sm:text-6xl">
          <span className="text-primary">365 Receitas</span> Sem Açúcar, Sem Glúten e Sem Lactose
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">receitas práticas para comer bem todos os dias sem abrir mão do prazer à mesa</p>
        <img src={banner.url} alt="365 Receitas Sem Açúcar, Sem Glúten e Sem Lactose" className="mx-auto mt-8 w-full max-w-xl drop-shadow-2xl" />
        <p className="mx-auto mt-6 max-w-xl text-base font-semibold">Bolos, pães, sobremesas, lanches e refeições em versões leves e deliciosas para transformar sua rotina.</p>
        <div className="mt-6"><Cta>Quero as 365 receitas!</Cta></div>
        <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-bold sm:text-sm">
          {["📱 Acesso imediato no WhatsApp", "🔒 Compra 100% Segura", "🛡️ 15 Dias de Garantia Total"].map((t) => (
            <span key={t} className="rounded-full border border-border bg-card px-3 py-1.5">{t}</span>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-secondary px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <Title>Benefícios do Produto:</Title>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map(([i, t]) => (
              <div key={t} className="card-soft flex items-center gap-3 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-muted text-2xl">{i}</span>
                <span className="font-bold">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8"><Cta>Sim, quero comer bem com mais leveza</Cta></div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.map((g, i) => <img key={g} src={g} alt={`Receita leve sem açúcar, sem glúten e sem lactose ${i + 1}`} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-md" />)}
          </div>
        </div>
      </section>

      {/* PRINTS */}
      <section className="px-5 py-14">
        <Title>Veja o que estão dizendo das receitas:</Title>
        <div className="no-scrollbar mx-auto mt-8 flex max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {prints.map((p, i) => <img key={p} src={p} alt={`Depoimento ${i + 1}`} loading="lazy" className="w-[78%] shrink-0 snap-center rounded-2xl border border-border shadow-md sm:w-[300px]" />)}
        </div>
        <p className="mt-3 text-center text-sm font-bold text-muted-foreground">👈 Arraste para ver mais depoimentos 👉</p>
      </section>

      {/* RECIPES */}
      <section className="bg-secondary px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <Title>Veja o que você vai preparar:</Title>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {recipes.map(([img, t, d]) => (
              <article key={t} className="card-soft overflow-hidden">
                <img src={img} alt={t} loading="lazy" className="aspect-square w-full object-cover" />
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm font-black uppercase leading-tight sm:text-base">{t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{d}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Title>+ 357 OUTRAS receitas incríveis da Chef Luana!</Title>
            <img src={showcase.url} alt="Mosaico com prévia das 357 receitas extras da Chef Luana" loading="lazy" className="mx-auto mt-6 w-full max-w-2xl rounded-2xl shadow-lg" />
            <p className="mt-6 font-bold">Divididas em categorias completas:</p>
            <div className="mx-auto mt-4 grid max-w-2xl gap-2 text-left sm:grid-cols-2">
              {categories.map(([c, n]) => (
                <div key={c} className="flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 text-sm font-bold">
                  <span className="min-w-0">{c}</span>
                  <span className="shrink-0 rounded-full bg-primary px-2.5 py-0.5 text-xs text-primary-foreground">{n} receitas</span>
                </div>
              ))}
            </div>
            <div className="mt-8"><Cta>Quero todas as 365 receitas</Cta></div>
          </div>
        </div>
      </section>

      {/* FOR YOU */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-2xl">
          <Title>Este cardápio é perfeito para você que:</Title>
          <ul className="mt-8 space-y-3">
            {forYou.map((t) => <li key={t} className="card-soft flex gap-3 p-4 font-semibold"><Check />{t}</li>)}
          </ul>
        </div>
      </section>

      {/* BONUS */}
      <section className="bg-dark-grad px-5 py-14">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full bg-gold px-4 py-1 text-sm font-black text-foreground">🎁 Presente Especial</span>
          <div className="mt-4"><Title light>Compre agora e receba <span className="text-gold">+ 3 bônus exclusivos:</span></Title></div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {bonuses.map(([img, t, d, v], i) => (
              <div key={t} className="card-soft overflow-hidden text-left">
                <div className="relative">
                  <img src={img} alt={t} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-black text-accent-foreground">BÔNUS {i + 1}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-black">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  <div className="mt-4 flex items-center gap-3 font-black">
                    <span className="text-muted-foreground line-through">{v}</span>
                    <span className="text-primary">✓ Grátis Hoje</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg font-black text-gold">💚 VALOR TOTAL DOS BÔNUS → TUDO GRÁTIS HOJE!</p>
        </div>
      </section>

      {/* PLANS */}
      <section id="planos" className="scroll-mt-12 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <Title>Escolha seu plano</Title>
          <p className="mt-2 text-center text-muted-foreground">Oferta especial por tempo limitado · Acesso imediato</p>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            {/* Premium first on mobile */}
            <div className="relative order-1 rounded-3xl border-4 border-primary bg-card p-6 shadow-2xl md:order-2 md:-mt-4">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-5 py-1.5 text-sm font-black uppercase text-accent-foreground shadow">Mais Vendida</span>
              <p className="mt-2 text-sm font-black text-accent">🔥 Super Oferta</p>
              <h3 className="font-display text-2xl font-black">+500 Receitas Premium</h3>
              <ul className="mt-4 space-y-2 text-sm font-semibold">
                {["500 Receitas Sem Açúcar, Glúten e Lactose", "Sobremesas, Pães, Bolos e Massas", "Receitas Cremosas Sem Lactose", "Acesso Vitalício", "Entrega Imediata por E-mail"].map((t) => <li key={t} className="flex gap-2"><Check />{t}</li>)}
              </ul>
              <div className="mt-4 rounded-2xl bg-secondary p-4">
                <p className="text-sm font-black text-primary-deep">Bônus Exclusivos!</p>
                <ul className="mt-2 space-y-1.5 text-sm font-semibold">
                  {["Cardápio de 30 Dias com Refeições Leves", "Guia de Substituições Inteligentes", "Lista de Compras Essenciais"].map((t) => <li key={t}>🎁 {t}</li>)}
                </ul>
              </div>
              <p className="mt-5 text-center text-sm text-muted-foreground">De <span className="line-through">R$ 197,00</span> por apenas</p>
              <p className="text-center font-display text-6xl font-black text-primary">R$ 18</p>
              <a href={CHECKOUT_PREMIUM} className="btn-cta mt-5 text-lg">Comprar Agora</a>
            </div>
            <div className="order-2 card-soft p-6 md:order-1">
              <p className="text-sm font-black text-muted-foreground">⚡ Oferta Básica</p>
              <h3 className="font-display text-2xl font-black">+365 Receitas Completas</h3>
              <ul className="mt-4 space-y-2 text-sm font-semibold">
                {["365 Receitas Sem Açúcar, Glúten e Lactose", "Acesso Vitalício", "Entrega Imediata por E-mail"].map((t) => <li key={t} className="flex gap-2"><Check />{t}</li>)}
              </ul>
              <p className="mt-5 text-center text-sm text-muted-foreground">De <span className="line-through">R$ 97,00</span> por apenas</p>
              <p className="text-center font-display text-5xl font-black">R$ 10</p>
              <a href={CHECKOUT_BASIC} className="mt-5 flex w-full items-center justify-center rounded-full border-2 border-primary px-6 py-3.5 font-black uppercase text-primary transition hover:bg-primary hover:text-primary-foreground">Comprar Agora</a>
            </div>
          </div>
          <p className="mt-6 text-center text-sm font-semibold text-muted-foreground">📲 Acesso imediato após a compra · Oferta válida até 11/11/2026</p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-secondary px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <Title>3.500+ pessoas já transformaram sua rotina na cozinha</Title>
          <p className="mt-2 text-center text-muted-foreground">Veja o que quem já comprou está falando.</p>
          <div className="card-soft mx-auto mt-8 flex max-w-md items-center gap-6 p-6">
            <div className="text-center">
              <p className="font-display text-5xl font-black">4.9</p>
              <p className="text-gold">★★★★★</p>
              <p className="text-xs text-muted-foreground">3.541 avaliações</p>
            </div>
            <div className="flex-1 space-y-1">
              {[5, 4, 3, 2, 1].map((n) => (
                <div key={n} className="flex items-center gap-2 text-xs font-bold">
                  <span className="w-2">{n}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-gold" style={{ width: n === 5 ? "92%" : n === 4 ? "6%" : "1%" }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map(([ini, name, date, text, img, likes]) => (
              <div key={name} className="card-soft p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-black text-primary-foreground">{ini}</span>
                  <div className="min-w-0"><p className="font-black">{name}</p><p className="text-xs text-muted-foreground">{date}</p></div>
                  <span className="ml-auto text-sm text-gold">★★★★★</span>
                </div>
                <p className="mt-3 text-sm">{text}</p>
                <img src={img} alt="Receita" loading="lazy" className="mt-3 aspect-video w-full rounded-xl object-cover" />
                <p className="mt-3 text-xs font-bold text-muted-foreground">🤍 Curtir {likes} · 💬 Comentar</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="px-5 py-14">
        <div className="card-soft mx-auto max-w-2xl p-8 text-center">
          <img src="https://i.imgur.com/JkRnpY1.png" alt="Selo de garantia" loading="lazy" className="mx-auto w-40" />
          <p className="mt-4 text-sm font-black text-primary">🛡️ Risco Zero</p>
          <Title>Garantia Incondicional de 15 Dias</Title>
          <p className="mt-3 text-muted-foreground">Teste as receitas por 15 dias. Se não ficar 100% satisfeito(a), devolvemos todo o seu dinheiro, sem perguntas.</p>
          <div className="mt-6"><Cta>Quero comprar com segurança</Cta></div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="bg-secondary px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <Title>Como você vai RECEBER:</Title>
          <p className="mt-2 text-center text-muted-foreground">Acesso liberado na hora, do seu jeitinho ✨</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {delivery.map(([i, t, d]) => (
              <div key={t} className="card-soft p-5 text-center">
                <div className="text-4xl">{i}</div>
                <h3 className="mt-2 font-black">{t}</h3>
                <p className="text-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-sm font-black uppercase text-primary">FAQ</p>
          <Title>Dúvidas Frequentes</Title>
          <div className="mt-8 space-y-3">
            {faq.map(([q, a], i) => (
              <div key={q} className="card-soft overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 p-4 text-left font-black">
                  <span className="min-w-0">{q}</span>
                  <span className="shrink-0 text-xl text-primary">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="px-4 pb-4 text-sm text-muted-foreground">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur">
        <button onClick={goPlans} className="btn-cta mx-auto max-w-md">Ver Oferta →</button>
      </div>
    </div>
  );
}
