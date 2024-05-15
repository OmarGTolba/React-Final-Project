import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import Shape from "./Shape"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PaymentsIcon from '@mui/icons-material/Payments';

function Sidebar({ drawerWidth, handleListItemClick, selectedIndex }) {
    return (
        <div>
            <Box sx={{ display: 'flex', flexGrow: 1, height: '100%', position: 'fixed', top: '11vh', bottom: '0' }}>
                {/* Shape beside the sidebar */}
                <Shape />
                {/* Sidebar-Section */}
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth, position: 'relative', bgcolor: '#7B7B7B', color: '#FFFFFF', height: '100 %', overflowY: 'auto'
                        },
                    }}
                >
                    <Toolbar sx={{
                        color: '#FFFFFF', fontWeight: '700', lineHeight: '44.98px'
                    }}>Hello Mohamed!</Toolbar>

                    <Box sx={{ overflow: 'auto', position: 'relative' }}>
                        <List>
                            {['Profile Info', 'Orders', 'Addresses', 'Payments'].map((text, index) => (
                                <ListItem
                                    key={text}
                                    disablePadding
                                    selected={selectedIndex === index}
                                    onClick={() => handleListItemClick(index)}
                                    sx={{ '&.Mui-selected': { bgcolor: '#FFFFFF', color: 'black', borderLeft: '4px solid black', '& .MuiListItemIcon-root': { color: 'black' } } }}
                                >
                                    <ListItemButton >
                                        <ListItemIcon sx={{ color: '#fffa' }}>
                                            {index === 0 ? <AccountCircleIcon /> : ""}
                                            {index === 1 ? <FactCheckIcon /> : ""}
                                            {index === 2 ? <MapsHomeWorkIcon /> : ""}
                                            {index === 3 ? <PaymentsIcon /> : ""}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>

                    </Box>
                </Drawer >
            </Box>
        </div>
    )
}

export default Sidebar
