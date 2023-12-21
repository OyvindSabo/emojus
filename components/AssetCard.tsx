'use client';
import Image from 'next/image';
import {
  getAssetNameFromFileName,
  getFilePathFromFileName,
  getMarkdownLinkFromFileName,
} from '@/utils';
import Toast from './Toast';
import { useEffect, useState } from 'react';
import { AssetType } from '@/types';

type EmojiCardProps = {
  fileName: string;
  assetType: AssetType;
};

const EmojiCard = ({ fileName, assetType }: EmojiCardProps) => {
  const filePath = getFilePathFromFileName(fileName, assetType);
  const emojiName = getAssetNameFromFileName(fileName);
  const markdownLink = getMarkdownLinkFromFileName(fileName, assetType);
  const [shouldShowToast, setShouldShowToast] = useState(false);
  useEffect(() => {
    if (!shouldShowToast) return;
    setTimeout(() => {
      setShouldShowToast(false);
    }, 2000);
  }, [shouldShowToast]);
  return (
    <div className="w-[384px] rounded border border-solid border-gray-200">
      <div className="bg-gray-100">
        <Image
          className="block mx-auto"
          src={filePath}
          alt={emojiName}
          width={assetType === 'emojus' ? 256 : 384}
          height={assetType === 'emojus' ? 256 : 384}
        />
      </div>
      <div className="p-4">
        <p className="text-center text-s font-bold">{emojiName}</p>
        <div>
          <label>Use in GitHub markdown:</label>
        </div>
        <div className="flex">
          <input className="grow rounded-l" disabled value={markdownLink} />
          <button
            className="rounded-r"
            onClick={() => {
              navigator.clipboard.writeText(markdownLink);
              setShouldShowToast(true);
            }}
          >
            Copy to clipboard
          </button>
        </div>
        {shouldShowToast && <Toast>Copied to clipboard</Toast>}
      </div>
    </div>
  );
};

export default EmojiCard;
