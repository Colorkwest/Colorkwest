import { useState } from 'react';
import { Box, Button } from '@mui/material';

export const NewQuestModalComponent = () => {
  const [isCreate, setIsCreate] = useState<boolean>(false);

  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');
  const [inputExpired, setInputExpired] = useState<string>('');
  const [inputHardness, setInputHardness] = useState<string>('');
  const [inputUUID, setInputUUID] = useState<string>('');
  const [inputCategory, setInputCategory] = useState<string>('');
  const [inputAward, setInputAward] = useState<number>(0);
  const [inputLimit, setInputLimit] = useState<number>(0);
  const [inputTag, setInputTag] = useState<Array<string>>([]);

  const handleCreate = () => {
    alert('create');
  };

  const style = isCreate ? { transform: 'rotate(45deg)' } : {};

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          opacity: '0%',
          flexDirection: 'column',
          animation: isCreate ? 'fadeIn 0.5s forwards' : 'fadeOut 0.5s forwards',
        }}
      >
        <input
          type="text"
          placeholder="please input Title"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="please intput Description"
          value={inputDescription}
          onChange={(e) => {
            setInputDescription(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="please input Expired"
          value={inputExpired}
          onChange={(e) => {
            setInputExpired(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="please input Hardness"
          value={inputHardness}
          onChange={(e) => {
            setInputHardness(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="please input UUID"
          value={inputUUID}
          onChange={(e) => {
            setInputUUID(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="please input Category"
          value={inputCategory}
          onChange={(e) => {
            setInputCategory(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="please input Award"
          value={inputAward}
          onChange={(e) => {
            setInputAward(Number(e.target.value));
          }}
        ></input>
        <input
          type="number"
          placeholder="please input Limit"
          value={inputTitle}
          onChange={(e) => {
            setInputLimit(Number(e.target.value));
          }}
        ></input>
        <input
          type="text"
          placeholder="please input Tag"
          value={inputTitle}
          onChange={(e) => {
            setInputTag(Array<string>(e.target.value));
          }}
        ></input>

        <button onClick={() => handleCreate()}>Submit</button>
      </Box>
      <Box>
        <Button
          sx={{ fontSize: '28px' }}
          variant="contained"
          onClick={() => setIsCreate((prev) => !prev)}
        >
          <Box sx={{ ...style, transition: 'all 0.2s ease-in-out' }}>+</Box>
        </Button>
      </Box>
    </Box>
  );
};
