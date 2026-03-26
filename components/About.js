export default function About() {
  const skills = [
    { name: 'React', color: 'hover:border-cyan-400 hover:text-cyan-400' },
    { name: 'Next.js', color: 'hover:border-white hover:text-white' },
    { name: 'JavaScript', color: 'hover:border-yellow-400 hover:text-yellow-400' },
    { name: 'Tailwind', color: 'hover:border-sky-400 hover:text-sky-400' },
    { name: 'Node.js', color: 'hover:border-green-400 hover:text-green-400' },
    { name: 'TypeScript', color: 'hover:border-blue-500 hover:text-blue-500' },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Фоновые декоративные элементы (свечение) */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-12 items-start">
        {/* ЛЕВАЯ ЧАСТЬ: Текст и Заголовок (6 колонок) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
              ABOUT ME
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8" />
          </div>

          <p className="text-xl text-gray-300 leading-relaxed font-light">
            I am a <span className="text-white font-medium">Full-stack Developer</span> focused on
            building clean, modern and <span className="text-purple-400">scalable</span> web
            applications. I enjoy turning complex logic into elegant user interfaces.
          </p>

          {/* Дополнительный блок: Статистика/Фишки */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
            <div className="group">
              <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition">
                2+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Years Exp.</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition">
                15+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Projects</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white group-hover:text-green-400 transition">
                24/7
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Learning</div>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Карточки (5 колонок) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Блок Скиллов */}
          <div className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10">
            <h3 className="text-lg font-semibold text-gray-200 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 border border-gray-800 text-gray-400 text-sm rounded-xl transition-all duration-300 cursor-default bg-black/20 ${skill.color} hover:scale-105`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Дополнительная карточка: Work Philosophy */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/5">
            <h3 className="text-white font-medium mb-2">Philosophy</h3>
            <p className="text-sm text-gray-400 italic leading-relaxed">
              "Code is temporary, good architecture is forever. I strive for simplicity in every
              line."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
