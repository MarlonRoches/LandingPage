import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '10000px', "z-index": 998, padding:"100px -90px" }}>
      <Sidebar>
        <Menu>
          <MenuItem component={<NavLink className="Menu-NavLink"  to="/Home" />}><b>HOME</b></MenuItem>
          <MenuItem component={<NavLink className="Menu-NavLink" to="/About"  ></NavLink>}>  <b>ABOUT</b></MenuItem>
            <MenuItem component={<NavLink className="Menu-NavLink" to="/Services"  ></NavLink>}><b>SERVICES</b></MenuItem>
            <MenuItem component={<NavLink className="Menu-NavLink" to="/Portfolio"  ></NavLink>}><b>PORTFOLIO</b></MenuItem>
            <MenuItem component={<NavLink className="Menu-NavLink" to="/Blog"  ></NavLink>}><b>BLOG</b></MenuItem>
            <MenuItem component={<NavLink className="Menu-NavLink" to="/Contact"  ></NavLink>}><b>CONTACT</b></MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}
export default Layout;