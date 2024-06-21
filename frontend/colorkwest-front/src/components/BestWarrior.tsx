import { Box, Typography } from '@mui/material';
import { UserAvatar } from './UserAvatar';

interface Props {
    user: User;
    type: number;
}

export const BestWarrior = ({ user, type }: Props) => {
    const bestTitle = ["Str Warrior", "Cha Wizard", "Int Agent", "Dex Ninja"];
    const color = ["#EC9007", "#006FFD"];

    const score = () => {
        switch (type) {
            case 0:
                return user.int;
            case 1:
                return user.cha;
            case 2:
                return user.str;
            case 3:
                return user.dex;
            case 4:
                return user.str + user.int + user.cha + user.dex;
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80px',
            borderRadius: '10px',
            margin: '0 5px',
            flex: 1,
            alignContent: 'center',
            // backgroundColor: 'rgba(0.5,0.5,0.5,0.1)'
        }}>
            {user && (
                <>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <UserAvatar user_id={Number(user.id)} />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 800,
                            alignContent: 'center',
                        }}
                    >{user.name}</Typography>
                    {type === 4 ? (
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 800,
                                alignContent: 'center',
                            }}
                        >{score()}</Typography>
                    ) : (
                        <>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    alignContent: 'center',
                                    color: color[Math.floor(type / 2)],
                                }}
                            >{bestTitle[type]}</Typography>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    alignContent: 'center',
                                    color: color[Math.floor(type / 2)],
                                }}
                            >Lv: {score()}</Typography>
                        </>
                    )}
                </>
            )}
        </Box>
    )
}