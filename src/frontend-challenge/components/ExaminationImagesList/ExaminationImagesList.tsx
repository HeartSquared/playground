import { ExaminationImage } from '../ExaminationImage';
import './ExaminationImagesList.css';

/*
 * Notes:
 * - Add visual regression test if using (eg. Story for Chromatic)
 */

export const ExaminationImagesList = (): JSX.Element => {
  const tempData = {
    date: '2019-04-01',
    eye: 'L',
    modality: 'OCT',
    note: 'Left eye thickness is 2um which is normal',
    thumbnail: '/images/20190401_oct_left.jpg',
  } as const;

  return (
    <ul className="examination-images-list">
      <li>
        <ExaminationImage {...tempData} />
      </li>
      <li>
        <ExaminationImage {...tempData} eye="R" />
      </li>
    </ul>
  );
};
