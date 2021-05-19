import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from "react-redux";

import CollectionOverview from '../../components/collection-overview/collection.overview.component';
import Collection from '../collection/collection.page.component';
import {firestore,convertCollectionsSnapshotToMap} from '../../components/firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/spinner/spinner.component';


const CollectionsOverviewSpinner=WithSpinner(CollectionOverview);
const CollectionSpinner=WithSpinner(Collection);

class Shop extends React.Component{

  state={
      loading:true
  };
    

    autologout_snapshot = null;

    componentDidMount(){
        const {updateCollections} =this.props;
        const collectionRef=firestore.collection('collections');

        console.log('component mounting started');

        this.autologout_snapshot = collectionRef.onSnapshot(async snapshot=>{
            const collectionMap=(convertCollectionsSnapshotToMap(snapshot));

            updateCollections(collectionMap);
            this.setState({loading:false});
            
        });

        console.log('component mounting completed');
    }

    render(){
        const {match} = this.props;
        const {loading}=this.state;
        return(
            <div className='shop-page'>
                <Route 
                exact path={`${match.path}`} 
                render={props=>(<CollectionsOverviewSpinner isLoading={loading} {...props} />)}
                />
                <Route 
                path={`${match.path}/:collectionid`} 
                render={props=>(<CollectionSpinner isLoading={loading} {...props} />)}
                />
            </div>
        )
        }
    }

const mapDispatchToProps= dispatch=>({
  updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})


export default connect(null,mapDispatchToProps)(Shop);