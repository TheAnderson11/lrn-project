import { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaThemeco } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../store/slices/themeSlice';
import type { RootState } from '../../../store/store';
import Input from '../../ui/Input';
import { Divider, HeaderLog, HeaderNav, HeaderRoot, HeaderWelcome, SearchDiv } from './styled';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const inputRef = useRef<HTMLInputElement>(null);
  const handleIconClick = () => {
    inputRef.current?.focus();
  };
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userSlice.user?.userName);
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  /* Date now */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const day = currentTime.getDate();
  const month = currentTime.toLocaleDateString('en-US', {
    month: 'long',
  });
  const year = currentTime.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  const time = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  });
  /* Date now */

  return (
    <HeaderRoot>
      <HeaderLog>
        <HeaderWelcome style={{ fontWeight: '700', fontSize: '20px' }}>
          Welcome {user}
        </HeaderWelcome>
        <p style={{ fontWeight: '500', fontSize: '14px' }}>
          {formattedDate} | {time}
        </p>
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
