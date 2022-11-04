import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.root}>
            <img src={'img/logo.png'}/>
        </header>

    );
};

export default Header;