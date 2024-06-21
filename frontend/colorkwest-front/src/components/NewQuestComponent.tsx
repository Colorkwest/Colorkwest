import { useState } from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import { TextField } from "@material-ui/core";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { useCreateQuestQuestsPost } from "../generated/api/default/default";
import { Done } from "@mui/icons-material";

const typeToTrait = (type: "cha" | "int" | "str" | "dex") => {
  switch (type) {
    case "str":
      return 1;
    case "dex":
      return 2;
    case "cha":
      return 3;
    case "int":
      return 4;
  }
};

const typeToVal = (type: "cha" | "int" | "str" | "dex") => {
  switch (type) {
    case "str":
      return 2;
    case "dex":
      return 2;
    case "cha":
      return 1;
    case "int":
      return 1;
  }
};

export const NewQuestModalComponent = ({
  onCreate,
}: {
  onCreate: () => void;
}) => {
  const [isCreate, setIsCreate] = useState<boolean>();
  const [selectedType, setSelectedType] = useState<
    "cha" | "int" | "str" | "dex"
  >("cha");

  const { trigger } = useCreateQuestQuestsPost();

  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [inputDeadline, setInputDeadline] = useState<Dayjs | null>(dayjs());
  const [inputLimit, setInputLimit] = useState<number>(0);
  const [inputTag, setInputTag] = useState<string[]>([]);
  const [status, setStatus] = useState<null | "loading" | "success">(null);

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

  const handleCreate = () => {
    setStatus("loading");
    trigger({
      author: 1,
      type: typeToVal(selectedType),
      trait: typeToTrait(selectedType),
      title: inputTitle,
      description: inputDescription,
      deadline: inputDeadline?.toISOString() ?? "",
      max_participants: inputLimit,
      status: 1,
      // tags: inputTag,
    }).then(() => {
      setStatus("success");
      setTimeout(() => {
        handleCancel();
        onCreate();
        setTimeout(() => {
          setStatus(null);
          setIsCreate(undefined);
        }, 500);
      }, 500);
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          pointerEvents: isCreate ? "all" : "none",
          position: "absolute",
          bottom: "24px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          zIndex: 999,
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
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            height: "550px",
            minWith: "300px",
            gap: "12px",
            backgroundColor: "#FFFFFF",
            padding: "32px 42px",
            borderRadius: "12px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {status === "success" ? (
            <Done sx={{ width: "100px", height: "100px" }} />
          ) : (
            <>
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
            </>
          )}
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
                transformOrigin: "center",
                pointerEvents: "all",
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
