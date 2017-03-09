import React, {Component, PropTypes} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import classNames from 'classnames/bind'
import styles from './AnimateEnterLeave.scss'
const cx = classNames.bind(styles)

export default class AnimateEnterLeave extends Component {
  static propTypes = {
    children: PropTypes.any,
    effect: PropTypes.string
  }

  static defaultProps = {
    effect: 'fade'
  }

  render() {
    const { effect } = this.props

    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: cx('enter'),
          enterActive: cx('enterActive'),
          leave: cx('leave'),
          leaveActive: cx('leaveActive')
        }}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={500}
        className={cx(effect)}
        component="div">
        {this.props.children}
      </ReactCSSTransitionGroup>
    )
  }
}
