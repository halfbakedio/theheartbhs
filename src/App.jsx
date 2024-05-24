import { Footer } from "./components";

const App = () => (
  <div className="min-h-screen flex flex-col">
    <div className="hero bg-base-200 flex-grow">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
