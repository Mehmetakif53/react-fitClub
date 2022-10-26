import Hero from './components/hero/Hero';
import './App.css';
import Programs from './components/programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonials/>
    </div>
  );
}

export default App;
