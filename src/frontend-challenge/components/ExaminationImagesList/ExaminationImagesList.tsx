import { ImageMeta } from '../../pages/ExaminationsPage/types';
import { ExaminationImage } from '../ExaminationImage';
import './ExaminationImagesList.css';

export type ExaminationImagesListProps = {
  images: ImageMeta[];
};

export const ExaminationImagesList = ({
  images,
}: ExaminationImagesListProps): JSX.Element => {
  return (
    <div className="container__examination-images-list">
      <ul className="examination-images-list">
        {images.map((imageProps, i) => (
          <li key={i}>
            <ExaminationImage {...imageProps} />
          </li>
        ))}
      </ul>
    </div>
  );
};
