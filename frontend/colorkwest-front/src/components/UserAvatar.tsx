import { Avatar } from '@mui/material';
interface UserAvatarProps {
  user_id: number;
}

export function UserAvatar({ user_id }: UserAvatarProps) {
  const num_avatars = 5;
  if (user_id < 1 || user_id > num_avatars) {
    console.log(`missing avatar for user: ${user_id}`);
    user_id = user_id % num_avatars;
  }
  return <Avatar alt="user pic" src={`src/assets/user${(user_id + 1).toString()}.svg`} />;
}
