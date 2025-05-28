import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function App() {
  const [imagemExpandida, setImagemExpandida] = useState(null);

  useEffect(() => {
    document.title = "Nathan Thomaz | Portfólio";
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* HERO COM LAYOUT EM DUAS COLUNAS */}
<section className="relative bg-black min-h-screen flex items-center py-12 px-6 overflow-hidden">
  <div className="max-w-[90rem] w-full mx-auto grid md:grid-cols-2 gap-28 items-center z-10 mb-40">
    
    {/* Texto */}
    <div>
      <motion.h1
        className="text-6xl md:text-8xl font-bold text-red-500 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          words={['Bem-vindo!', 'Welcome!']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 text-justify leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        👋 Olá, sou <strong>Nathan Thomaz</strong>,<br /><br />
        <strong>Engenheiro de Dados</strong> com forte atuação em ambientes <strong>multicloud (AWS, Azure e GCP)</strong> e entusiasta na criação de <strong>pipelines escaláveis</strong>, <strong>automação de processos</strong> e integração de dados <strong>estruturados</strong> e <strong>não estruturados</strong>. Atualmente trabalho com engenharia de dados na <strong>DataVerse</strong>, além de cursar o 7º período de <strong>Sistemas de Informação</strong> na Faculdade LaSalle de Niterói.<br /><br />

        Meu portfólio reúne projetos que exploram desde a automação com <strong>Python</strong> e <strong>Shell Script</strong>, até soluções robustas com <strong>PySpark</strong>, bancos de dados <strong>Oracle</strong> e ferramentas ETL como <strong>Pentaho</strong> e <strong>PowerCenter</strong>. Também atuo na criação de <strong>dashboards analíticos</strong> e <strong>RPA</strong>, com foco em <strong>eficiência</strong>, <strong>qualidade de dados</strong> e <strong>insights estratégicos</strong>.<br /><br />

        Tenho perfil <strong>analítico</strong>, <strong>colaborativo</strong> e <strong>orientado a resultados</strong>, sempre buscando aliar teoria e prática para entregar soluções que geram <strong>valor real para o negócio</strong>. Neste espaço, compartilho algumas das soluções que desenvolvi — sinta-se à vontade para explorar!
      </motion.p>
    </div>

    {/* Imagem */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center"
    >
      <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-black opacity-60 blur-3xl z-0" />
      <img
        src="/Portfolio/images/logo1.png"
        alt="Notebook com código"
        className="relative z-10 w-[280px] md:w-[420px] lg:w-[480px]"
      />
    </motion.div>
  </div>

  {/* Curva decorativa */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path fill="#0c1a33" d="M0,0 C360,100 1080,100 1440,0 L1440,120 L0,120 Z" />
    </svg>
  </div>
</section>

    

      {/* PROJETOS */}
      <section className="px-6 py-20" style={{ backgroundColor: "#0c1a33" }}>
        <h2 className="text-4xl font-bold mb-12 text-white text-center relative inline-block before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-red-500 pl-4">
          Projetos
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1 */}
          <motion.div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden" whileHover={{ scale: 1.02 }}>
            <img src="/Portfolio/images/projeto1.jpg" alt="Dashboard BI" className="w-full h-48 object-cover" onClick={() => setImagemExpandida('/Portfolio/images/projeto1.jpg')} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-2">CryptoPrice Dashboard</h3>
              <p className="text-gray-700 mb-4">
                Dashboard interativo para acompanhar em tempo real a performance das 10 principais criptomoedas, com gráficos dinâmicos, rankings e análises visuais de mercado.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/NathanThomaz/CryptoPrice-Dashboard" target="_blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6 text-black hover:text-gray-700" /></a>
                <a href="https://dashcrypto-app.streamlit.app/" target="_blank" rel="noopener noreferrer"><HiOutlineExternalLink className="w-6 h-6 text-black hover:text-gray-700" /></a>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden" whileHover={{ scale: 1.02 }}>
            <img src="/Portfolio/images/projeto2.png" alt="ETL Databricks" className="w-full h-48 object-cover" onClick={() => setImagemExpandida('/Portfolio/images/projeto2.png')} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-2">Pipeline ETL com Databricks</h3>
              <p className="text-gray-700 mb-4">
                Processo automatizado com PySpark, particionamento Delta Lake e carga em camada Silver.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/seuusuario/projeto2" target="_blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6 text-black hover:text-gray-700" /></a>
                <a href="https://seudominio.com/etl" target="_blank" rel="noopener noreferrer"><HiOutlineExternalLink className="w-6 h-6 text-black hover:text-gray-700" /></a>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden" whileHover={{ scale: 1.02 }}>
            <img src="/Portfolio/images/projeto3.jpg" alt="Integração APIs" className="w-full h-48 object-cover" onClick={() => setImagemExpandida('/Portfolio/images/projeto3.jpg')} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-2">Integração com APIs REST</h3>
              <p className="text-gray-700 mb-4">
                Desenvolvimento de pipelines com chamadas REST automatizadas, autenticação via token e orquestração com Airflow.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/seuusuario/projeto3" target="_blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6 text-black hover:text-gray-700" /></a>
                <a href="https://seudominio.com/apis" target="_blank" rel="noopener noreferrer"><HiOutlineExternalLink className="w-6 h-6 text-black hover:text-gray-700" /></a>
              </div>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden" whileHover={{ scale: 1.02 }}>
            <img src="/Portfolio/images/projeto3.jpg" alt="Integração APIs 2" className="w-full h-48 object-cover" onClick={() => setImagemExpandida('/Portfolio/images/projeto3.jpg')} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-2">Integração com APIs REST</h3>
              <p className="text-gray-700 mb-4">
                Desenvolvimento de pipelines com chamadas REST automatizadas, autenticação via token e orquestração com Airflow.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/seuusuario/projeto4" target="_blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6 text-black hover:text-gray-700" /></a>
                <a href="https://seudominio.com/api2" target="_blank" rel="noopener noreferrer"><HiOutlineExternalLink className="w-6 h-6 text-black hover:text-gray-700" /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Imagem expandida */}
      {imagemExpandida && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setImagemExpandida(null)}>
          <img src={imagemExpandida} alt="Imagem expandida" className="max-w-full max-h-[90vh] rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* ONDA DECORATIVA INVERTIDA */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0c1a33" d="M0,0 C360,100 1080,100 1440,0 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <footer className="text-center py-10 bg-black text-gray-500">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          © {new Date().getFullYear()} Jonas Kasakewitch. Todos os direitos reservados.
        </motion.p>
      </footer>
    </div>
  );
}
