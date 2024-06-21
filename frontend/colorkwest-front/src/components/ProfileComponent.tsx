import { useGetUsersUsersGet } from "../generated/api/default/default";
import { Box, Typography, Icon } from "@mui/material";
import { StatDisplay } from "./StatDisplay";
import { UserAvatar } from "./UserAvatar";
import { TrendDisplay } from "./TrendDisplay";

type ProfileProps = {
  userID: number | null;
};

export function ProfileComponent({ userID }: ProfileProps) {
  // const { data: quests } = useGetQuestsQuestsGet();
  const { data: users } = useGetUsersUsersGet();
  console.log(users?.[userID ?? 0]);
  if (userID === null) return;
  const getTotal = () => {
    const uinfo = users?.[userID];
    return uinfo?.cha + uinfo?.dex + uinfo?.int + uinfo?.str;
  };
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <Box
      onClick={handleClick}
      width={500}
      height={500}
      sx={{
        top: "20px",
        right: "20px",
        position: "fixed",
        margin: "50px 15px",
        background: "white",
        padding: "20px",
        height: '650px',
        gap: "15px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        sx={{
          margin: "12px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{marginBottom: '4px'}}>
          <UserAvatar user_id={userID} />
        </Box>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 800,
            alignContent: "center",
          }}
        >
          {users?.[userID]?.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            alignContent: "center",
            color: "#EC9007",
            lineHeight: "1",
          }}
        >
          Charismatic Wizard
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            alignContent: "center",
            color: "#EC9007",
            lineHeight: "1",
          }}
        >
          Level 3
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Icon sx={{ height: "80px", width: "100%", flex: 1 }}>
          <img src="src/assets/brain.svg" />
        </Icon>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Typography
            sx={{
              fontSize: "14px",
              textAlign: "center",
              fontWeight: 700,
              alignContent: "center",
              width: "100%",
            }}
          >
            {getTotal()} Completed Tasks
          </Typography>
          <Box width={200} height="35px">
            <TrendDisplay
              str={users?.[userID]?.str}
              cha={users?.[userID]?.cha}
              int={users?.[userID]?.int}
              dex={users?.[userID]?.dex}
            />
          </Box>
        </Box>
        <Icon sx={{ height: "80px", width: "100%", flex: 1 }}>
          <img src="src/assets/brawn.svg" />
        </Icon>
      </Box>
      <Box sx={{ display: "flex" }} width="100%" height={400}>
        <StatDisplay
          str={users?.[userID]?.str}
          cha={users?.[userID]?.cha}
          int={users?.[userID]?.int}
          dex={users?.[userID]?.dex}
        />
      </Box>
      <Box sx={{textAlign: 'center'}}>
        <Typography variant='caption'>FAVOURITE KEYWORD IS</Typography>
        <Typography sx={{fontWeight: 700}}>CAT</Typography>
      </Box>
    </Box>
  );
}
