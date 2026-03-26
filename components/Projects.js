export default function Projects() {
  return (
    <section id="projects" className="p-20">
      <h2 className="text-3xl mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-800 p-4">Project 1</div>
        <div className="border border-gray-800 p-4">Project 2</div>
        <div className="border border-gray-800 p-4">Project 3</div>
      </div>
    </section>
  );
}