'use client';
import Image from 'next/image';
import {
  getEmojiNameFromFileName,
  getFilePathFromFileName,
  getMarkdownLinkFromFileName,
} from '@/utils';
import Toast from './Toast';
import { useEffect, useState } from 'react';

type EmojiCardProps = {
  fileName: string;
};

const EmojiCard = ({ fileName }: EmojiCardProps) => {
  const filePath = getFilePathFromFileName(fileName);
  const emojiName = getEmojiNameFromFileName(fileName);
  const markdownLink = getMarkdownLinkFromFileName(fileName);
  const [shouldShowToast, setShouldShowToast] = useState(false);
  useEffect(() => {
    if (!shouldShowToast) return;
    setTimeout(() => {
      setShouldShowToast(false);
    }, 2000);
  }, [shouldShowToast]);
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
            setShouldShowToast(true);
          }}
        >
          Copy to clipboard
        </button>
        {shouldShowToast && <Toast>Copied to clipboard</Toast>}
      </div>
    </div>
  );
};

export default EmojiCard;
