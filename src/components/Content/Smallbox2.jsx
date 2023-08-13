import React from 'react';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Divider from '@mui/material/Divider';
import "./Content.css";

const Smallbox2 = ({sub, index}) => {
    return (
        // Structure for Math Assessment box, which is mapped in Content.jsx
        <div className="content_p3_smallbox2" key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3% 4%', alignItems: 'center' }}>
                <WorkOutlineOutlinedIcon style={{ backgroundColor: '#EBE8FD', color: '#6548EE', padding: '3%', fontSize: '3rem', borderRadius: '12px' }} />
                <MoreVertOutlinedIcon />
            </div>
            <div style={{ padding: '1% 4%' }}>
                <span style={{ color: '#1C4980', fontSize: '18px', fontFamily: 'Inter', textAlign: 'center', fontWeight: '600', marginBottom: '3%' }}>{sub} Assessment</span>
                <div style={{ display: 'flex', marginTop: '2%' }}>
                    <span style={{ color: '#1C4980', fontSize: '12px', fontFamily: 'Inter', textAlign: 'center', fontWeight: '600' }}>Job</span>
                    <Divider orientation='vertical' flexItem style={{ marginLeft: '2%', marginRight: '2%' }} />
                    <span style={{ color: '#1C4980', fontSize: '12px', fontFamily: 'Inter', textAlign: 'center', fontWeight: '500', opacity: '0.7', display: 'flex', alignItems: 'center' }}><CalendarMonthOutlinedIcon style={{ fontSize: '1rem' }} />20 Apr 2023</span>
                </div>
            </div>
            <Divider variant='middle' style={{ padding: '2% 4%', borderStyle: 'dashed' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3% 4%' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: '7%' }}>
                        <div style={{ color: '#1C4980', fontSize: '12px', fontFamily: 'Inter', fontWeight: '600' }}>00</div>
                        <div style={{ color: '#1C4980', fontSize: '12px', fontFamily: 'Inter', fontWeight: '600' }}>Duration</div>
                    </div>
                    <div>
                        <div style={{ color: '#1C4980', fontSize: '12px', fontFamily: 'Inter', fontWeight: '600' }}>00</div>
                        <div style={{ color: '#1C4980', fontSize: '12px', fontFamily: 'Inter', fontWeight: '600' }}>Questions</div>
                    </div>
                </div>
                <div style={{ width: '30%', textAlign: 'center', display: 'flex', alignItems: 'center', color: '#1C4980', justifyContent: 'space-between' }}>
                    <div style={{ border: '2px solid #1C4980', borderRadius: '12px', padding: '2% 6%', display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <AttachFileIcon style={{ transform: 'rotate(45deg)', fontSize: '0.9rem' }} />
                        <span style={{ fontSize: '15px', fontFamily: 'Inter', fontWeight: '500' }}>Share</span>
                    </div>
                    <div style={{ backgroundColor: '#6548EE', marginLeft: '7%', padding: '4%', borderRadius: '50px', color: 'white', fontWeight: '600' }}>LP</div>
                </div>
            </div>
        </div>
    )
}

export default Smallbox2;