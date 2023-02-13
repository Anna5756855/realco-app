import React from 'react';
import PropertyItem from './PropertyItem';
import { connect } from 'react-redux';
import { setPropertyItem, setFetching, setPropertyItemThunkCreator } from '../../../redux/PropertyItemReducer'
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class PropertyItemContainer extends React.Component {
    // constructor(props){
    //     super(props)
    // }


    componentDidMount() {
        let itemId = this.props.router.params.itemId; //21
        this.props.setPropertyItemThunkCreator(itemId)
        // this.props.setFetching(true)
        // //axios.get(`https://playfulvoluminousobjects.tomphillimore.repl.co/properties/${itemId}`, config)
        // itemsAPI.getCurrentItem(itemId)
        // .then(response => {
        //     this.props.setPropertyItem(response.data)
        //     this.props.setFetching(false)
        // }).catch(err => {
        //     console.log(err)
        //   })
          
        
    }

    render() {
        return (
        <PropertyItem item={this.props.item}
        isFetching={this.props.isFetching}
        />
    )
        }
    }

    let mapStateToProps = (state) => {
        return {
            item: state.propertyItem.item,
            isFetching: state.propertyItem.isFetching
        }
    }

    // let mapDispatchToProps = (dispatch) => {
    //     return {
    //         setPropertyItem: (item) => {dispatch(setPropertyItem(item))},
    //         setFetching: (isFetching) => {dispatch(setFetching(isFetching))}
    //     }
    // }
    //export default connect(mapStateToProps, mapDispatchToProps)(PropertyItemContainer);

    export default connect(mapStateToProps,
        { setPropertyItem, setFetching, setPropertyItemThunkCreator} //mapDispatchToProps is an object here!!!!
        )(withRouter(PropertyItemContainer));

