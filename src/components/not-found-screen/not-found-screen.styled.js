import styled from 'styled-components';
import { Link as RouterLink } from '../common/common';

const NotFoundWrapper = styled.div`
  padding: 4rem;
`;

const NotFoundTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #fff;
`;

const MainPageLink = styled(RouterLink)`
  font-size: 18px;
  text-align: center;
`;

export {
  NotFoundWrapper,
  NotFoundTitle,
  MainPageLink,
};
