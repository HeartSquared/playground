import { ImageMeta, QueryExaminations } from '../types';

type GroupedExaminations = {
  [key: string]: ImageMeta[];
};

export const groupExaminations = (
  examinations: QueryExaminations,
  groupBy: 'date' | 'modality',
): GroupedExaminations => {
  return examinations.reduce<GroupedExaminations>((acc, { date, images }) => {
    images.forEach((image) => {
      const key = groupBy === 'date' ? date : image.modality;

      if (acc[key]) {
        acc[key] = [...acc[key], { date, ...image }];
      } else {
        acc[key] = [{ date, ...image }];
      }
    });

    return acc;
  }, {});
};
