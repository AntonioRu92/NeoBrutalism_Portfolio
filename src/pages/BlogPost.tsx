import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share, Bookmark, User, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Article {
  id: number;
  title: string;
  date: string;
  readTime: number;
  category: string;
  views: number;
  content: React.ReactNode;
}

const BlogPost: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const articles: Article[] = [
    {
      id: 1,
      title: "REACT 19: SERVER COMPONENTS CHE CAMBIANO TUTTO",
      date: "2025-09-28",
      readTime: 12,
      category: "frontend",
      views: 1247,
      content: (
        <div className="space-y-8">
          {/* Intro */}
          <div className="neo-card neo-card-yellow p-8 transform rotate-1">
            <p className="neo-mono text-black font-bold text-lg leading-relaxed">
              React 19 segna una rivoluzione epocale nello sviluppo frontend. Le Server Components, le Actions
              automatiche e il nuovo Compiler stanno ridefinendo completamente il modo in cui costruiamo applicazioni
              web moderne.
            </p>
          </div>

          {/* Server Components */}
          <div className="space-y-6">
            <div className="neo-card bg-black text-white p-2 inline-block transform -rotate-1">
              <h2 className="neo-title text-3xl">1. SERVER COMPONENTS NATIVE</h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              Le <strong>Server Components</strong> di React 19 permettono di renderizzare componenti direttamente sul
              server, riducendo drasticamente il bundle JavaScript e migliorando le performance di caricamento fino al{" "}
              <strong>60%</strong>.
            </p>

            <div className="neo-card neo-card-cyan p-6 transform rotate-1">
              <h3 className="neo-title text-xl text-black mb-4">VANTAGGI CHIAVE:</h3>
              <ul className="neo-mono text-black font-bold space-y-2">
                <li>• Bundle size ridotto del 60%</li>
                <li>• Rendering server-side nativo</li>
                <li>• SEO optimization automatica</li>
                <li>• Streaming HTML progressivo</li>
              </ul>
            </div>

            <div className="bg-gray-100 border-4 border-black p-6">
              <h4 className="neo-mono font-bold text-black mb-3">ESEMPIO PRATICO:</h4>
              <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
                {`// Server Component React 19
export default async function ProductList() {
  const products = await fetch('/api/products');
  
  return (
    <div className="grid gap-4">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}`}
              </pre>
            </div>
          </div>

          {/* React Compiler */}
          <div className="space-y-6">
            <div className="neo-card bg-black text-white p-2 inline-block transform rotate-1">
              <h2 className="neo-title text-3xl">2. REACT COMPILER AUTOMATICO</h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              Il nuovo <strong>React Compiler</strong> ottimizza automaticamente il codice, eliminando la necessità di
              useMemo e useCallback manuali. Le performance migliorano del <strong>40%</strong> senza modificare una
              riga di codice!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neo-card neo-card-pink p-6 transform -rotate-1">
                <h3 className="neo-title text-lg text-black mb-3">PRIMA (React 18)</h3>
                <div className="bg-red-100 p-4 border-2 border-black">
                  <pre className="text-sm text-black">
                    {`const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

const memoizedCallback = useCallback(
  (value) => setValue(value),
  [setValue]
);`}
                  </pre>
                </div>
              </div>

              <div className="neo-card neo-card-green p-6 transform rotate-1">
                <h3 className="neo-title text-lg text-black mb-3">DOPO (React 19)</h3>
                <div className="bg-green-100 p-4 border-2 border-black">
                  <pre className="text-sm text-black">
                    {`// Compiler ottimizza automaticamente!
const expensiveValue = heavyCalculation(data);

const handleChange = (value) => setValue(value);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div className="neo-card bg-black text-white p-2 inline-block transform -rotate-1">
              <h2 className="neo-title text-3xl">3. ACTIONS RIVOLUZIONARIE</h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              Le <strong>Actions</strong> introducono un pattern completamente nuovo per gestire operazioni asincrone,
              form handling e state management con una sintassi elegante e potente.
            </p>

            <div className="neo-card neo-card-orange p-6 transform rotate-2">
              <h3 className="neo-title text-xl text-black mb-4">FEATURES ACTIONS:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="neo-mono font-bold text-black mb-2">Form Handling</h4>
                  <p className="text-black text-sm">Gestione automatica di submit, validation e loading states</p>
                </div>
                <div>
                  <h4 className="neo-mono font-bold text-black mb-2">Error Boundaries</h4>
                  <p className="text-black text-sm">Gestione errori integrata senza boilerplate</p>
                </div>
                <div>
                  <h4 className="neo-mono font-bold text-black mb-2">Optimistic Updates</h4>
                  <p className="text-black text-sm">UI updates immediate con rollback automatico</p>
                </div>
                <div>
                  <h4 className="neo-mono font-bold text-black mb-2">Concurrent Safe</h4>
                  <p className="text-black text-sm">Thread-safe per operazioni multiple</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusione */}
          <div className="neo-card bg-black text-white p-8 transform rotate-1">
            <h2 className="neo-title text-2xl mb-6 text-yellow-400">CONCLUSIONE: IL FUTURO È QUI</h2>
            <p className="text-lg leading-relaxed mb-4">
              React 19 non è solo un aggiornamento: è una rivoluzione che ridefinisce completamente l'ecosistema
              frontend.
            </p>
            <p className="text-lg leading-relaxed">
              Server Components, Compiler automatico e Actions ci permettono di costruire applicazioni più veloci, più
              sicure e più maintanabili che mai.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "LARAVEL 11: TYPE SAFETY E PERFORMANCE EXTREME",
      date: "2025-09-20",
      readTime: 10,
      category: "backend",
      views: 892,
      content: (
        <div className="space-y-8">
          {/* Intro */}
          <div className="neo-card neo-card-pink p-8 transform -rotate-1">
            <p className="neo-mono text-black font-bold text-lg leading-relaxed">
              Laravel 11 introduce innovazioni rivoluzionarie: supporto nativo per PHP 8.3, type safety avanzata, cache
              ottimizzata e sicurezza di livello enterprise. Il framework backend più potente di sempre!
            </p>
          </div>

          {/* PHP 8.3 Features */}
          <div className="space-y-6">
            <div className="neo-card bg-black text-white p-2 inline-block transform rotate-1">
              <h2 className="neo-title text-3xl">1. PHP 8.3 NATIVE SUPPORT</h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              Laravel 11 sfrutta appieno le nuove features di <strong>PHP 8.3</strong>, introducendo performance
              improvements del <strong>35%</strong> e type safety senza precedenti.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neo-card neo-card-cyan p-6 transform rotate-1">
                <h3 className="neo-title text-lg text-black mb-3">READONLY CLASSES</h3>
                <div className="bg-blue-50 p-4 border-2 border-black">
                  <pre className="text-sm text-black">
                    {`readonly class UserDTO {
    public function __construct(
        public string $name,
        public string $email,
        public int $age
    ) {}
}`}
                  </pre>
                </div>
              </div>

              <div className="neo-card neo-card-yellow p-6 transform -rotate-1">
                <h3 className="neo-title text-lg text-black mb-3">TYPED CONSTANTS</h3>
                <div className="bg-yellow-50 p-4 border-2 border-black">
                  <pre className="text-sm text-black">
                    {`class Config {
    public const string APP_NAME = 'Laravel';
    public const int MAX_USERS = 1000;
    public const array SETTINGS = ['a', 'b'];
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Optimization */}
          <div className="space-y-6">
            <div className="neo-card bg-black text-white p-2 inline-block transform -rotate-1">
              <h2 className="neo-title text-3xl">2. PERFORMANCE OPTIMIZATION</h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              Il nuovo sistema di <strong>cache intelligente</strong> e l'<strong>ORM ottimizzato</strong>
              riducono i tempi di risposta del 50% e il consumo di memoria del 30%.
            </p>

            <div className="neo-card neo-card-green p-6 transform rotate-2">
              <h3 className="neo-title text-xl text-black mb-4">BENCHMARKS PERFORMANCE:</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white p-3 border-2 border-black">
                  <span className="neo-mono font-bold text-black">Database Queries</span>
                  <span className="neo-card bg-green-400 text-black px-3 py-1 text-sm font-bold">+50% FASTER</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 border-2 border-black">
                  <span className="neo-mono font-bold text-black">Memory Usage</span>
                  <span className="neo-card bg-blue-400 text-black px-3 py-1 text-sm font-bold">-30% LIGHTER</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 border-2 border-black">
                  <span className="neo-mono font-bold text-black">Cache Performance</span>
                  <span className="neo-card bg-purple-400 text-black px-3 py-1 text-sm font-bold">+75% FASTER</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="space-y-6">
            <div className="neo-card bg-black text-white p-2 inline-block transform rotate-1">
              <h2 className="neo-title text-3xl">3. ENTERPRISE SECURITY</h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              Laravel 11 introduce un sistema di <strong>sicurezza multi-layer</strong> con encryption avanzata, rate
              limiting intelligente e audit logging completo.
            </p>

            <div className="neo-card neo-card-red p-6 transform -rotate-1">
              <h3 className="neo-title text-xl text-black mb-4">SECURITY FEATURES:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border-2 border-black">
                  <h4 className="neo-mono font-bold text-black mb-2">🔐 Advanced Encryption</h4>
                  <p className="text-black text-sm">AES-256 con key rotation automatica</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <h4 className="neo-mono font-bold text-black mb-2">🛡️ Smart Rate Limiting</h4>
                  <p className="text-black text-sm">Protezione DDoS con ML detection</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <h4 className="neo-mono font-bold text-black mb-2">📊 Audit Logging</h4>
                  <p className="text-black text-sm">Tracking completo di tutte le operazioni</p>
                </div>
                <div className="bg-white p-4 border-2 border-black">
                  <h4 className="neo-mono font-bold text-black mb-2">🔍 Vulnerability Scanner</h4>
                  <p className="text-black text-sm">Scansione automatica dipendenze</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusione */}
          <div className="neo-card bg-black text-white p-8 transform rotate-1">
            <h2 className="neo-title text-2xl mb-6 text-pink-400">LARAVEL 11: ENTERPRISE READY</h2>
            <p className="text-lg leading-relaxed mb-4">
              Laravel 11 eleva lo sviluppo backend a nuovi livelli di professionalità, performance e sicurezza.
            </p>
            <p className="text-lg leading-relaxed">
              Con PHP 8.3, type safety nativa e sicurezza enterprise, Laravel 11 è il framework perfetto per
              applicazioni mission-critical.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "NEO-BRUTALISM: IL DESIGN CHE DOMINA IL 2025",
      date: "2025-09-15",
      readTime: 8,
      category: "design",
      views: 2156,
      content: (
        <div className="space-y-8">
          {/* Intro */}
          <div className="neo-card neo-card-cyan p-8 transform rotate-1">
            <p className="neo-mono text-black font-bold text-lg leading-relaxed">
              Il Neo-Brutalism sta conquistando il web design del 2025 con la sua estetica audace, colori shock e
              tipografie bold. Scopri perché questo movimento sta rivoluzionando completamente l'esperienza utente
              moderna.
            </p>
          </div>

          {/* Origini */}
          <div className="space-y-6">
            <div className="neo-card bg-black text-white p-2 inline-block transform -rotate-1">
              <h2 className="neo-title text-3xl">1. LE ORIGINI DEL MOVIMENTO</h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              Il <strong>Neo-Brutalism</strong> nasce come reazione al design minimalista e "sicuro" degli anni passati.
              È un ritorno alla <strong>sperimentazione audace</strong>, all'espressività visiva e alla personalità
              forte nei design digitali.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="neo-card neo-card-yellow p-6 transform rotate-1">
                <h3 className="neo-title text-lg text-black mb-3">COLORI SHOCK</h3>
                <div className="space-y-2">
                  <div className="bg-yellow-400 h-8 border-2 border-black"></div>
                  <div className="bg-pink-500 h-8 border-2 border-black"></div>
                  <div className="bg-cyan-400 h-8 border-2 border-black"></div>
                  <div className="bg-green-400 h-8 border-2 border-black"></div>
                </div>
              </div>

              <div className="neo-card neo-card-pink p-6 transform -rotate-1">
                <h3 className="neo-title text-lg text-black mb-3">TIPOGRAFIE BOLD</h3>
                <div className="space-y-2">
                  <div className="neo-title text-2xl text-black">SPACE GROTESK</div>
                  <div className="neo-mono text-lg text-black">JETBRAINS MONO</div>
                  <div className="font-black text-xl text-black">INTER BLACK</div>
                </div>
              </div>

              <div className="neo-card neo-card-green p-6 transform rotate-2">
                <h3 className="neo-title text-lg text-black mb-3">BORDI SPESSI</h3>
                <div className="space-y-2">
                  <div className="bg-white h-6 border-4 border-black"></div>
                  <div className="bg-white h-6 border-8 border-black"></div>
                  <div className="bg-white h-6 border-4 border-black border-dashed"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Principi Design */}
          <div className="space-y-6">
            <div className="neo-card bg-black text-white p-2 inline-block transform rotate-1">
              <h2 className="neo-title text-3xl">2. PRINCIPI FONDAMENTALI</h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              Il Neo-Brutalism segue principi precisi che lo rendono immediatamente riconoscibile e incredibilmente{" "}
              <strong>efficace</strong> nel catturare l'attenzione.
            </p>

            <div className="neo-card neo-card-orange p-8 transform -rotate-1">
              <h3 className="neo-title text-2xl text-black mb-6">I 5 PILASTRI DEL NEO-BRUTALISM:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="neo-card bg-black text-white w-8 h-8 flex items-center justify-center mr-4">
                    <span className="neo-mono font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="neo-title text-lg text-black">CONTRASTO ESTREMO</h4>
                    <p className="text-black">Colori vivaci su sfondi neutri per massimo impatto visivo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="neo-card bg-black text-white w-8 h-8 flex items-center justify-center mr-4">
                    <span className="neo-mono font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="neo-title text-lg text-black">ASIMMETRIA INTENZIONALE</h4>
                    <p className="text-black">Layout non convenzionali che rompono le griglie tradizionali</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="neo-card bg-black text-white w-8 h-8 flex items-center justify-center mr-4">
                    <span className="neo-mono font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="neo-title text-lg text-black">TIPOGRAFIA GIGANTE</h4>
                    <p className="text-black">Font size oversized per statement visivi potenti</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="neo-card bg-black text-white w-8 h-8 flex items-center justify-center mr-4">
                    <span className="neo-mono font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="neo-title text-lg text-black">OMBRE AGGRESSIVE</h4>
                    <p className="text-black">Drop shadows esagerate per effetti 3D brutali</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="neo-card bg-black text-white w-8 h-8 flex items-center justify-center mr-4">
                    <span className="neo-mono font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="neo-title text-lg text-black">INTERAZIONI ESAGERATE</h4>
                    <p className="text-black">Hover effects e animazioni che "sballano" l'elemento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Psicologia */}
          <div className="space-y-6">
            <div className="neo-card bg-black text-white p-2 inline-block transform -rotate-1">
              <h2 className="neo-title text-3xl">3. PSICOLOGIA DEL NEO-BRUTALISM</h2>
            </div>

            <p className="text-lg leading-relaxed text-black">
              Il successo del Neo-Brutalism non è casuale: sfrutta principi psicologici precisi per{" "}
              <strong>catturare attenzione</strong> e <strong>creare memorabilità</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neo-card neo-card-red p-6 transform rotate-1">
                <h3 className="neo-title text-xl text-black mb-4">IMPATTO EMOTIVO</h3>
                <ul className="space-y-2 text-black">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-black mr-3"></div>
                    <span>Sorpresa e curiosità immediate</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-black mr-3"></div>
                    <span>Memorabilità aumentata del 340%</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-black mr-3"></div>
                    <span>Engagement time superiore</span>
                  </li>
                </ul>
              </div>

              <div className="neo-card neo-card-blue p-6 transform -rotate-1">
                <h3 className="neo-title text-xl text-black mb-4">DIFFERENZIAZIONE</h3>
                <ul className="space-y-2 text-black">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-black mr-3"></div>
                    <span>Stand out dalla concorrenza</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-black mr-3"></div>
                    <span>Brand personality forte</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-black mr-3"></div>
                    <span>Viral potential elevato</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusione */}
          <div className="neo-card bg-black text-white p-8 transform rotate-1">
            <h2 className="neo-title text-2xl mb-6 text-cyan-400">NEO-BRUTALISM: LA RIVOLUZIONE È QUI</h2>
            <p className="text-lg leading-relaxed mb-4">
              Il Neo-Brutalism non è solo una moda: è una rivoluzione che restituisce personalità e audacia al web
              design.
            </p>
            <p className="text-lg leading-relaxed">
              In un mondo saturo di design "sicuri", chi osa sperimentare con il Neo-Brutalism conquista attenzione,
              memorabilità e successo.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const currentArticle = articles.find((article) => article.id === parseInt(id || "1"));

  if (!currentArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100 pt-20 flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern for Error */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-24 h-24 bg-red-500 transform rotate-45 border-4 border-black"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500 transform -rotate-12 border-4 border-black"></div>
        </div>

        <div className="neo-card neo-card-red p-8 transform rotate-1 relative z-10">
          <h1 className="neo-title text-4xl text-black mb-4">ARTICOLO NON TROVATO</h1>
          <Link to="/blog" className="neo-btn bg-black text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            TORNA AL BLOG
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-cyan-100 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 transform rotate-45 border-4 border-black"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-pink-500 transform -rotate-12 border-4 border-black"></div>
        <div className="absolute bottom-40 left-32 w-28 h-28 bg-cyan-400 transform rotate-12 border-4 border-black"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-green-400 transform rotate-45 border-4 border-black"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400 transform -rotate-45 border-4 border-black"></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-purple-400 transform rotate-12 border-4 border-black"></div>
      </div>{" "}
      <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            to="/blog"
            className="neo-card bg-white p-4 inline-flex items-center hover:neo-shake transform -rotate-1"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            <span className="neo-mono font-bold text-black">{t("blog.backToBlog")}</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div
              className={`neo-card neo-card-${
                currentArticle.category === "frontend"
                  ? "yellow"
                  : currentArticle.category === "backend"
                  ? "pink"
                  : "cyan"
              } 
                            px-4 py-2 transform rotate-1`}
            >
              <span className="neo-mono font-bold text-black text-sm uppercase">
                {t(`blog.categories.${currentArticle.category}`)}
              </span>
            </div>
            <div className="flex items-center text-black neo-mono font-bold text-sm">
              <Eye className="w-4 h-4 mr-2" />
              {currentArticle.views} visualizzazioni
            </div>
          </div>

          <h1 className="neo-title text-5xl text-black mb-8 leading-tight">{currentArticle.title}</h1>

          <div className="flex items-center gap-6 text-black neo-mono font-bold text-sm mb-8">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(currentArticle.date).toLocaleDateString("it-IT")}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{currentArticle.readTime} minuti di lettura</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{t("blog.author")}</span>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <button className="neo-btn bg-black text-white hover:neo-shake flex items-center">
              <Share className="w-4 h-4 mr-2" />
              <span className="neo-mono font-bold text-sm">{t("blog.share")}</span>
            </button>
            <button className="neo-btn bg-white text-black hover:neo-shake flex items-center">
              <Bookmark className="w-4 h-4 mr-2" />
              <span className="neo-mono font-bold text-sm">{t("blog.bookmark")}</span>
            </button>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose max-w-none"
        >
          {currentArticle.content}
        </motion.article>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="neo-card neo-card-yellow p-8 mt-16 transform rotate-1"
        >
          <div className="flex items-start space-x-6">
            <div className="neo-card bg-black w-20 h-20 flex items-center justify-center">
              <User className="w-10 h-10 text-yellow-400" />
            </div>
            <div>
              <h3 className="neo-title text-2xl text-black mb-3">{t("blog.author")}</h3>
              <p className="text-black leading-relaxed font-medium">{t("blog.authorBio")}</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Link to="/blog" className="neo-btn bg-black text-white hover:neo-shake flex items-center">
            <ArrowLeft className="w-5 h-5 mr-3" />
            <span className="neo-mono font-bold">{t("blog.backToBlog")}</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
