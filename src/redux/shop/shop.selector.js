import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';
 

const SelectShop= state=>state.shop;

export const SelectCollections=createSelector(
    [SelectShop],
    shop=>shop.collections
);

// const COLLECTION_ID_MAP={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// };

export const SelectCollectionPreview=createSelector(
    [SelectCollections],
    collections=>collections?Object.keys(collections).map(key=>collections[key]):[]
);

export const SelectCollection=memoize((collectionurlparam)=>
createSelector(
    [SelectCollections],
    collections=>(collections?collections[collectionurlparam]:null)
    )
);
