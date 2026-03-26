export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 border-b border-gray-800">
      <h1 className="text-xl">~/dev</h1>
      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}