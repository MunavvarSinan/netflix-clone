import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Background,
  ButtonLink,
  Logo,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
  Picture,
  Dropdown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  ProfileLink,
  PlayButton,
  BannerDescription,
  Banner,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.Banner = function HeaderBanner({ children, ...restProps }) {
  return <Banner {...restProps}>{children}</Banner>;
};
Header.BannerDescription = function HeaderBannerDescription({ children, ...restProps }) {
  return <BannerDescription {...restProps}>{children}</BannerDescription>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Header.ProfileLink = function HeaderProfileLink({ children, ...restProps }) {
  return <ProfileLink {...restProps}>{children}</ProfileLink>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};
Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((searchAct) => !searchAct)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
