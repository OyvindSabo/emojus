import Image from 'next/image';
import {
  getEmojiNameFromFileName,
  getFilePathFromFileName,
  getMarkdownLinkFromFileName,
} from '@/utils';

type EmojiCardProps = {
  fileName: string;
};

const EmojiCard = ({ fileName }: EmojiCardProps) => {
  const filePath = getFilePathFromFileName(fileName);
  const emojiName = getEmojiNameFromFileName(fileName);
  const markdownLink = getMarkdownLinkFromFileName(fileName);
  return (
    <div className="w-64 rounded border border-solid border-gray-200">
      <Image src={filePath} alt={emojiName} width={256} height={256} />
      <p className="text-center text-s font-bold">{emojiName}</p>
      <p className="text-center text-xs">{markdownLink}</p>
    </div>
  );
};

export default EmojiCard;
