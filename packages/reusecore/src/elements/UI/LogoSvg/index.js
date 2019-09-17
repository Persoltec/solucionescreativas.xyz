import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
//import Link from '../../Link';
import { Link } from 'gatsby';
import Image from '../../Image';
import Box from '../../Box';
//import { Box } from 'rebass';

const LogoSvg = ({
  logoWrapperStyle,
  logoStyle,
  titleStyle,
  withAchor,
  anchorProps,
  logoSrc,
  title,
  ...props
}) => (
  <Link {...props} {...logoWrapperStyle}>
    <Box {...logoStyle}>{props.children}</Box>
  </Link>
);

LogoSvg.propTypes = {
  logoSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  logoWrapperStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  withAchor: PropTypes.bool,
  anchorProps: PropTypes.object
};

LogoSvg.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
export default LogoSvg;
