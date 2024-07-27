import { ExaminationImagesList } from '../../components/ExaminationImagesList';
import { examinations } from './examinations.json';

export const ExaminationsPage = (): JSX.Element => {
  console.log(examinations);
  return <ExaminationImagesList />;
};
