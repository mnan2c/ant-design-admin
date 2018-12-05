import React from 'react';
import { FormattedMessage } from 'umi/locale';
import PropTypes from 'prop-types';

import styles from './index.less';

function CEmptyPlaceholder({ showIcon, emptyText }) {
  return (
    <div className={styles.emptyPlaceholder}>
      {showIcon && <div className={styles.emptyIcon} />}
      <span className={styles.emptyText}>
        <FormattedMessage id={emptyText} />
      </span>
    </div>
  );
}

CEmptyPlaceholder.defaultProps = {
  emptyText: 'nodata',
  showIcon: false,
};
CEmptyPlaceholder.propTypes = {
  emptyText: PropTypes.string,
  showIcon: PropTypes.bool,
};

export default CEmptyPlaceholder;
