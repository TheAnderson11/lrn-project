import { Link } from 'react-router';
import styled from 'styled-components';

export const LinkTo = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
