import { ExaminationImagesList } from '../../components/ExaminationImagesList';
import { examinations } from './examinations.json';

export const ExaminationsPage = (): JSX.Element => {
  console.log(examinations);

  const tempData = {
    date: '2019-04-01',
    eye: 'L',
    modality: 'OCT',
    note: 'Left eye thickness is 2um which is normal',
    thumbnail: '/images/20190401_oct_left.jpg',
  } as const;

  const images = [tempData, { ...tempData, eye: 'R' } as const];

  return <ExaminationImagesList images={images} />;
};
