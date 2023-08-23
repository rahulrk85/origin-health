'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function UploadImage() {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    try {
      const data = new FormData();
      data.set('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
    } catch (err) {
      console.log(err);
    } finally {
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='file'
        name='file'
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        type='submit'
        className='text-black bg-white p-3 text-lg rounded-lg cursor-wait'>
        Upload
      </button>
    </form>
  );
}
