import Home from "./home/Home";
export const SERVER_BASE_URL = "http://localhost:3000";
function App() {
  return (
    <div className="bg-gradient-to-b from-neutral-950 to-indigo-950  p-8 bg-black w-full h-full min-h-screen">
      <Home />
    </div>
  );
}

export default App;
