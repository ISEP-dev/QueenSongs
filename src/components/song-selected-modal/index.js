import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import React from "react";
import PropTypes from "prop-types";
import './index.css';
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const SongSelectedModal = ({selectedSongs, isOpen, handleClose}) => {
    return (
        <Modal open={isOpen}
            onClose={handleClose}
            className='modal'>
            <Card className='modal-card'>
                <CardContent>
                    <Typography variant="h5" component="h2">Songs selected</Typography>
                    <Typography variant="body2" component="p">
                        <List component="nav" aria-label="main mailbox folders">
                            {!!selectedSongs && selectedSongs.map(((s, i) => (
                                <ListItem key={i}>
                                    <ListItemText>s.name</ListItemText>
                                </ListItem>
                            )))}
                        </List>
                    </Typography>
                </CardContent>
            </Card>
        </Modal>
    );
}

export default SongSelectedModal;

SongSelectedModal.propTypes = {
    selectedSongs: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}
