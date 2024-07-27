import { ExaminationImage, ExaminationImageProps } from '../ExaminationImage';
import './ExaminationImagesList.css';

/*
 * Notes:
 * - Add visual regression test if using (eg. Story for Chromatic)
 */

export type ExaminationImagesListProps = {
  images: ExaminationImageProps[];
};

export const ExaminationImagesList = ({
  images,
}: ExaminationImagesListProps): JSX.Element => {
  return (
    <ul className="examination-images-list">
      {images.map((imageProps, i) => (
        <li key={i}>
          <ExaminationImage {...imageProps} />
        </li>
      ))}
    </ul>
  );
};
