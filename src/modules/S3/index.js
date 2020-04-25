import {encode} from 'base-64';

export const S3Photos = {
  bucket: 'fithubapp',
  base: 'https://dozj53nzzeirv.cloudfront.net/',
};
export const S3Browser = {
  bucket: 'fithubapp',
  base: 'https://fithubapp.s3.amazonaws.com/',
};

export const getVideo = (path) => {
  const url = `${S3Browser.base}${path}`;
  if (!path) {
    return ' ';
  }
  return url;
};

export const getAvatarPhoto = (path = '', width = 400, height = 400) => {
  const json = JSON.stringify({
    bucket: S3Photos.bucket,
    key: path,
    edits: {
      resize: {
        width: width,
        height: height,
        fit: 'cover',
      },
    },
  });
  const base64 = encode(json);
  const url = `${S3Photos.base}${base64}`;
  if (!path) {
    return ' ';
  }
  return url;
};

export const getFullPicture = (path) => {
  const json = JSON.stringify({
    bucket: S3Photos.bucket,
    key: path,
  });
  const base64 = encode(json);
  const url = `${S3Photos.base}${base64}`;
  if (!path) {
    return ' ';
  }
  return url;
};

export const getCroppedPicture = (path, {width, height}) => {
  const json = JSON.stringify({
    bucket: S3Photos.bucket,
    key: path,
    edits: {
      resize: {
        width: width || 400,
        height: height || 400,
        fit: 'contain',
        background: {
          r: 255,
          g: 255,
          b: 255,
          alpha: 1,
        },
      },
    },
  });

  const base64 = encode(json);
  const url = `${S3Photos.base}${base64}`;
  if (!path) {
    return ' ';
  }
  return url;
};
