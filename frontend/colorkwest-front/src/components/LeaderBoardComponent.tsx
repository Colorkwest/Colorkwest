import { useState } from 'react';
import { useGetUsersUsersGet } from '../generated/api/default/default';
import { Box, Typography, Icon } from '@mui/material';
// import { UserAvatar } from './UserAvatar';
import { BestWarrior } from './BestWarrior';

interface Props {
    handleClose: () => void;
}

export const LeaderBoardComponent = ({ handleClose }: Props) => {
    const { data: users } = useGetUsersUsersGet();

    const userList = users && Object.entries(users).map(([key, value]) => ({ ...value, 'id': key, 'score': value.int + value.dex + value.cha + value.str }));
    const bestAll = userList?.sort(function (a, b) {
        if (a.score > b.score) return -1;
        if (a.score < b.score) return 1;
        return 0;
    });

    const bestStr = userList?.sort(function (a, b) {
        if (a.str > b.str) return -1;
        if (a.str < b.str) return 1;
        return 0;
    })?.[0];

    const bestCha = userList?.sort(function (a, b) {
        if (a.cha > b.cha) return -1;
        if (a.cha < b.cha) return 1;
        return 0;
    })?.[0];

    const bestInt = userList?.sort(function (a, b) {
        if (a.int > b.int) return -1;
        if (a.int < b.int) return 1;
        return 0;
    })?.[0];

    const bestDex = userList?.sort(function (a, b) {
        if (a.dex > b.dex) return -1;
        if (a.dex < b.dex) return 1;
        return 0;
    })?.[0];


    return (
        <Box onClick={handleClose} sx={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: 'center',
            backgroundColor: 'rgba(1,1,1,0.2)',
            zIndex: 998
        }}>
            <Box onClick={(e) => e.stopPropagation()} sx={{
                position: 'relative',
                top: '200px',
                width: '800px',
                height: '600px',
                margin: 'auto',
                backgroundColor: 'white',
                textAlign: 'center',
            }}>
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: 800,
                        alignContent: 'center',
                    }}
                >{'Who are masters?'}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 800,
                        alignContent: 'center',
                    }}
                >{'ALL ROUNDER for 2024'}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        height: '100%',
                        textAlign: 'center'
                    }}
                >
                    <Box sx={{
                        margin: '0 10px',
                        flex: 2
                    }}>
                        <Icon sx={{ height: "80px", width: "100%", flex: 1 }}>
                            <img src="src/assets/brain.svg" />
                        </Icon>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                alignContent: 'center',
                                fontWeight: 800,
                                color: '#EC9007',
                            }}
                        >Brain Masters</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <BestWarrior type={0} user={bestStr} />
                            <BestWarrior type={1} user={bestCha} />
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        flex: 3
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <BestWarrior type={5} user={bestAll?.[1]} />
                            <BestWarrior type={5} user={bestAll?.[0]} />
                            <BestWarrior type={5} user={bestAll?.[2]} />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                        }}>
                            {bestAll?.map((value, index) => (<div key={index} >{index}th {value.name} {value.score}</div>))}
                        </Box>
                    </Box>
                    <Box sx={{
                        margin: '0 10px',
                        flex: 2
                    }}>
                        <Icon sx={{ height: "80px", width: "100%", flex: 1 }}>
                            <img src="src/assets/brawn.svg" />
                        </Icon>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                alignContent: 'center',
                                fontWeight: 800,
                                color: '#006FFD',
                            }}
                        >Brawn Masters</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <BestWarrior type={2} user={bestInt} />
                            <BestWarrior type={3} user={bestDex} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};