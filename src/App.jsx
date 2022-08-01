import logo from './logo.svg';
import './App.css';
import Select from 'react-select';
// import sample from "./sample"
function App() {
  const sample = {
    fever: 'Fever (feeling feverish or temperature of 100.4° F or higher)',
    chills: 'Chills',
    cough: 'Cough',
    shortnessOfBreath: 'Shortness of breath',
    difficultyBreathing: 'Mild or moderate difficulty breathing',
    congestionOrRunnyNose: 'Congestion or runny nose',
    soreThroat: 'Sore throat',
    diarrhea: 'Diarrhea',
    nauseaOrVomiting: 'Nausea or vomiting',
    fatigue: 'Fatigue',
    headache: 'Headache',
    muscleOrBodyAches: 'Muscle or body aches',
    newLossOfTasteOrSmell: 'New loss of taste or smell',
    otherwiseFeelingUnwell: 'Otherwise feeling unwell',
  };
  return (
    <div className="App">
      <header className="App-header">
      <Select 
      isMulti
      className='selection-defined'
      options={Object.entries(sample).map(([key, value]) => {
        return { value: key, label: value };
      })}
      
      
      />
      </header>
    </div>
  );
}

export default App;
