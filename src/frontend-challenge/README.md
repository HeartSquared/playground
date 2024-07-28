# iCare Oculo - Frontend challenge

## Installation

Note: All commands are run from the root of the repo.

This app runs using [pnpm](https://pnpm.io/).

Install packages (prerequisite):

```
pnpm i
```

To run the app:

```
pnpm dev
```

To run storybook:

```
pnpm storybook
```

To run tests:

```
pnpm test
```

To run linting:

```
pnpm lint
```

## Brief

_Extracted from PDF._

- Assuming that they have uploaded 6 images in total from 2 different types of cameras and they have added the meta data during the process of uploading. (see example JSON)
- We would like you to create a view showing the images and associated meta data which has a toggle that enables the Optometrist to group images by modality or examination date. You don’t have to worry about headers and footers for the view. You can use the images provided.
- You can assume this app to only be run in modern browsers (Chrome, Safari, Firefox) supporting recent features.
- Styles from https://www.oculo.com.au/ (as a guide)

## Scope

- List each Image with associated metadata
  - Date
  - Eye
  - Modality
  - Note
- Toggle to group by Modality or Date

## Notes

- Loch ness image isn't relevant. Would not commit normally.
- Stories are added as a representation of visual regression tests.
- Styles not finessed.
- Naming is hard.
