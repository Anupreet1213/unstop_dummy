import React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';
import Input from '@mui/joy/Input';
import Select, { selectClasses } from '@mui/joy/Select';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import TagsInput from '../TagInput/TagsInput';
import './DialogBox.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogBox = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    };

    const selectedTags = tags => {
        console.log(tags);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4%' }}>
                <span style={{fontSize: '1.2rem', fontFamily: 'Inter', fontWeight: '600'}}>Create new assessment</span>
                <CloseIcon className="dialog_close" onClick={handleClose}/>
            </div>
            <Divider />
            <div style={{ padding: '3%' }}>
                <h3 style={{ fontFamily: 'Inter', fontSize: '14px', marginBottom: '2%' }}>Name of assessment</h3>
                <Input placeholder="Type Here" />
            </div>

            <div style={{ padding: '3%' }}>
                <h3 style={{ fontFamily: 'Inter', fontSize: '14px', marginBottom: '2%' }}>Purpose of the test is</h3>
                <Select
                    placeholder="Select"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                        },
                    }}
                >
                </Select>
            </div>

            <div style={{ padding: '3%' }}>
                <h3 style={{ fontFamily: 'Inter', fontSize: '14px', marginBottom: '2%' }}>Description</h3>
                <Select
                    placeholder="Select"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                        },
                    }}
                >
                </Select>
            </div>

            <div style={{ padding: '3%' }}>
                <h3 style={{ fontFamily: 'Inter', fontSize: '14px', marginBottom: '2%' }}>Skills</h3>
                <TagsInput selectedTags={selectedTags} tags={['Nodejs', 'UI/UX Design', 'Web Development']} />
            </div>

            <div style={{ padding: '3%' }}>
                <h3 style={{ fontFamily: 'Inter', fontSize: '14px', marginBottom: '2%' }}>Duration of assessment</h3>
                <Input placeholder="HH:MM:SS" />
            </div>

            <div style={{padding: '3%', boxShadow: '0 -5px 5px -5px #333'}}>
                <div style={{backgroundColor: '#0073E6', padding: '2%', borderRadius: '8px', display: 'flex', justifyContent: 'center', color: '#fff', fontFamily: 'Inter', fontWeight: '600'}}>Save</div>
            </div>
        </Dialog>

    )
}

export default DialogBox;