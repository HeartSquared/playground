/*
 * Notes:
 * Assumption that all types follow this structure
 * and all fields are required
 */

type QueryExaminationImage = {
  eye: string;
  modality: string;
  note: string;
  thumbnail: string;
};

type QueryExamination = {
  date: string;
  images: QueryExaminationImage[];
};

export type QueryExaminations = QueryExamination[];

export type ImageMeta = {
  date: string;
  eye: string;
  modality: string;
  note: string;
  thumbnail: string;
};
