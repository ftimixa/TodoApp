import React from 'react';
import PropTypes from 'prop-types';

import classes from './appTitle_style';

const AppTitle = ({ title }) => (
<h1 className={classes.AppTitle}>{title}</h1>
);

AppTitle.propTypes = {
  title: PropTypes.string,
}

AppTitle.defaultProps = {
  title: '',
}

export default AppTitle;
