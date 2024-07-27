import { ExaminationsList } from './components/ExaminationsList';
import { examinations } from './examinations.json';
import './App.css';

export const App = (): JSX.Element => {
  console.log(examinations);

  return (
    <div className="app-container">
      <ExaminationsList />
    </div>
  );
};
