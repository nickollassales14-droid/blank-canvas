import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import banner from "@/assets/headline-mockup.png";
import showcase from "@/assets/mais-357-receitas.png";
import bShop from "@/assets/bonus-lista-compras.png";
import bMeal from "@/assets/bonus-cardapio-30-dias.png";
import bSub from "@/assets/bonus-guia-substituicoes.png";
import revBrownie from "@/assets/review-brownie.jpg";

const CHECKOUT_BASIC = "https://pay.wiapy.com/Ci6of1B5M1ll?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=";
const CHECKOUT_PREMIUM = "https://pay.wiapy.com/3IdUSNfye7KS?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "365 Receitas Sem Açúcar, Sem Glúten e Sem Lactose | Chef Luana" },
      { name: "description", content: "Bolos, pães, sobremesas, lanches e refeições leves e saborosas. Acesso imediato + 3 presentes exclusivos." },
      { property: "og:title", content: "365 Receitas Sem Açúcar, Sem Glúten e Sem Lactose" },
      { property: "og:description", content: "Prepare pratos práticos para o dia a dia e aproveite cada refeição com muito sabor." },
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
  ["🍰", "365 opções doces e salgadas"], ["🌿", "Sem açúcar, glúten ou lactose"],
  ["📖", "Passo a passo simples e ilustrado"], ["🍽️", "Ideias para todas as refeições"],
  ["🪶", "Refeições mais leves e saborosas"], ["👩‍🍳", "Preparo fácil até para iniciantes"],
  ["✨", "Mais variedade para sair da rotina"], ["📱", "Consulte no celular ou imprima"],
];
const gallery = ["https://i.imgur.com/54fZgju.png", "https://i.imgur.com/JCYrYsk.png", "https://i.imgur.com/BWTdeN8.png", "https://i.imgur.com/8zjkqxs.png"];
const prints = [
  "/depoimentos/thefake-whatsapp-1794446675905.png",
  "/depoimentos/thefake-whatsapp-1794447180937.png",
  "/depoimentos/thefake-whatsapp-1794447619872.png",
  "/depoimentos/thefake-whatsapp-1794447841206.png",
  "/depoimentos/thefake-whatsapp-1794450917808.png",
];
const recipes = [
  ["https://i.imgur.com/9XqdBay.png", "Bolo de Cenoura com Cobertura Cremosa", "Bem fofinho, na medida certa e sem açúcar refinado"],
  ["https://i.imgur.com/1yPajyN.png", "Pão Caseiro Sem Glúten", "Leve, fácil de preparar e ótimo para o café"],
  ["https://i.imgur.com/cY8OF7l.png", "Panqueca Leve de Banana", "Fica pronta rapidinho e não leva lactose"],
  ["https://i.ibb.co/ynNxVxN0/Lasanha-vegan-Made-by-Choices.webp", "Lasanha Cremosa Sem Glúten", "Uma refeição saborosa para compartilhar em família"],
  ["https://i.imgur.com/wS19SoM.png", "Brigadeiro Sem Açúcar", "Muito cremoso, com sabor de chocolate e sem culpa"],
  ["https://i.imgur.com/tql5cat.png", "Torta Salgada de Frango", "Fácil de fazer e combina com qualquer refeição"],
  ["https://i.ibb.co/8g3T7TDc/Small-Batch-Brownies-Eats-Delightful.webp", "Brownie Fit de Chocolate", "Textura úmida, sabor marcante e sem farinha de trigo"],
  ["https://i.ibb.co/WNVfYtVy/Cookies-Veganos-com-peda-os-de-Chocolate-Cozinha-Roman.webp", "Cookie Crocante Sem Glúten", "Douradinho e crocante por fora, macio por dentro"],
];
const categories = [
  ["Café da manhã", 45], ["Pães, bolos e massas", 55], ["Almoços e jantares", 55],
  ["Lanches e salgados", 45], ["Sobremesas", 55], ["Receitas sem lactose", 35],
  ["Molhos e acompanhamentos", 35], ["Bebidas e preparações extras", 40],
] as const;
const forYou = [
  "Deseja se alimentar melhor sem abrir mão do sabor", "Percebe que açúcar, glúten ou lactose não caem bem na rotina",
  "Quer fazer em casa pratos leves, apetitosos e bonitos", "Está cansado(a) de buscar novidades sem saber o que preparar",
  "Precisa de sugestões rápidas para diferentes refeições", "Quer servir opções equilibradas que agradem à família",
];
const bonuses = [
  [bShop, "Lista de Compras Essenciais", "Saiba quais itens escolher para organizar sua despensa.", "R$ 29,90"],
  [bMeal, "Cardápio de 30 Dias", "Sugestões preparadas para renovar as refeições durante o mês.", "R$ 39,90"],
  [bSub, "Guia de Substituições", "Aprenda alternativas fáceis que preservam sabor e textura.", "R$ 24,90"],
];
const reviews = [
  ["CS", "Camila S.", "1 de abril de 2026", "Eu pensava que doces sem açúcar não tinham graça, até provar o bolo de cenoura. Ficou tão fofinho que todos aqui em casa adoraram e nem notaram diferença.", "https://i.imgur.com/UY37i9U.png", 34],
  ["HM", "Helena M.", "4 de abril de 2026", "As sobremesas me atraíram e já preparei brownie, brigadeiro e panqueca. São receitas práticas e deliciosas. Agora tenho alternativas sempre que quero um docinho.", revBrownie, 28],
  ["LR", "Lorena R.", "8 de abril de 2026", "Depois de comer pães e massas, eu costumava me sentir pesada. As receitas sem glúten do livro trouxeram mais variedade para meus cafés da manhã e lanches.", "https://i.imgur.com/3xXF7tP.png", 51],
  ["BT", "Bianca T.", "9 de abril de 2026", "Minha filha não pode consumir lactose e eu não sabia mais o que preparar. Agora faço bolo, torta e até pratos cremosos que ela adora.", "https://i.imgur.com/z8Xaea1.png", 62],
  ["LP", "Larissa P.", "21 de abril de 2026", "As instruções são claras e os ingredientes são fáceis de encontrar. Preparei a torta salgada e ela já entrou para o nosso cardápio de casa.", "https://i.imgur.com/Hfbl72C.png", 47],
  ["RF", "Renata F.", "24 de abril de 2026", "Os cookies sem glúten ficaram ótimos: crocantes por fora e macios no meio. Meu marido se surpreendeu ao saber que não levavam açúcar refinado.", "https://i.imgur.com/zGqQ3BH.png", 39],
] as const;
const delivery = [["📱", "No Celular", "Consulte de onde estiver"], ["💻", "No Computador", "Acompanhe em uma tela maior"], ["🖨️", "Para Imprimir", "Monte seu próprio caderno"], ["⚡", "Envio Imediato", "Acesso liberado em segundos"]];
const faq = [
  ["As receitas são saborosas mesmo?", "Sim. Cada receita foi pensada para conservar o sabor, a textura e o visual que você espera, em versões sem açúcar, glúten e lactose. Assim, dá para comer melhor sem abrir mão do prazer à mesa."],
  ["Posso considerar as receitas mais saudáveis?", "São preparações mais leves e equilibradas, para quem pretende diminuir açúcar, glúten e lactose no cotidiano. O material prioriza praticidade e sabor, com sugestões para vários momentos do dia."],
  ["Vou precisar de ingredientes caros ou difíceis de achar?", "Não. A maioria das receitas leva itens acessíveis, encontrados em mercados comuns. A proposta é deixar o preparo mais fácil para você."],
  ["A família toda pode comer essas receitas?", "Sim. Elas foram pensadas para agradar adultos, crianças e quem busca refeições mais leves, inclusive pessoas sem restrições alimentares."],
  ["É fácil preparar as receitas?", "Sim. O conteúdo foi desenvolvido para a cozinha do dia a dia, com instruções objetivas, ingredientes bem organizados e preparos fáceis de seguir."],
  ["Preciso ter experiência na cozinha?", "Não. Mesmo sem muita prática, você consegue acompanhar: o material é didático, direto e pensado também para quem está começando."],
  ["Como receberei o produto?", "Assim que concluir a compra, o acesso será enviado para seu e-mail. Você poderá consultar pelo celular, computador ou tablet, ou imprimir o material."],
  ["E se eu não ficar satisfeito(a)?", "A compra tem garantia incondicional de 15 dias. Caso não esteja satisfeito(a), solicite o reembolso dentro desse período para receber seu dinheiro de volta."],
  ["Por quanto tempo posso acessar?", "O acesso não expira. Você paga uma vez e pode voltar às receitas sempre que desejar."],
];

