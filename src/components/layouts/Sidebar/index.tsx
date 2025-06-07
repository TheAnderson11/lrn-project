import { CiLogout, CiMenuBurger, CiSettings } from 'react-icons/ci';
import { FaHome, FaRegUser } from 'react-icons/fa';
import { MdAutoGraph } from 'react-icons/md';
import { TbBrandAppleNews } from 'react-icons/tb';
import SiteLogo from '../../../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearUser, toggleMenuBar } from '../../../store/slices/userSlice';

import {
  Divider,
  LogoTitle,
  NavSection,
  SidebarItem,
  SidebarRoot,
  SiteLogoSection,
  StyledNavLink,
  UserSection,
} from './styled';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { activeMenuBar } = useAppSelector(state => state.userSlice);
  const { user } = useAppSelector(state => state.userSlice);
  const handleExit = () => {
    dispatch(clearUser());
  };

  return (
    <SidebarRoot $activeMenuBar={activeMenuBar}>
      <SiteLogoSection>
        <CiMenuBurger
          onClick={() => dispatch(toggleMenuBar())}
          color="white"
          style={{ width: '25px', height: '25px', marginRight: '22px' }}
        />
        <img src={SiteLogo} alt="logosite" style={{ paddingRight: '12px' }} />
        <LogoTitle>Groth</LogoTitle>
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
        <StyledNavLink to="/user-panel">
          <SidebarItem>
            <FaRegUser style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            {user?.userName}
          </SidebarItem>
        </StyledNavLink>
        <SidebarItem onClick={handleExit}>
          <CiLogout style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          Logout
        </SidebarItem>
      </UserSection>
    </SidebarRoot>
  );
};

export default Sidebar;
