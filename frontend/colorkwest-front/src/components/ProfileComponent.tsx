import { useEffect, useState } from 'react';
import { useGetUsersUsersGet } from '../generated/api/default/default';
import { Box, Typography, Icon } from '@mui/material';
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
        <Box onClick={handleClick} width={500} height={500} sx={{
            top: '20px',
            right: '20px',
            position: 'fixed',
            margin: '50px 15px',
            background: 'white',
            padding: '20px',
            gap: '15px',
            borderRadius: '10px',
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', }} >
                <UserAvatar user_id={userID} />
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: 800,
                        alignContent: 'center'
                    }}
                >
                    {users?.[userID]?.name}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '14px',
                        // fontWeight: 800,
                        alignContent: 'center',
                        color: '#EC9007',
                    }}
                >
                    {'Charismatic Wizard Level 3'}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Icon sx={{ height: "80px", width: "100%", flex: 1 }}>
                    <img src="src/assets/brain.svg" />
                </Icon>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Typography
                        sx={{
                            fontSize: '18px',
                            fontWeight: 800,
                            alignContent: 'center',
                            flex: 1
                        }}
                    >
                        {getTotal()} Compeleted Tasks
                    </Typography>
                    <Box sx={{ flex: 1 }} width={200} height={20} >
                        <TrendDisplay str={users?.[userID]?.str} cha={users?.[userID]?.cha} int={users?.[userID]?.int} dex={users?.[userID]?.dex} />
                    </Box>
                </Box>
                <Icon sx={{ height: "80px", width: "100%", flex: 1 }}>
                    <img src="src/assets/brawn.svg" />
                </Icon>
            </Box>
            <Box sx={{ display: 'flex' }} width="100%" height={400} >
                <StatDisplay str={users?.[userID]?.str} cha={users?.[userID]?.cha} int={users?.[userID]?.int} dex={users?.[userID]?.dex} />
            </Box>
        </Box>
    );
}
