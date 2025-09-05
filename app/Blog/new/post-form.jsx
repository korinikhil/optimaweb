// app/blog/new/post-form.jsx
'use client';

import { useState } from 'react';
import slugify from 'slugify';

export default function CreateForm({ email }) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);

  function updateTitle(v) {
    setTitle(v);
    setSlug(slugify(v, { lower: true, strict: true }));
  }

  async function submit(e) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, slug, content }),
    });
    setSaving(false);
    if (res.ok) window.location.href = `/blog/${slug}`;
    else alert('Failed to save');
  }

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 8 }}>
      <h1>New Post</h1>
      <input value={title} onChange={(e) => updateTitle(e.target.value)} placeholder="Title" required />
      <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" rows={10} required />
      <button disabled={saving} type="submit">{saving ? 'Saving...' : 'Publish'}</button>
      <p>Author: {email}</p>
    </form>
  );
}
