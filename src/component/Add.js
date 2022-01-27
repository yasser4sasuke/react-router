import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Add({ Addm }) {
    const [show, setShow] = useState(false);
    const [addmovie, setAddmovie] = useState([{
        }])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = (event) => {
        setAddmovie((oldstate) => ({
            ...oldstate, [event.target.name ]: event.target.value
        }))
    }
    return (
        <>
            <Button style={{ backgroundColor: "#610094" }} variant="primary" onClick={handleShow}>
                click to open new list
            </Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Add your film discreption</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', flexDirection: 'column' }} >
                    Title<input name="title" placeholder="put your movie title" onChange={handleAdd} />
                    Description <input name="description" type="text" maxlength="10" placeholder="what your film talk about" onChange={handleAdd} />
                    PosterUrl <input name="posterUrl" type="url"  placeholder="post the url of your new movie's pictures" onChange={handleAdd} />
                    Rate <input name="rate" placeholder="set a namber for 0 to 10" type="number" min="0" max="10" onChange={handleAdd} />
                    trailer <input name="trailer" placeholder="set your url trailer" type="text" onChange={handleAdd} />
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "red" }} variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button style={{ backgroundColor: "#610094" }} variant="primary" onClick={() => Addm(addmovie)}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Add