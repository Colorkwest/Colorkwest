import { Chip } from '@mui/material';
import { Trait } from '../generated/dto';

interface TraitChipProps {
  trait?: Trait;
  name?: string;
}

export function TraitChip({ trait, name }: TraitChipProps) {
  let chipText = name;
  let color: 'default' | 'secondary' | 'primary' = 'default';
  switch (trait) {
    case 1:
      chipText = 'Strength';
      color = 'primary';
      break;
    case 2:
      chipText = 'Dexterity';
      color = 'primary';
      break;
    case 3:
      chipText = 'Charisma';
      color = 'secondary';
      break;
    case 4:
      chipText = 'Intelligence';
      color = 'secondary';
      break;
    case undefined:
      break;
  }
  return <Chip color={color} label={chipText} />;
}
