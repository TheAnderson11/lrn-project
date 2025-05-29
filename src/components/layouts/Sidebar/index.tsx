import { CiLogout, CiSettings } from 'react-icons/ci';
import { FaHome, FaRegUser } from 'react-icons/fa';
import { MdAutoGraph } from 'react-icons/md';
import { TbBrandAppleNews } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import SiteLogo from '../../../assets/logo.svg';
import { clearUser } from '../../../store/slices/userSlice';
import type { RootState } from '../../../store/store';
import {
  Divider,
  NavSection,
  SidebarItem,
  SidebarRoot,
  SiteLogoSection,
  StyledNavLink,
  UserSection,
} from './styled';

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userSlice.user?.userName);
  const handleExit = () => {
    dispatch(clearUser());
  };

  return (
    <SidebarRoot>
      <SiteLogoSection>
        <img src={SiteLogo} alt="logosite" style={{ paddingRight: '12px' }} />
        <h2>Groth</h2>
      </SiteLogoSection>

      <NavSection>
        <StyledNavLink to="/">
          <SidebarItem>
            <FaHome style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            Home
          </SidebarItem>
        </StyledNavLink>

        <StyledNavLink to="/selected">
          <SidebarItem>
            <MdAutoGraph style={{ width: '24px', height: '24px', marginRight: '8px' }} /> Selected
          </SidebarItem>
        </StyledNavLink>

        <StyledNavLink to="/news">
          <SidebarItem>
            <TbBrandAppleNews style={{ width: '24px', height: '24px', marginRight: '8px' }} /> News
          </SidebarItem>
        </StyledNavLink>

        <StyledNavLink to="/settings">
          <SidebarItem>
            <CiSettings style={{ width: '24px', height: '24px', marginRight: '8px' }} /> Settings
          </SidebarItem>
        </StyledNavLink>
      </NavSection>

      <Divider />

      <UserSection>
        <SidebarItem>
          <FaRegUser style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          {user}
        </SidebarItem>
        <SidebarItem onClick={handleExit}>
          <CiLogout style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          Logout
        </SidebarItem>
      </UserSection>
    </SidebarRoot>
  );
};

export default Sidebar;
