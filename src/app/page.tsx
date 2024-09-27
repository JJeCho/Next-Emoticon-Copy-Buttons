
import Clouds from '../components/Clouds';

export default function Home() {
  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/sun_background.jpg')" }}
    >
      <Clouds />
      <h1 className="text-5xl font-bold text-white">Hello, World!</h1>
    </main>
  );
}
