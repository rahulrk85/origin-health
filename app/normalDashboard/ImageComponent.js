'use client';
import Image from 'next/image';

export default function ImageComponent({ file, Rename }) {
  return (
    <>
      <Image
        src={`/images/${file}`}
        width={200}
        height={200}
        className='w-fit h-fit'
        alt='Cat'
      />
      <form
        onSubmit={(e) => {
          Rename(file, e.target.imageData.value);
        }}>
        <input
          defaultValue={file}
          type='text'
          name='imageData'
          className='text-white bg-black'
        />
        <button type='submit'>Change-label</button>
      </form>
    </>
  );
}
