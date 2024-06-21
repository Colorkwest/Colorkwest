import { useEffect, useState } from 'react';
import { useGetUsersUsersGet } from '../generated/api/default/default';
import { Box } from '@mui/material';
import { StatDisplay } from './StatDisplay';
import { UserAvatar } from './UserAvatar';
import { TrendDisplay } from './TrendDisplay';


type ProfileProps = {
    userID: number | null;
};

export function ProfileComponent({ userID }: ProfileProps) {
    // const { data: quests } = useGetQuestsQuestsGet();
    const { data: users } = useGetUsersUsersGet();
    if (userID === null) return;
    const getTotal = () => {
        var uinfo = users?.[userID];
        return uinfo?.cha + uinfo?.dex + uinfo?.int + uinfo?.str;
    }
    const handleClick = (e: Event) => {
        e.stopPropagation();
    }
    return (
        <Box onClick={handleClick} width={600} height={600} sx={{
            top: '20px',
            right: '20px',
            position: 'fixed',
            margin: '50px 15px',
            background: 'white',
            padding: '20px',
            gap: '15px',
            borderRadius: '10px',
        }}>
            <UserAvatar user_id={userID} />
            <div>{users?.[userID]?.name}</div>
            <div style={{ color: '#EC9007' }}>{'Charismatic Wizard Level 3'}</div>
            <div style={{ fontWeight: 'bold' }}>{getTotal()} Compeleted Tasks</div>
            <Box width={200} height={20}>
                <TrendDisplay str={users?.[userID]?.str} cha={users?.[userID]?.cha} int={users?.[userID]?.int} dex={users?.[userID]?.dex} />
            </Box>
            <Box width={400} height={400} >
                <StatDisplay str={users?.[userID]?.str} cha={users?.[userID]?.cha} int={users?.[userID]?.int} dex={users?.[userID]?.dex} />
            </Box>
        </Box>
    );
}
