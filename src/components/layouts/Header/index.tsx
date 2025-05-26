import { useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaThemeco } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../store/slices/themeSlice';
import Input from '../../ui/Input';
import { Divider, HeaderLog, HeaderNav, HeaderRoot, SearchDiv } from './styled';

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleIconClick = () => {
    inputRef.current?.focus();
  };
  const dispatch = useDispatch();
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <HeaderRoot>
      <HeaderLog>
        <h2 style={{ fontWeight: '700', fontSize: '20px' }}>Welcome user-name</h2>
        <p style={{ fontWeight: '500', fontSize: '14px' }}>1 October 2022 | 11:59 AM GMT</p>
      </HeaderLog>

      <HeaderNav>
        <FaThemeco
          onClick={handleThemeToggle}
          style={{ width: '35px', height: '35px', marginRight: '28px', cursor: 'pointer' }}
        />
        <MdNotificationsNone
          style={{ width: '35px', height: '35px', marginRight: '28px', cursor: 'pointer' }}
        />
        <Divider />
        <SearchDiv>
          <CiSearch
            onClick={handleIconClick}
            style={{
              position: 'absolute',
              width: '24px',
              height: '24px',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
          <Input
            ref={inputRef}
            style={{ width: '389px', height: '48px', paddingLeft: '38px' }}
            placeholder="Search"
          />
        </SearchDiv>
      </HeaderNav>
    </HeaderRoot>
  );
};

export default Header;
