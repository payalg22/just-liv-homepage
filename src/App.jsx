import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import SignUp from "./components/SignUp";
import WorkModel from "./components/WorkModel";

function App() {
  return (
    <div className="container">
      <Hero />
      <Features />
      <WorkModel />
      <Mission />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
