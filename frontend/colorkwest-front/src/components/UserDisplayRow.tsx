import { Box, Typography } from '@mui/material';
import { UserAvatar } from './UserAvatar';

interface UserDisplayRowProps {
  user: number;
  date: string;
  text: string | null;
}

export function UserDisplayRow({ user, date, text }: UserDisplayRowProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '1px solid var(--Border, rgba(214, 214, 214, 1))',
        gap: 2,
        padding: 1,
        width: '100%',
      }}
    >
      <UserAvatar user_id={user} />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        {text && (
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            {text}
          </Typography>
        )}
        {date && (
          <Typography
            sx={{
              color: '#71727A',
              fontSize: '12px',
              fontWeight: 400,
            }}
          >
            {date}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
