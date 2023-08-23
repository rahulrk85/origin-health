'use client';
import Image from 'next/image';

export default function ImageComponent({ file, Rename, deletePicture }) {
  return (
    <>
      <Image
        src={`/images/${file}`}
        width={200}
        height={200}
        className='w-fit h-fit'
        alt='Cat'
      />
      <div className='flex flex-col'>
        <form
          onSubmit={(e) => {
            Rename(file, e.target.imageData.value);
          }}>
          <input
            defaultValue={file}
            type='text'
            name='imageData'
            className='text-white bg-black border-2 border-zinc-500 rounded-md'
          />
          <div className='space-x-5'>
            <button type='submit'>Change-label</button>
            <button
              type='buttom'
              onClick={(e) => {
                deletePicture(file);
              }}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
