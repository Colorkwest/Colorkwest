import { Avatar } from '@mui/material';

export function RandomAvatar() {
  const num_avatars = 6;
  const selected_avatar = Math.floor(Math.random() * num_avatars + 1).toString();
  return <Avatar alt="user pic" src={`src/assets/user${selected_avatar}.svg`} />;
}
