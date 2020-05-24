import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BackgroundImage from '../../resources/images/background.jpg'
import 'styles/Home/home.scss'
import { getUser } from './actions';
import dummyData from './dummy'


class Home extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        let form = e.target;
        let elements = Array.from(form.elements).filter(item => item.type !== 'submit')

        let data = {};
        elements.forEach(item =>
            data[`${item.id}`] = item.value
        )
        this.setState(prevState =>{
            return {
                ...prevState,
                ...data
            }
        }, () => console.log(this.state))
    }

    componentDidMount() { 
        const { getUserData } = this.props;
        getUserData();
    }

    render() {
        const { user } = this.props;
 
        return (
            <div className="home">
                <div className="home-cover">
                    <img src={BackgroundImage} className="bg-image" alt="cover"/>
                    <div className="bg-text">
                        {user && user.name ? <p>{`Hi ${user.name}`}</p> : null}
                    </div>
                </div>

                <form className="post-form" onSubmit={this.handleSubmit}>
                    <label className="label" for="title">Title</label>
                    <input className="input" id="title" placeholder="Enter Title" />
                    <label className="label" for="description">Description</label>
                    <textarea className="input" id="description" placeholder="Enter Description" />
                    <button id="submit">Submit</button>
                </form>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state.userReducer.toJS()
    }
  }
  
const mapDispatchToProps = dispatch => ({
    getUserData: () => dispatch(getUser())
})
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home);