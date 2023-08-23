import fs from 'fs';
import path from 'path';
import ImageComponent from './ImageComponent';

function getImageFileNames() {
  const folderPath = 'public/images'; // Replace with the actual folder path
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const imageFiles = files.filter((file) => {
        const extname = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif'].includes(extname);
      });

      resolve(imageFiles);
    });
  });
}

async function Rename(oldFileName, newFileName) {
  'use server';

  try {
    fs.renameSync(
      `public/images/${oldFileName}`,
      `public/images/${newFileName}`
    );
  } catch (error) {
    console.error('Error renaming file:', error);
  }
}

export default async function Page() {
  const images = await getImageFileNames();
  return (
    <>
      <div className='flex flex-row flex-wrap gap-5 justify-center p-5'>
        {images.map((file, i) => {
          return (
            <div key={i}>
              <ImageComponent
                file={file}
                Rename={Rename}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
