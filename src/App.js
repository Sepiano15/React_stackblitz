import React, { useState } from 'react';
import './style.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Header() {
  return (
    <header>
      <h1>Welcome</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Article() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <article>
      <h2>article</h2>
      <Button variant="outlined" onClick={handleOpen}>
        Create
      </Button>
      <Dialog open={open}>
        <DialogTitle>Dialog 1</DialogTitle>
        <DialogContent>Dialog Content!!</DialogContent>
        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

export default function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
