import Navigation from './layout/navigation';

export default function Page({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
