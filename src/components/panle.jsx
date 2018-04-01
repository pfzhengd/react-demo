import React, { Component } from 'react';
import Input from '../components/input';
import Button from '../components/button';
import ShowItem from '../components/showItem';
import * as Actions from '../actions/actions';
import Store from '../stores/index';
import ShowInfo from '../components/showInfo';
import Loading from '../components/loading';
import '../scss/panle.scss';

class Panle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: Store.getState().items,
            showInfo: Store.getState().showInfo,
            loading: Store.getState().loading
        };
        this.onChange = this.onChange.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleChanged = this.hendleChanged.bind(this);
        this.handleClickCity = this.handleClickCity.bind(this);
        this.getCityInfo = this.getCityInfo.bind(this);
    }

    handleClickCity(item) {
        //console.log(item.code + ',' + item.text);
        //this.getCityInfo(item);
        Store.dispatch(Actions.loadingAsync(item));
    }

    getCityInfo(item) {
        //fetch(`/data/cityinfo/101280101.html`).then((res) => {
        let _this = this;
        this.setState({
            showInfo:{
                loading:true
            }
        });
        fetch(`data/cityinfo/${item.code}.html`).then((res) => {
            if (res.status !== 200) {
                throw new Error('Fail to get response with status ' + res.status)
            }
            res.json().then((resJson) => {
                //console.log(resJson);
                resJson['loading'] = false;
                _this.setState({
                    showInfo: resJson.weatherinfo
                });
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        })
    }

    handleDecrement(item) {
        Store.dispatch(Actions.decrement(item));
    }

    handleIncrement() {
        let item = {
            text: this.enter.value.split(';')[0],
            code: this.enter.value.split(';')[1]
        }
        Store.dispatch(Actions.increment(item));
        this.enter.value = '';
    }

    componentDidMount() {
        Store.subscribe(this.onChange);
        Store.dispatch(Actions.loadingAsync(Store.getState().items[0]))
        //this.getCityInfo(Store.getState().items[0]);
    }

    onChange() {
        this.setState({
            datas: Store.getState().items,
            showInfo: Store.getState().showInfo
        })
    }

    hendleChanged(e) {
        //this.value = e.target.value;
        this.enter = e.target;
    }

    render() {
        debugger;
        return (
            <React.Fragment>
                <div className='panle-box'>
                    <div className='header'>
                        <Input placeholder='Enter...' style='cnInput' handleChanged={this.handleChanged} />
                        <Button text='+' style='btn btnAdd' handleClick={this.handleIncrement} />
                    </div>
                    <div className='body'>
                        <ul>
                            {this.state.datas.map((item) => {
                                return <li key={item.id}>
                                    <ShowItem id={item.id} handleClick={this.handleClickCity.bind(this, item)} text={item.text} numStyle='span' />
                                    <Button style='btn btnDel' text='x' handleClick={this.handleDecrement.bind(this, item)} />
                                </li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className='show-box'>
                    {/* <ShowInfo info={this.state.showInfo} /> */}
                    <ShowInfo info={this.state.showInfo} />
                </div>
            </React.Fragment>
        )
    }
}

export default Panle;