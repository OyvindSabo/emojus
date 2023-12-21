import { AssetType } from './types';

export const getFilePathFromFileName = (
  fileName: string,
  assetType: AssetType
) => {
  return assetType === 'emojus'
    ? `/emoji/${fileName}`
    : `/stickers/${fileName}`;
};

export const getAssetNameFromFileName = (fileName: string) => {
  return fileName.split('.')[0];
};

export const getAbsoluteImagePathFromFileName = (
  fileName: string,
  assetType: AssetType
) => {
  return assetType === 'emojus'
    ? `https://emojus.com/emoji/${fileName}`
    : `https://emojus.com/stickers/${fileName}`;
};

export const getMarkdownLinkFromFileName = (
  fileName: string,
  assetType: AssetType
) => {
  const emojiName = getAssetNameFromFileName(fileName);
  const absoluteImagePath = getAbsoluteImagePathFromFileName(
    fileName,
    assetType
  );
  const height = assetType === 'emojus' ? 18 : 256;
  return `<img align="top" src="${absoluteImagePath}" alt="${emojiName}" height="${height}" />`;
};
