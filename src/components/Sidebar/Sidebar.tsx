import React from 'react';
import { useState } from 'react'
import styles from '../../../styles/Sidebar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
    const [active, setActive] = useState('')

    return (
        <div className={styles.sidebar}>
            <h1 className={`${styles.nickname} ${styles.center}`}>Gull</h1>

            <li>
                <Link href='/'>
                    <div onClick={() => setActive('dashboard')} style={{ background: active == 'dashboard' ? '#7D48B1' : '' }} className={styles.center}>
                        <Image width={30} height={30} src='/images/dashboard.svg' alt="" />
                        <br />
                        {active == 'dashboard' && <small>Dashboard</small>}
                    </div>
                </Link>
            </li>
            <li>
                <Link href='/table'>
                    <div onClick={() => setActive('table')} style={{ background: active == 'table' ? '#7D48B1' : '' }} className={styles.center}>
                        <Image width={30} height={30} src='/images/table.svg' alt="" />
                        <br />
                        {active == 'table' && <small>Table</small>}
                    </div>
                </Link>
            </li>
            <li>
                <Link href='/files'>
                    <div onClick={() => setActive('files')} style={{ background: active == 'files' ? '#7D48B1' : '' }} className={styles.center}>
                        <Image width={30} height={30} src='/images/files.svg' alt="" />
                        <br />
                        {active == 'files' && <small>Files</small>}
                    </div>
                </Link>
            </li >
            <li>
                <Link href='/notes'>
                    <div onClick={() => setActive('notes')} style={{ background: active == 'notes' ? '#7D48B1' : '', height: '74px' }} className={styles.center}>
                        <Image width={30} height={30} src='/images/notes.svg' alt="" />
                        <br />
                        {active == 'notes' && <small>Notes</small>}
                    </div>
                </Link>
            </li >
            <li>
                <Link href='/profile'>
                    <div onClick={() => setActive('profile')} style={{ background: active == 'profile' ? '#7D48B1' : '', height: '74px' }} className={styles.center}>
                        <Image width={30} height={30} src='/images/profile.svg' alt="" />
                        <br />
                        {active == 'profile' && <small>Profile</small>}
                    </div>
                </Link>
            </li >
            <li>
                <Link href='/weather'>
                    <div onClick={() => setActive('weather')} style={{ background: active == 'weather' ? '#7D48B1' : '', height: '74px' }} className={styles.center}>
                        <Image width={30} height={30} src='/images/weather.svg' alt="" />
                        <br />
                        {active == 'weather' && <small>Weather</small>}
                    </div>
                </Link>
            </li >
            <li>
                <Link href='/team'>
                    <div onClick={() => setActive('team')} style={{ background: active == 'team' ? '#7D48B1' : '', height: '74px' }} className={styles.center}>
                        <Image width={30} height={30} src='/images/team.svg' alt="" />
                        <br />
                        {active == 'team' && <small>Team</small>}
                    </div>
                </Link>
            </li >
            <li>
                <Link href='/camera'>
                    <div onClick={() => setActive('camera')} style={{ background: active == 'camera' ? '#7D48B1' : '', height: '74px' }} className={styles.center}>
                        <Image width={30} height={30} src='/images/camera.svg' alt="" />
                        <br />
                        {active == 'camera' && <small>Camera</small>}
                    </div>
                </Link>
            </li >
        </div >
    );
};

export default Sidebar;