import fs from 'fs';
import path from 'path';
import ImageComponent from './ImageComponent';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { options } from '../api/auth/[...nextauth]/options';
import UploadImage from './UploadImage';

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

async function deletePicture(file) {
  'use server';

  fs.rm(`public/images/${file}`);
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
  const session = await getServerSession(options);
  if (session.user.name !== 'admin') {
    redirect('/normalDashboard');
  }

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
                deletePicture={deletePicture}
              />
            </div>
          );
        })}
        <UploadImage />
      </div>
    </>
  );
}
