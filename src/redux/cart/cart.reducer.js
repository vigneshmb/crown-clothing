import CartActionTypes from './cart.types';
import {AddItemsToCart,RemoveItemsInCart} from './cart.utils';

const INITIAL_STATE={
    hidden:true,
    CartItems:[]
}

const CartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                CartItems:AddItemsToCart(state.CartItems,action.payload)
            };
        case CartActionTypes.DELETE_ITEM_IN_CHECKOUT:
            return{
                ...state,
                CartItems:state.CartItems.filter(item=>(item.id!==action.payload.id))
                };
        case CartActionTypes.DELETE_ITEM_IN_CART:
            return{
                ...state,
                CartItems:RemoveItemsInCart(state.CartItems,action.payload)
                };
        default:
            return state;
        
    }
}

export default CartReducer;