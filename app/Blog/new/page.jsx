// app/blog/new/page.jsx
import { redirect } from 'next/navigation';
import { isAdmin, getSessionUser } from '@/lib/auth';
import CreateForm from './post-form';

export default async function NewPostPage() {
  const [ok, user] = await Promise.all([isAdmin(), getSessionUser()]);
  if (!ok || !user) redirect('/login');
  return <CreateForm email={user.email} />;
}
