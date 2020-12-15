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
import CloseIcon from '@material-ui/icons/Close';
import {updateModal} from "../../actions";
import {connect} from "react-redux";
import {Button} from "@material-ui/core";

const SongSelectedModal = ({selectedSongs, isOpen, toggleModalDisplayed}) => {
    return (
        <div>
            <Button className="modal-button"
                    variant="outlined"
                    color="primary"
                    onClick={() => toggleModalDisplayed(!isOpen)}>
                Valider
            </Button>
            <Modal open={isOpen}
                   onClose={() => toggleModalDisplayed(false)}
                   className='modal'>
                <Card className='modal-card'>
                    <CloseIcon className="close-icon" onClick={() => toggleModalDisplayed(false)}/>
                    <CardContent>
                        <h2>Songs selected</h2>
                        <Typography variant="body2" component="span">
                            <List className="list-container height-list" component="nav" aria-label="main mailbox folders">
                                {
                                    selectedSongs.length
                                        ? selectedSongs.map(((s, i) => (
                                            <ListItem key={i}><ListItemText>{s}</ListItemText></ListItem>
                                        )))
                                        : <div className="empty-state">No selected song</div>
                                }
                            </List>
                        </Typography>
                    </CardContent>
                </Card>
            </Modal>
        </div>
    );
}

SongSelectedModal.propTypes = {
    selectedSongs: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleModalDisplayed: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isOpen: state.isOpen,
    selectedSongs: state.selectedSongs
})
const mapDispatchToProps = dispatch => ({
    toggleModalDisplayed: isOpen => dispatch(updateModal(isOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongSelectedModal);
