import { useState } from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import { TextField } from "@material-ui/core";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";

export const NewQuestModalComponent = () => {
  const [isCreate, setIsCreate] = useState<boolean>();
  const [selectedType, setSelectedType] = useState<
    "cha" | "int" | "str" | "dex"
  >("cha");

  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [inputDeadline, setInputDeadline] = useState<Dayjs | null>(dayjs());
  const [inputLimit, setInputLimit] = useState<number>(0);
  const [inputTag, setInputTag] = useState<string[]>([]);

  const style = isCreate ? { transform: "rotate(45deg)" } : {};

  const handleCancel = () => {
    setIsCreate(false);
    setInputTitle("");
    setInputDescription("");
    setInputDeadline(dayjs());
    setInputLimit(0);
    setInputTag([]);
    setSelectedType("cha");
  };

  const handleCreate = () => {};

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "12px 0px",
              width: "100%",
            }}
          >
            <TextField
              label="Title"
              value={inputTitle}
              fullWidth
              variant="outlined"
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <TextField
              label="Description"
              value={inputDescription}
              fullWidth
              variant="outlined"
              onChange={(e) => setInputDescription(e.target.value)}
            />
            <Box sx={{ display: "flex", width: "100%", gap: "12px" }}>
              <DatePicker
                label="Deadline"
                value={inputDeadline}
                onChange={(newValue) => setInputDeadline(newValue)}
              />
              <TextField
                label="Limit"
                variant="outlined"
                type="number"
                value={inputLimit}
                onChange={(e) => setInputLimit(Number(e.target.value))}
                fullWidth
              />
            </Box>
          </Box>
          <Autocomplete
            multiple
            options={["Cat", "Dog"]}
            defaultValue={inputTag}
            value={inputTag}
            onChange={(event, newValue) => {
              setInputTag(newValue);
            }}
            freeSolo
            fullWidth
            color="error"
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => {
                const { key, ...tagProps } = getTagProps({ index });
                return (
                  <Chip
                    variant="outlined"
                    label={option}
                    key={key}
                    {...tagProps}
                  />
                );
              })
            }
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Tags" />
            )}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              gap: "24px",
            }}
          >
            <Button
              sx={{
                borderRadius: "25px",
                width: "120px",
                height: "50px",
              }}
              variant="contained"
              color="warning"
              onClick={handleCancel}
            >
              CANCEL
            </Button>
            <Button
              sx={{
                borderRadius: "25px",
                width: "120px",
                height: "50px",
              }}
              variant="contained"
              color="info"
              onClick={handleCreate}
            >
              CREATE
            </Button>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              fontSize: "32px",
              borderRadius: "25px",
              width: "60px",
              height: "50px",
            }}
            variant="contained"
            color="info"
            onClick={() => setIsCreate((prev) => !prev)}
          >
            <Box
              sx={{
                ...style,
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "4px",
                transition: "all 0.2s ease-in-out",
              }}
            >
              +
            </Box>
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};
