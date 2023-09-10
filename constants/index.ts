import Reaction from '@/public/icon-reaction.svg';
import Memory from '@/public/icon-memory.svg';
import Verbal from '@/public/icon-verbal.svg';
import Visual from '@/public/icon-visual.svg';

interface SummaryItemProps {
  icon: string;
  title: string;
  rate: string;
  color: 'red' | 'yellow' | 'green' | 'blue';
}

const summaryItemData: SummaryItemProps[] = [
  {
    icon: Reaction,
    title: 'Reaction',
    rate: '80',
    color: 'red',
  },
  {
    icon: Memory,
    title: 'Memory',
    rate: '92',
    color: 'yellow',
  },
  {
    icon: Verbal,
    title: 'Verbal',
    rate: '61',
    color: 'green',
  },
  {
    icon: Visual,
    title: 'Visual',
    rate: '73',
    color: 'blue',
  },
];

export { summaryItemData };
