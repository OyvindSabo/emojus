'use client';
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
    <div className="w-128 rounded border border-solid border-gray-200">
      <Image
        className="mx-auto"
        src={filePath}
        alt={emojiName}
        width={256}
        height={256}
      />
      <div className="p-4">
        <p className="text-center text-s font-bold">{emojiName}</p>
        <div>
          <label>Use in GitHub markdown:</label>
        </div>
        <input className="rounded-l" disabled value={markdownLink} />
        <button
          className="rounded-r"
          onClick={() => {
            navigator.clipboard.writeText(markdownLink);
          }}
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
};

export default EmojiCard;
