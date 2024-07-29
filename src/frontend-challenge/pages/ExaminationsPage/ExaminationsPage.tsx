import { Fragment, useState } from 'react';
import { ExaminationImagesList } from '../../components/ExaminationImagesList';
import { RadioGroup } from '../../components/RadioGroup';
import { groupExaminations } from './utils/groupExaminations';
import { examinations } from './examinations.json';
import type { ImageMeta } from './types';

const groupByOptions = [
  { label: 'Date', value: 'date' },
  { label: 'Modality', value: 'modality' },
] satisfies { label: string; value: keyof ImageMeta }[];

export const ExaminationsPage = (): JSX.Element => {
  const [groupBy, setGroupBy] = useState<keyof ImageMeta>('date');
  const groupedExaminations = groupExaminations(examinations, groupBy);

  return (
    <div>
      <h1>Examinations</h1>

      <RadioGroup
        legend="Group by"
        name="group-by"
        activeOption={groupBy}
        onOptionChange={setGroupBy}
        options={groupByOptions}
      />

      {Object.keys(groupedExaminations).map((key) => (
        <Fragment key={key}>
          <h2>{key}</h2>
          <ExaminationImagesList key={key} images={groupedExaminations[key]} />
        </Fragment>
      ))}
    </div>
  );
};
