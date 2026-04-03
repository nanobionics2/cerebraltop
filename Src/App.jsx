export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-4xl md:text-6xl font-black text-center">
        CEREBRAL.TOP
      </h1>

      <p className="mt-4 text-lg md:text-xl text-slate-300 text-center max-w-xl">
        Engenharia da Vida — plataforma para melhorar sua renda, reduzir custos
        e tomar decisões melhores.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        
        <a
          href="https://wa.me/5591980148554"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-full font-bold text-center"
        >
          Falar no WhatsApp
        </a>

        <a
          href="#"
          className="border border-white/20 px-6 py-3 rounded-full text-center"
        >
          Ver planos
        </a>

      </div>

    </div>
  );
}
