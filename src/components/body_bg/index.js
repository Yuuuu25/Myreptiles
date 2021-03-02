import styles from './index.less';
import React, { Component } from 'react';

export default class BodyBg extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.contain}>
                <div className={styles.mask}>
                {this.props.children}
                </div>
            </div>
        )
    }
}