function Check() {
  return <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-xs font-black text-primary-foreground">✓</span>;
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  const [simpleOfferOpen, setSimpleOfferOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background pb-24 text-foreground">
      <div className="sticky top-0 z-40 bg-primary-deep px-4 py-2.5 text-center text-sm font-bold text-primary-foreground">
        ⏰ Esta oferta fica disponível até <span className="text-gold">15/11/2026</span>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-5 pb-12 pt-10 text-center">
        <h1 className="font-display text-4xl font-black leading-[1.05] sm:text-6xl">
          <span className="text-primary underline decoration-current decoration-2 underline-offset-[6px] sm:decoration-4">365 Receitas Leves e Deliciosas,</span> Sem Açúcar, Glúten ou Lactose
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">ideias práticas para saborear todos os dias e aproveitar cada refeição!</p>
        <img src={banner} alt="365 Receitas Sem Açúcar, Sem Glúten e Sem Lactose" className="mx-auto mt-8 w-full max-w-xl drop-shadow-2xl" />
        <p className="mx-auto mt-6 max-w-xl text-base font-semibold">Prepare bolos, pães, doces, lanches e refeições mais leves e saborosas para o seu dia a dia.</p>
        <div className="mt-6"><Cta>Quero receber as 365 receitas!</Cta></div>
        <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-bold sm:text-sm">
          {["📱 Acesso na hora pelo WhatsApp", "🔒 Pagamento 100% Seguro", "🛡️ Garantia Total de 15 Dias"].map((t) => (
            <span key={t} className="rounded-full border border-border bg-card px-3 py-1.5">{t}</span>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-secondary px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <Title>O que você ganha com o produto:</Title>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map(([i, t]) => (
              <div key={t} className="card-soft flex items-center gap-3 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-muted text-2xl">{i}</span>
                <span className="font-bold">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8"><Cta>Quero refeições saborosas e mais leves</Cta></div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.map((g, i) => <img key={g} src={g} alt={`Receita leve sem açúcar, sem glúten e sem lactose ${i + 1}`} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-md" />)}
          </div>
        </div>
      </section>

      {/* PRINTS */}
      <section className="px-5 py-14">
        <Title>Confira os comentários de quem já provou:</Title>
        <div className="testimonial-carousel no-scrollbar mx-auto mt-8 max-w-5xl overflow-hidden pb-2">
          <div className="testimonial-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="testimonial-sequence" aria-hidden={copy === 1 ? true : undefined}>
                {prints.map((p, i) => (
                  <div key={p} className="testimonial-card shrink-0 rounded-2xl border border-border shadow-md">
                    <img src={p} alt={copy === 0 ? `Depoimento ${i + 1}` : ""} loading="eager" decoding="async" width={1080} height={1080} className="testimonial-image" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECIPES */}
      <section className="bg-secondary px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <Title>Olha só o que você poderá fazer:</Title>
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
            <Title>+365 receitas deliciosas para transformar sua alimentação!</Title>
            <img src={showcase} alt="Mosaico com prévia das 357 receitas extras da Chef Luana" loading="lazy" className="mx-auto mt-6 w-full max-w-2xl rounded-2xl shadow-lg" />
            <p className="mt-6 font-bold">Tudo organizado em categorias:</p>
            <div className="mx-auto mt-4 grid max-w-2xl gap-2 text-left sm:grid-cols-2">
              {categories.map(([c, n]) => (
                <div key={c} className="flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 text-sm font-bold">
                  <span className="min-w-0">{c}</span>
                  <span className="shrink-0 rounded-full bg-primary px-2.5 py-0.5 text-xs text-primary-foreground">{n} receitas</span>
                </div>
              ))}
            </div>
            <div className="mt-8"><Cta>Quero ter acesso às 365 receitas</Cta></div>
          </div>
        </div>
      </section>

      {/* FOR YOU */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-2xl">
          <Title>Este conteúdo combina com você que:</Title>
          <ul className="mt-8 space-y-3">
            {forYou.map((t) => <li key={t} className="card-soft flex gap-3 p-4 font-semibold"><Check />{t}</li>)}
          </ul>
        </div>
      </section>

      {/* BONUS */}
      <section className="bg-dark-grad px-5 py-14">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full bg-gold px-4 py-1 text-sm font-black text-foreground">🎁 Um presente para você</span>
          <div className="mt-4"><Title light>Garanta agora e leve também <span className="text-gold">3 bônus exclusivos:</span></Title></div>
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
          <p className="mt-8 text-lg font-black text-gold">💚 OS BÔNUS VALEM → HOJE VOCÊ LEVA TUDO GRÁTIS!</p>
        </div>
      </section>

      {/* PLANS */}
      <section id="planos" className="scroll-mt-12 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <Title>Selecione a opção ideal</Title>
          <p className="mt-2 text-center text-muted-foreground">Condição especial por tempo limitado · Acesso imediato</p>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            {/* Premium first on mobile */}
            <div className="relative order-1 rounded-3xl border-4 border-primary bg-card p-6 shadow-2xl md:order-2 md:-mt-4">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-5 py-1.5 text-sm font-black uppercase text-accent-foreground shadow">A preferida</span>
              <p className="mt-2 text-sm font-black text-accent">🔥 Oferta Especial</p>
              <h3 className="font-display text-2xl font-black">Mais de 500 Receitas Premium</h3>
              <ul className="mt-4 space-y-2 text-sm font-semibold">
                {["500 Receitas Sem Açúcar, Glúten e Lactose", "Doces, Pães, Bolos e Massas", "Preparos Cremosos Sem Lactose", "Acesso Vitalício", "Receba imediatamente por e-mail"].map((t) => <li key={t} className="flex gap-2"><Check />{t}</li>)}
              </ul>
              <div className="mt-4 rounded-2xl bg-secondary p-4">
                <p className="text-sm font-black text-primary-deep">Você também recebe!</p>
                <ul className="mt-2 space-y-1.5 text-sm font-semibold">
                  {["Cardápio de 30 Dias com Refeições Leves", "Guia de Substituições Inteligentes", "Lista de Compras Essenciais"].map((t) => <li key={t}>🎁 {t}</li>)}
                </ul>
              </div>
              <p className="mt-5 text-center text-sm text-muted-foreground">De <span className="line-through">R$ 197,00</span> por somente</p>
              <p className="text-center font-display text-6xl font-black text-primary">R$ 27</p>
              <a href={CHECKOUT_PREMIUM} className="btn-cta mt-5 text-lg">Quero comprar</a>
            </div>
            <div className="order-2 card-soft p-6 md:order-1">
              <p className="text-sm font-black text-muted-foreground">⚡ Plano Essencial</p>
              <h3 className="font-display text-2xl font-black">Mais de 365 Receitas</h3>
              <ul className="mt-4 space-y-2 text-sm font-semibold">
                {["365 Receitas Sem Açúcar, Glúten e Lactose", "Acesso Vitalício", "Receba imediatamente por e-mail"].map((t) => <li key={t} className="flex gap-2"><Check />{t}</li>)}
              </ul>
              <p className="mt-5 text-center text-sm text-muted-foreground">De <span className="line-through">R$ 97,00</span> por somente</p>
              <p className="text-center font-display text-5xl font-black">R$ 10</p>
              <button type="button" onClick={() => setSimpleOfferOpen(true)} className="mt-5 flex w-full items-center justify-center rounded-full border-2 border-primary px-6 py-3.5 font-black uppercase text-primary transition hover:bg-primary hover:text-primary-foreground">Quero comprar</button>
            </div>
          </div>
          <p className="mt-6 text-center text-sm font-semibold text-muted-foreground">📲 Acesso liberado após a compra · Oferta disponível até 11/11/2026</p>
        </div>
      </section>

      {simpleOfferOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm" onClick={() => setSimpleOfferOpen(false)}>
          <section role="dialog" aria-modal="true" aria-labelledby="simple-offer-title" className="relative my-auto w-full max-w-lg animate-in zoom-in-95 rounded-3xl border-2 border-primary bg-card p-6 text-foreground shadow-2xl duration-300 sm:p-8" onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Fechar oferta" onClick={() => setSimpleOfferOpen(false)} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-secondary text-xl font-bold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">×</button>
            <span className="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-black uppercase text-accent-foreground">Oferta especial para você</span>
            <h2 id="simple-offer-title" className="mt-4 pr-7 font-display text-3xl font-black leading-tight sm:text-4xl">Uma oferta especial antes de ir!</h2>
            <p className="mt-2 text-muted-foreground">Leve mais praticidade para sua rotina com este pacote:</p>
            <ul className="mt-5 space-y-3 rounded-2xl bg-secondary p-4 text-sm font-bold sm:text-base">
              {["365 receitas", "Cardápio de 30 dias", "Guia de substituições inteligentes"].map((item) => <li key={item} className="flex items-center gap-3"><Check />{item}</li>)}
            </ul>
            <div className="mt-5 rounded-2xl bg-primary-deep p-5 text-center text-primary-foreground">
              <p className="text-sm font-bold">Oferta especial</p>
              <p className="mt-1 text-sm">De <span className="line-through">R$ 80,00</span> por apenas</p>
              <p className="font-display text-5xl font-black text-gold">R$ 18</p>
            </div>
            <button type="button" className="btn-cta mt-5">Quero aproveitar a oferta</button>
            <a href={CHECKOUT_BASIC} className="mt-3 flex w-full items-center justify-center rounded-full border-2 border-primary px-5 py-3 text-center text-sm font-black uppercase text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Não, obrigado. Ir para o checkout essencial</a>
          </section>
        </div>
      )}

      {/* REVIEWS */}
      <section className="bg-secondary px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <Title>Mais de 3.500 pessoas renovaram a rotina na cozinha</Title>
          <p className="mt-2 text-center text-muted-foreground">Confira as experiências de quem já adquiriu o material.</p>
          <div className="card-soft mx-auto mt-8 flex max-w-md items-center gap-6 p-6">
            <div className="text-center">
              <p className="font-display text-5xl font-black">4.8</p>
              <p className="text-gold">★★★★★</p>
              <p className="text-xs text-muted-foreground">2.543 avaliações</p>
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
          <p className="mt-4 text-sm font-black text-primary">🛡️ Você compra sem risco</p>
          <Title>15 Dias de Garantia Incondicional</Title>
          <p className="mt-3 text-muted-foreground">Experimente as receitas durante 15 dias. Se não estiver totalmente satisfeito(a), devolvemos o valor pago, sem fazer perguntas.</p>
          <div className="mt-6"><Cta>Quero garantir minha compra</Cta></div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="bg-secondary px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <Title>Veja como o acesso CHEGA até você:</Title>
          <p className="mt-2 text-center text-muted-foreground">Tudo liberado imediatamente para consultar como preferir ✨</p>
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
          <Title>Perguntas Frequentes</Title>
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
    </div>
  );
}
