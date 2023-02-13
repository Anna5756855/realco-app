import { connect } from 'react-redux';
import { addingToCartInProgress, getItemsThunkCreator, onPageChangeThunkCreator, addingToCartThunkCreator, removingFromCartThunkCreator, getMoreItemsThunkCreator } from './../../redux/PropertyPageReducer';
import PropertiesPresent from './PropertiesPresent';
import React from 'react';
import {AuthNavigate} from '../../hoc/AuthNavigate'
//import {itemsAPI} from '../../api/api'
// function Properties(props) {
//     const propertyElem = props.propElems.map(elem => <PropertyItem title={elem.title} cost={elem.cost} location={elem.location} src={elem.src}/>);

//     return (
//         <div className={styles.main}>
//             <div className={styles.grayElem}>Properties</div>
//             <h2>Houses in your favorite area</h2>
//             <div className={styles.itemsList}>{propertyElem}</div>
//             <button className={styles.showMoreBtn}>Show more</button>
//         </div>
//     )
// };
class PropertiesContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getItemsThunkCreator(this.props.currentPage)
    }
    onPageChange = (page) => {
        this.props.onPageChangeThunkCreator(page)
    }

    onAddingMoreItems = (page) => {
        this.props.getMoreItemsThunkCreator(page)
    }

    render() {
        console.log("Render")
        let AuthNavigateComponent = AuthNavigate(PropertiesPresent)
        return <PropertiesPresent totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            currentPage={this.props.currentPage}
            items={this.props.items}
            //removeFromCart={this.props.removeFromCart}
            //addToCart={this.props.addToCart}
            isFetching={this.props.isFetching}
            cartInProgress={this.props.cartInProgress}
            //addingToCartInProgress={this.props.addingToCartInProgress}
            addingToCartThunkCreator={this.props.addingToCartThunkCreator}
            removingFromCartThunkCreator={this.props.removingFromCartThunkCreator}
            getMoreItemsThunkCreator={this.props.getMoreItemsThunkCreator}
            // pageNumTest={this.props.pageNumTest}
            // isAuth={this.props.isAuth} //for authentification (not needed rn)

        />
    }
}
//HOC!!!!! High order component
// let AuthRedirectComponent = (props) => {
//     if (!props.isAuth) return <Navigate to={"/Login"} />
//     return <PropertiesPresent {...props}/>
// }
//let AuthNavigateComponent = AuthNavigate(PropertiesPresent) HOC

let mapStateToProps = (state) => {
    return {
        items: state.propertyPage.items,
        pageSize: state.propertyPage.pageSize,
        totalCount: state.propertyPage.totalCount,
        currentPage: state.propertyPage.currentPage,
        isFetching: state.propertyPage.isFetching, 
        cartInProgress: state.propertyPage.cartInProgress,
        isAuth: state.auth.isAuth,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (propertyId) => {
//             dispatch(addToCartAC(propertyId)) //{type: ADD_TO_CART, propertyId: propertyId}
//         },
//         removeFromCart: (propertyId) => {
//             dispatch(removeFromCartAC(propertyId)) //{type: REMOVE_FROM_CART, propertyId: propertyId}
//         },
//         setItems: (items) => {
//             dispatch(setItemsAC(items)) //{type: SET_ITEMS, items: items}
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (count) => {
//             dispatch(setTotalCountAC(count))
//         },
//         setFetching: (isFetching) => {
//             dispatch(setFetchingAC(isFetching))
//         }
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(PropertiesContainer);

//вместо mapDispatchToProps передаем объект который ссылается на методы

export default connect(mapStateToProps,
    { addingToCartInProgress, getItemsThunkCreator, getMoreItemsThunkCreator, onPageChangeThunkCreator, addingToCartThunkCreator, removingFromCartThunkCreator
    })(PropertiesContainer)
   // (PropertiesContainer);