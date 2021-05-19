export const AddItemsToCart=(CartItems,CartItemToAdd)=>{
    const ExistingCartItem=CartItems.find(
        CartItem => CartItem.id === CartItemToAdd.id);
    
    if (ExistingCartItem){
        return CartItems.map(CartItem=>
            CartItem.id===CartItemToAdd.id 
            ?
            {...CartItem,quantity:CartItem.quantity+1}
            :
            CartItem
            )
    }

    return [...CartItems,{...CartItemToAdd,quantity:1}];
};


export const RemoveItemsInCart=(CartItems,CartItemToRemove)=>{
    const ExistingCartItem=CartItems.find(
        CartItem => CartItem.id === CartItemToRemove.id);
    
    if (ExistingCartItem.quantity===1){
        return CartItems.filter(CartItem=>CartItem.id!==CartItemToRemove.id )
    }

    return CartItems.map(CartItem=>
        CartItem.id===CartItemToRemove.id 
        ?
        {...CartItem,quantity:CartItem.quantity-1}
        :
        CartItem
        )

};
