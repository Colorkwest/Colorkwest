import { Chip } from '@mui/material';
import { Trait } from '../generated/dto';

interface TraitChipProps {
  trait?: Trait;
  name?: string;
}

export function TraitChip({ trait, name }: TraitChipProps) {
  let chipText = name?.toUpperCase();
  let bgColor;
  let textColor;
  switch (trait) {
    case 1:
      chipText = 'STRENGTH';
      bgColor = 'rgba(0, 111, 253, 0.1)';
      textColor = '#006FFD';
      break;
    case 2:
      chipText = 'DEXTERITY';
      bgColor = 'rgba(0, 111, 253, 0.1)';
      textColor = '#006FFD';
      break;
    case 3:
      chipText = 'CHARISMA';
      bgColor = 'rgba(236, 144, 7, 0.1)';
      textColor = '#EC9007';
      break;
    case 4:
      chipText = 'INTELLIGENCE';
      bgColor = 'rgba(236, 144, 7, 0.1)';
      textColor = '#EC9007';
      break;
    case undefined:
      break;
  }
  return (
    <Chip
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        fontSize: '10px',
        fontWeight: 600,
      }}
      label={chipText}
    />
  );
}
