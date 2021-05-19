import {createSelector} from 'reselect';


const SelectCart=state=>state.cart;

export const SelectCartItems=createSelector(
    [SelectCart],
    cart=>cart.CartItems
);

 export const SelectCartItemsCount= createSelector(
    [SelectCartItems],
    CartItems=>CartItems.reduce((acc_quantity,CartItem)=>
    acc_quantity+CartItem.quantity
    ,0)
 );

 export const SelectCartSum=createSelector(
     [SelectCartItems],
     CartItems=>CartItems.reduce((acc_quantity,CartItem)=>
     acc_quantity+CartItem.quantity*CartItem.price
     ,0)
);

export const SelectCartHidden=createSelector(
    [SelectCart],
    cart=>cart.hidden
);

