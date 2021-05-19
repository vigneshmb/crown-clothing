import CartActionTypes from './cart.types';

export const ToggleCartHidden=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

export const AddItem=item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
});

export const DeleteItem=item=>({
    type:CartActionTypes.DELETE_ITEM_IN_CART,
    payload:item
});

export const DeleteItemCheckout=item=>({
    type:CartActionTypes.DELETE_ITEM_IN_CHECKOUT,
    payload:item
});

