import ShopActionTypes from './shop.types';
import {firestore,convertCollectionsSnapshotToMap} from '../../components/firebase/firebase.utils';


export const fetchCollectionsStart=()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess=collectionsMap=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
});

export const fetchCollectionsFailure=error_msg=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:error_msg
})


export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        const collectionRef=firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot=>{
            const collectionMap=(convertCollectionsSnapshotToMap(snapshot));
            dispatch(fetchCollectionsSuccess(collectionMap));             
        }).catch(error=>dispatch(fetchCollectionsFailure(error.message)));
    }

}