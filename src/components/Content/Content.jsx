import React from 'react';
import Box from '@mui/material/Box';
import "./Content.css";
import Divider from '@mui/material/Divider';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import AddIcon from '@mui/icons-material/Add';
import Smallbox2 from './Smallbox2';
import DialogBox from './DialogBox/DialogBox';
import BarChartIcon from '@mui/icons-material/BarChart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Content = ({ drawerWidth, handleDrawerToggle }) => {

    const [open, setOpen] = React.useState(false);
    const [showParent2, setShowParent2] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleParent2 = () => {
        setShowParent2(!showParent2);
    }

    let subjects = ['Math', 'Physics', 'Chemistry', 'History', 'Quantum Physics'];

    return (
        <Box component="main" className="content_main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>

            {/* Main content's first part(row wise) */}
            <Box className="content_parent1">
                <h3 className='content_parent1_text0'><MenuIcon onClick={handleDrawerToggle} className="ham_icon" /><span>Assessment</span></h3>
                <Divider orientation="vertical" flexItem />
                <div className="content_parent1_text" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '17px', color: '#0073E6', position: 'relative' }}>My Assessments</div>
            </Box>

            {/* Main content's second part(row wise) */}
            <Box className={`content_parent2 ${showParent2 ? '' : 'hidden-on-mobile'}`}>
                <h3 className='content_parent2_heading' style={{ fontSize: "18px", fontFamily: 'Inter', fontWeight: '600', lineHeight: '25px', color: '#1C4980' }}>Assessments Overview</h3>
                <div className="content_parent2_bigbox">

                    <div className="content_p2_smallbox1">
                        <span style={{ color: '#1C4980', fontWeight: '500' }}>Total Assessment</span>
                        <div style={{ display: 'flex', alignItems: 'center', width: '85%', marginTop: '11%' }}>
                            <CalendarViewDayOutlinedIcon style={{ fontSize: '40px' }} className="content_smallbox1_icon" />
                            <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#1C4980' }}>34</span>
                        </div>
                    </div>

                    <div className="content_p2_smallbox2">
                        <span style={{ color: '#1C4980', fontWeight: '500' }}>Candidates</span>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '6%' }}>
                            <PeopleAltOutlinedIcon style={{ fontSize: '40px' }} className="content_smallbox2_icon" />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#1C4980' }}>11,145 <span style={{ color: '#05C165', fontSize: '0.8rem' }}>+89</span></div>
                                <div style={{ fontSize: '0.7rem', marginTop: '3%', color: '#1C4980' }}>Total Candidate</div>
                            </div>
                            <Divider orientation="vertical" flexItem style={{ marginLeft: '4%', marginRight: '4%' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#1C4980' }}>114 <span style={{ color: '#05C165', fontSize: '0.8rem' }}>+89</span></div>
                                <div style={{ fontSize: '0.7rem', marginTop: '3%', color: '#1C4980' }}>Who Attempted</div>
                            </div>
                        </div>
                    </div>

                    <div className="content_p2_smallbox3">
                        <span style={{ color: '#1C4980', fontWeight: '500' }}>Candidates Source</span>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '4.5%' }}>
                            <LanguageOutlinedIcon style={{ fontSize: '40px' }} className="content_smallbox3_icon" />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#1C4980' }}>11,000 <span style={{ color: '#05C165', fontSize: '0.8rem' }}>+89</span></div>
                                <div style={{ fontSize: '0.7rem', marginTop: '3%', color: '#1C4980' }}>E-mail</div>
                            </div>
                            <Divider orientation="vertical" flexItem style={{ marginLeft: '4%', marginRight: '4%' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#1C4980' }}>145 <span style={{ color: '#05C165', fontSize: '0.8rem' }}>+89</span></div>
                                <div style={{ fontSize: '0.7rem', marginTop: '3%', color: '#1C4980' }}>Social Share</div>
                            </div>
                            <Divider orientation="vertical" flexItem style={{ marginLeft: '4%', marginRight: '4%' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#1C4980' }}>145 <span style={{ color: '#05C165', fontSize: '0.8rem' }}>+89</span></div>
                                <div style={{ fontSize: '0.7rem', marginTop: '3%', color: '#1C4980' }}>Unique Link</div>
                            </div>
                        </div>
                    </div>

                    <div className="content_p2_smallbox4">
                        <span style={{ color: '#1C4980', fontWeight: '500' }}>Total Purpose</span>
                        <div style={{ display: 'flex', alignItems: 'center', width: '85%', marginTop: '11%' }}>
                            <LinkOutlinedIcon style={{ fontSize: '40px' }} className="content_smallbox4_icon" />
                            <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#1C4980' }}>11</span>
                        </div>
                    </div>
                </div>
            </Box>

            {/* Main content's third part(row wise) */}
            <Box className="content_parent3">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 style={{ fontSize: "18px", fontFamily: 'Inter', fontWeight: '600', lineHeight: '25px', color: '#1C4980', marginBottom: '2%' }}>My Assessments</h3>
                    <div className='content_parent3_button' >
                        <SearchIcon />
                        <FilterAltIcon />
                        <BarChartIcon onClick={handleParent2} />
                    </div>
                </div>
                <div className="content_parent3_bigbox">
                    <div className="content_p3_smallbox1" onClick={handleClickOpen}>
                        <div className="content_p3_smallbox1_child">
                            <AddIcon style={{ fontSize: '70px', backgroundColor: '#fff', borderRadius: '50px', padding: '4%', color: '#0073E6', marginBottom: '3%' }} />
                            <span style={{ color: '#1C4980', fontSize: '18px', fontFamily: 'Inter', textAlign: 'center', fontWeight: '600', marginBottom: '3%' }}>New Assessment</span>
                            <span style={{ color: '#1C4980', fontSize: '12px', fontFamily: 'Inter', textAlign: 'center', fontWeight: '600' }}>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</span>
                        </div>
                    </div>

                    {/* Math Assessment boxes are mapped to make it DRY */}
                    {
                        subjects.map((sub, index) => {
                            return <Smallbox2 sub={sub} index={index} />
                        })
                    }
                </div>
            </Box>

            {/* Dialog for New Assessment part */}
            <DialogBox open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} />
        </Box>
    )
}

export default Content;