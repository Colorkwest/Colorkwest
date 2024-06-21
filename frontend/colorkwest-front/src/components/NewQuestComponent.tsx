import { useState } from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import BrainIcon from "../assets/brain.svg";

export const NewQuestModalComponent = () => {
  const [isCreate, setIsCreate] = useState<boolean>();
  const [selectedType, setSelectedType] = useState<
    "cha" | "int" | "str" | "dex"
  >("cha");

  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [inputExpired, setInputExpired] = useState<string>("");
  const [inputHardness, setInputHardness] = useState<string>("");
  const [inputUUID, setInputUUID] = useState<string>("");
  const [inputCategory, setInputCategory] = useState<string>("");
  const [inputAward, setInputAward] = useState<number>(0);
  const [inputLimit, setInputLimit] = useState<number>(0);
  const [inputTag, setInputTag] = useState<Array<string>>([]);

  const style = isCreate ? { transform: "rotate(45deg)" } : {};

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "24px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Box
        sx={{
          display: isCreate === undefined ? "none" : "flex",
          opacity: "0%",
          flexDirection: "column",
          animation: isCreate
            ? "fadeIn 0.5s forwards"
            : "fadeOut 0.5s forwards",
          width: "30%",
          minWith: "300px",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "#FFFFFF",
          padding: "32px 42px",
          borderRadius: "12px",
          borderShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: 800,
            lineHeight: "31.47px",
            textAlign: "center",
          }}
        >
          What do you need?
        </Typography>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Icon sx={{ height: "80px", width: "100%" }}>
              <img src="src/assets/brain.svg" />
            </Icon>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: 800,
                lineHeight: "25.41px",
                textAlign: "center",
                color: "#EC9007",
              }}
            >
              BRAIN
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Icon sx={{ height: "80px", width: "100%" }}>
              <img src="src/assets/brawn.svg" />
            </Icon>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: 800,
                lineHeight: "25.41px",
                textAlign: "center",
                color: "#006FFD",
              }}
            >
              BRAWN
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", gap: "12px" }}>
          <Button
            sx={{ padding: "8px 24px", fontWeight: 800 }}
            color="success"
            variant={selectedType === "cha" ? "contained" : "outlined"}
            fullWidth
            onClick={() => setSelectedType("cha")}
          >
            CHARISMA
          </Button>
          <Button
            sx={{ padding: "8px 32px", fontWeight: 800 }}
            color="success"
            variant={selectedType === "int" ? "contained" : "outlined"}
            fullWidth
            onClick={() => setSelectedType("int")}
          >
            INTELLIGENCE
          </Button>
          <Button
            sx={{ padding: "8px 24px", fontWeight: 800 }}
            color="error"
            variant={selectedType === "str" ? "contained" : "outlined"}
            fullWidth
            onClick={() => setSelectedType("str")}
          >
            STRENGTH
          </Button>
          <Button
            sx={{ padding: "8px 24px", fontWeight: 800 }}
            color="error"
            variant={selectedType === "dex" ? "contained" : "outlined"}
            fullWidth
            onClick={() => setSelectedType("dex")}
          >
            DEXTERITY
          </Button>
        </Box>
        <button onClick={() => {}}>Submit</button>
      </Box>
      <Box>
        <Button
          sx={{ fontSize: "32px", borderRadius: "25px", width:'60px', height: '50px'}}
          variant="contained"
          color="info"
          onClick={() => setIsCreate((prev) => !prev)}
        >
          <Box
            sx={{
              ...style,
              display: "flex",
              height: '100%',
              justifyContent: "center",
              alignItems: "center",
              marginBottom: '4px',
              transition: "all 0.2s ease-in-out",
            }}
          >
            +
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
