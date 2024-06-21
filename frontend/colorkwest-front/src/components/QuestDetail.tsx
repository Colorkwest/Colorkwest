import { useEffect, useMemo, useState } from "react";
import { QuestTypeEnum } from "../enums";
import { DetailedQuest } from "../generated/dto";
import { BrainDetail } from "./BrainDetail";
import { BrawnDetail } from "./BrawnDetail";
import { Box } from "@mui/material";

interface QuestDetailProps {
  quest: DetailedQuest;
}

export function QuestDetail({ quest }: QuestDetailProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const detail = useMemo(() => {
    if (quest.type == QuestTypeEnum.BRAIN) {
      return <BrainDetail quest={quest} />;
    } else if (quest.type == QuestTypeEnum.BRAWN) {
      return <BrawnDetail quest={quest} />;
    }
    return <></>;
  }, [quest]);

  useEffect(() => {
    setExpanded(true)
  }, [])
  return (
    <Box
      sx={{
        maxHeight: expanded ? '500px' : 0,
        transition: "max-height 0.5s ease-out",
        overflowY: "auto",
      }}
    >
      {detail}
    </Box>
  );
}
