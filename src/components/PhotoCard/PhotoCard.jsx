import React, { Component } from 'react';
import T from 'prop-types';
import styles from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

const photocard = [styles.photocard];
const stats = [styles.stats];
const statsitem = [styles.statsitem];
const fullscreenbutton = [styles.fullscreenbutton];

class PhotoCard extends Component {
  static = {};

  propTypes = {
    id: T.number.isRequired,
    small: T.string.isRequired,
    name: T.string.isRequired,
    username: T.string.isRequired,
    full: T.string.isRequired,
  };

  state = {
    isOpen: false,
  };

  handleOnModal = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const { id, small, name, username, full } = this.props;
    const { isOpen } = this.state;
    return (
      <div key={id} className={photocard}>
        <img src={small} alt="img" />

        <div className={stats}>
          <p className={statsitem}>{username}</p>
          <p className={statsitem}>{name}</p>
        </div>

        <button
          type="button"
          className={fullscreenbutton}
          onClick={this.handleOnModal}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
        {isOpen && <Modal id={id} full={full} onClose={this.handleOnModal} />}
      </div>
    );
  }
}

export default PhotoCard;
