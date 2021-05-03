import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import './header.styles.scss';

const Header=({current_user,hidden})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                current_user?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>
                    sign in
                </Link>

            }
                <CartIcon/>
        </div>
        {
            hidden?null:<CartDropdown/>
        }
        
    </div>
);

const mapStatetoProps=({user:{current_user},cart:{hidden}})=>({
    current_user,
    hidden
})

export default connect(mapStatetoProps)(Header);