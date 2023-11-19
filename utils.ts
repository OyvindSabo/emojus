export const getFilePathFromFileName = (fileName: string) => {
  return `/emoji/${fileName}`;
};

export const getEmojiNameFromFileName = (fileName: string) => {
  return fileName.split('.')[0];
};

export const getAbsoluteImagePathFromFileName = (fileName: string) => {
  return `https://emojus.com/public/emoji/${fileName}`;
};

export const getMarkdownLinkFromFileName = (fileName: string) => {
  const emojiName = getEmojiNameFromFileName(fileName);
  const absoluteImagePath = getAbsoluteImagePathFromFileName(fileName);
  return `<img src="${absoluteImagePath}" alt=${emojiName} height=14 />`;
};
