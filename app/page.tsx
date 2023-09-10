import Result from '@/components/result';
import Summary from '@/components/summary';

export default function Home() {
  return (
    <main className='flex flex-col md:flex-row bg-white rounded-[32px] w-full md:w-auto'>
      <Result />
      <Summary />
    </main>
  );
}
