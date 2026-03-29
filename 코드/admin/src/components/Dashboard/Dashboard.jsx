import * as React from "react";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {styled, createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineNotifications} from "react-icons/md";
import {TiChevronLeft} from "react-icons/ti";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  ExpandLess,
  ExpandMore,
  Home,
  Settings,
  Subscriptions,
} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import {useState, useEffect} from "react";
import {Collapse} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People.js";
import DashboardIcon from "@mui/icons-material/Dashboard.js";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "./Dashboard.css";
import Link from "@mui/material/Link";
import api from "../../api/axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/*<Link color="inherit" href="https://mui.com/">*/}
      Hivision
      {/*</Link>{' '}*/} {2024}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  typography: {
    fontFamily: `'Pretendard-Regular', "Helvetica", "Arial", sans-serif`,
  },
});

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [memberopen, setMemberopen] = useState(false);
  const [hotelOpen, setHotelOpen] = useState(false);
  const [boardOpen, setBoardOpen] = useState(false);
  const [siteOpen, setSiteOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleMemberMenu = () => {
    setMemberopen(!memberopen);
  };

  const [pendingCount, setPendingCount] = useState(0);

  const fetchPendingCount = async () => {
    try {
      const { data } = await api.get('/super/inquiry/pending/count');
      setPendingCount(data.pending_count || 0);
    } catch (e) {
      console.error('Failed to fetch pending count:', e);
      setPendingCount(0);
    }
  };

  const toggleHotelMenu = () => {
    setHotelOpen(!hotelOpen);
  };

  const toggleBoardMenu = () => {
    setBoardOpen(!boardOpen);
  };

  const toggleSiteMenu = () => {
    setSiteOpen(!siteOpen);
  };

  const toggleSettingMenu = () => {
    setSettingOpen(!settingOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    // initial fetch
    fetchPendingCount();

    const onInquiryChange = () => {
      fetchPendingCount();
    };
    const onInit = (e) => {
      if (e && e.detail !== undefined) setPendingCount(e.detail);
    };
    window.addEventListener('inquiryStatusChanged', onInquiryChange);
    window.addEventListener('pendingCountInit', onInit);
    return () => {
      window.removeEventListener('inquiryStatusChanged', onInquiryChange);
      window.removeEventListener('pendingCountInit', onInit);
    };
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{display: "flex"}} className={"main-box"}>
        <CssBaseline/>
        <AppBar
          position="absolute"
          open={open}
          sx={{boxShadow: "unset", backgroundColor: "#4b89da"}}
        >
          <Toolbar
            sx={{
              pr: "24px",
            }}
            className={"main-box-toolbar"}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && {display: "none"}),
              }}
            >
              <GiHamburgerMenu/>
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{flexGrow: 1, fontSize: "16px"}}
            >
              관리자
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer className="main-aside-menu" variant="permanent" open={open}>
          <Toolbar
            className={"main-box-toolbar"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              minHeight: "48px",
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <TiChevronLeft/>
            </IconButton>
          </Toolbar>
          <Divider/>
          <List component="nav" className={"main-box-menu"}>
            <ListItemButton component={NavLink} to="/" selected={isActive("/")}>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Dashboard"/>
            </ListItemButton>
            <ListItemButton onClick={toggleMemberMenu}>
              <ListItemIcon>
                <PeopleIcon/>
              </ListItemIcon>
              <ListItemText primary="문의 관리" sx={{fontSize: '10px'}}/>
              {pendingCount > 0 && (
                <Badge badgeContent={pendingCount} color="error" sx={{ml: 1}}/>
              )}
              {memberopen ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse className={'sub-menu'} in={memberopen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton className={`sub-menu-item`} component={NavLink} to="/users/contact">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="상세 문의" className={` ${isActive('/users/contact') ? 'on' : ''}`}/>
                </ListItemButton>
              </List>
            </Collapse>
            {/* fetch pending count on mount and update when changes occur */}
          
          
            <ListItemButton onClick={toggleBoardMenu}>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="게시판관리"/>
              {boardOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse
              className={"sub-menu"}
              in={boardOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton
                  className="sub-menu-item"
                  component={NavLink}
                  to="/board/notice"
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="공지사항"
                    className={` ${isActive("/board/notice") ? "on" : ""}`}
                  />
                </ListItemButton>

                <ListItemButton component={NavLink} to="/board/life">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="학원생활"
                    className={` ${isActive("/board/life") ? "on" : ""}`}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Drawer>
        {/* initialize pending count fetch and listener */}
        <ScriptInit />
        <Box
          component="main"
          sx={{
            minWidth: "1400px",
            backgroundColor: "#fff",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            padding: "55px 20px ",
          }}
        >
          <Outlet></Outlet>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// 작은 컴포넌트로 사이드 이니셜라이저 추가
function ScriptInit() {
  const [, setTick] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await api.get('/super/inquiry/pending/count');
        // dispatch a custom event to update Dashboard state from parent via DOM event
        window.dispatchEvent(new CustomEvent('pendingCountInit', { detail: resp.data.pending_count || 0 }));
      } catch (e) {
        window.dispatchEvent(new CustomEvent('pendingCountInit', { detail: 0 }));
      }
    };
    fetch();

    const onChange = () => setTick(t => t + 1);
    window.addEventListener('inquiryStatusChanged', onChange);
    return () => window.removeEventListener('inquiryStatusChanged', onChange);
  }, []);
  return null;
}