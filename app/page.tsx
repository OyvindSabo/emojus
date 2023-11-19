import path from 'path';
import EmojiCard from '@/components/EmojiCard';
import { promises as fs } from 'fs';

export default async function Home() {
  const imageDirectory = path.join(process.cwd(), '/public/emoji');
  const filenames = await fs.readdir(imageDirectory);
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center">
      {filenames.map((fileName) => {
        return <EmojiCard key={fileName} fileName={fileName} />;
      })}
    </div>
  );
}
