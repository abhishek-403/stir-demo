import Home from "./home/Home";
export const SERVER_BASE_URL = import.meta.env.VITE_PUBLIC_SERVER_BASE_URL!;
function App() {
  return (
    <div className="bg-gradient-to-bl p-8 from-dark-90 via-neutral-100 to-dark-90  w-full h-full min-h-screen">
      <Home />
    </div>
  );
}

export default App;
