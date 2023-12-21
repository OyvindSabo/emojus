import path from 'path';
import AssetCard from '@/components/AssetCard';
import { promises as fs } from 'fs';

export default async function Stickers() {
  const imageDirectory = path.join(process.cwd(), '/public/stickers');
  const filenames = await fs.readdir(imageDirectory);
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center">
      {filenames.map((fileName) => {
        return (
          <AssetCard key={fileName} fileName={fileName} assetType="sticker" />
        );
      })}
    </div>
  );
}
