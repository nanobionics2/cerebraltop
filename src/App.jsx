export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          CEREBRAL.TOP
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
          Engenharia da Vida — aumente sua renda, reduza custos e tome decisões melhores usando conhecimento estratégico.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://wa.me/5591980148554"
            target="_blank"
            className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg"
          >
            Falar no WhatsApp
          </a>

          <a
            href="#planos"
            className="border border-white/30 px-8 py-4 rounded-full text-lg"
          >
            Ver Planos
          </a>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          O que você ganha
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Renda</h3>
            <p className="text-gray-300">
              Estratégias para aumentar sua renda com inteligência prática.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Decisão</h3>
            <p className="text-gray-300">
              Aprenda a tomar decisões melhores com lógica e análise.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Autonomia</h3>
            <p className="text-gray-300">
              Menos dependência, mais controle da sua vida.
            </p>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="px-6 py-20 bg-white/5 text-center">
        <h2 className="text-3xl font-bold mb-12">Planos</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="bg-black border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Start</h3>
            <p className="text-gray-400 mb-4">Acesso básico</p>
            <p className="text-3xl font-bold mb-6">R$ 97/mês</p>
          </div>

          <div className="bg-black border border-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-gray-400 mb-4">Conteúdo completo</p>
            <p className="text-3xl font-bold mb-6">R$ 197/mês</p>
          </div>

          <div className="bg-black border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Master</h3>
            <p className="text-gray-400 mb-4">Tudo + negócios</p>
            <p className="text-3xl font-bold mb-6">R$ 497/mês</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        © Cerebral.top — Engenharia da Vida
      </footer>

    </div>
  );
}
