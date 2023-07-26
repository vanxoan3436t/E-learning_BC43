//theme light-dark
import { Button } from '@mui/material'
import { useColorScheme, } from '@mui/material/styles';

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
    </Button>
  );
}