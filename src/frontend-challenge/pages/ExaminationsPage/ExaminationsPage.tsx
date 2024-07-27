import { Fragment } from 'react';
import { ExaminationImagesList } from '../../components/ExaminationImagesList';
import { groupExaminations } from './utils/groupExaminations';
import { examinations } from './examinations.json';

export const ExaminationsPage = (): JSX.Element => {
  const group = groupExaminations(examinations, 'date');

  return (
    <div>
      <h1>Examinations</h1>
      {Object.keys(group).map((key) => (
        <Fragment key={key}>
          <h2>{key}</h2>
          <ExaminationImagesList key={key} images={group[key]} />
        </Fragment>
      ))}
    </div>
  );
};
