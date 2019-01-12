import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

export const Private = ({ user }) => {
  return (
    <h1>
      <FormattedMessage id="private.title" />
    </h1>
  );
};

Private.propTypes = {
  user: PropTypes.object,
};

Private.displayName = 'Private';
