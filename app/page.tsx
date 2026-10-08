import { Suspense } from 'react';
import HomeRedirect from './components/homeRedirect';

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeRedirect />
    </Suspense>
  );
}