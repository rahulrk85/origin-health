import { getServerSession } from 'next-auth/next';
import { options } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession(options);
  if (session.user.name !== 'admin') {
    redirect('/normalDashboard');
  }
  redirect('/adminDashboard');
  return null;
}
