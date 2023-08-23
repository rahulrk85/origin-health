import { NextResponse } from 'next/server';
import { writeFile } from 'node:fs';

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('file');
  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  writeFile(`public/images/${file.name}`, buffer, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
