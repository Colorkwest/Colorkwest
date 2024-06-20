import { Tab, Tabs } from '@mui/material';

type TabSelectorProps = {
  selectedTab: number;
  setSelectedTab: (n: number) => void;
};

export function TabSelector({ selectedTab, setSelectedTab }: TabSelectorProps) {
  return (
    <Tabs
      value={selectedTab}
      onChange={(_, newValue) => setSelectedTab(newValue)}
      aria-label="basic tabs example"
      textColor="inherit"
      indicatorColor="primary"
      centered
      sx={{ '& .Mui-selected': { fontWeight: 800 } }}
    >
      <Tab disableRipple label="All Quests" />
      <Tab disableRipple label="My Tasks" />
      <Tab disableRipple label="My Requests" />
    </Tabs>
  );
}
