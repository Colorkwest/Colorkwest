import { Chip } from '@mui/material';
import { Trait } from '../generated/dto';

interface TraitChipProps {
  trait: Trait;
}

export function TraitChip({ trait }: TraitChipProps) {
  let traitName = '';
  switch (trait) {
    case 1:
      traitName = 'Strength';
      break;
    case 2:
      traitName = 'Dexterity';
      break;
    case 3:
      traitName = 'Charisma';
      break;
    case 4:
      traitName = 'Intelligence';
      break;
  }
  return <Chip label={traitName} />;
}
