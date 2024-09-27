export default function Navbar() {
    return (
      <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex justify-around">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  