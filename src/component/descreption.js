import { autocompleteClasses } from "@mui/material";
import React from "react";
import { Button, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Descreption =({movie}) =>{

    return (
        <div style={{background :'#150050', borderStyle: 'none', marginRight:200}}>
        <Modal.Dialog size="xl" style={{borderStyle: 'none'}}  >
  <Modal.Body style={{background :'#150050', borderStyle: 'none'}}>
      <Modal.Title style={{background :'#150050'}}>{movie.title}</Modal.Title>
    <p>{movie.description}</p>
    <iframe style={{background :'#150050'}} width="853" height="480" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Modal.Body>

  <Modal.Footer style={{background :'#150050', borderStyle: 'none'}}>
      <Link to="/">
    <Button variant="secondary">Close</Button>
    </Link>
  </Modal.Footer>
</Modal.Dialog>
</div>)
}

export default Descreption