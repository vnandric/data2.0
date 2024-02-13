import style from './nav.module.css';
import Link from 'next/link';

export default function Nav() {

    return (
        <>
            <nav className={style.nav}>
                <ul>
                    <li className='text-white'><Link href='/dashboard'>Home</Link></li>
                    <li className='text-white'><Link href='/dashboard/users1'>Users1</Link></li>
                    <li className='text-white'><Link href='/dashboard/users2'>Users2</Link></li>
                    <li className='text-white'><Link href='/dashboard/users3'>Users3</Link></li>
                </ul>
            </nav>
        </>
    )
}