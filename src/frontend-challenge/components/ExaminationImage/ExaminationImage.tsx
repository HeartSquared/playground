import './ExaminationImage.css';

/*
 * Notes:
 * - Add visual regression test if using (eg. Story for Chromatic)
 */

export type ExaminationImageProps = {
  date: string;
  eye: string;
  modality: string;
  note: string;
  thumbnail: string;
};

export const ExaminationImage = ({
  date,
  eye,
  modality,
  note,
  thumbnail,
}: ExaminationImageProps): JSX.Element => {
  // Assume that the data only ever comes in as 'L' or 'R'
  const eyeFullString = eye === 'L' ? 'Left eye' : 'Right eye';
  return (
    <div className="examination-image">
      <p>{eyeFullString}</p>
      <img src={thumbnail} alt={`${eyeFullString} ${modality}`} />
      <dl>
        <dt className="examination-image__dt">Date</dt>
        <dd className="examination-image__dd">{date}</dd>
        <dt className="examination-image__dt">Modality</dt>
        <dd className="examination-image__dd">{modality}</dd>
        <dt className="examination-image__dt">Note</dt>
        <dd className="examination-image__dd">{note}</dd>
      </dl>
    </div>
  );
};
