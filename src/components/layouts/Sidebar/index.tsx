import { CiLogout, CiSettings } from 'react-icons/ci';
import { FaHome, FaRegUser } from 'react-icons/fa';
import { MdAutoGraph } from 'react-icons/md';
import { TbBrandAppleNews } from 'react-icons/tb';
import SiteLogo from '../../../assets/logo.svg';
import {
  Divider,
  NavSection,
  SidebarItem,
  SidebarRoot,
  SiteLogoSection,
  UserSection,
} from './styled';

const Sidebar = () => {
  return (
    <SidebarRoot>
      <SiteLogoSection>
        <img src={SiteLogo} alt="logosite" style={{ paddingRight: '12px' }} />
        <h2>Groth</h2>
      </SiteLogoSection>

      <NavSection>
        <SidebarItem>
          <FaHome style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          Home
        </SidebarItem>
        <SidebarItem>
          <MdAutoGraph style={{ width: '24px', height: '24px', marginRight: '8px' }} /> Selected
        </SidebarItem>
        <SidebarItem>
          <TbBrandAppleNews style={{ width: '24px', height: '24px', marginRight: '8px' }} /> News
        </SidebarItem>
        <SidebarItem>
          <CiSettings style={{ width: '24px', height: '24px', marginRight: '8px' }} /> Settings
        </SidebarItem>
      </NavSection>

      <Divider />

      <UserSection>
        <SidebarItem>
          <FaRegUser style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          User-name
        </SidebarItem>
        <SidebarItem>
          <CiLogout style={{ width: '24px', height: '24px', marginRight: '8px' }} /> Logout
        </SidebarItem>
      </UserSection>
    </SidebarRoot>
  );
};

export default Sidebar;
