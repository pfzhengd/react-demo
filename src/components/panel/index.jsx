import React from 'react';
import Container from '../container/index';
import SummaryStore from '../../untility/summaryStore';
import './style.scss';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: SummaryStore.getSummary()
        }
        //this.handleUpdateCount = this.handleUpdateCount.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        SummaryStore.addChangeListener(this.onChange);
    }

    componentWillUnmount(){
        SummaryStore.removeChangeListener(this.onChange);
    }

    onChange(){
        this.setState({
            count:SummaryStore.getSummary()
        });
    }

    render() {
        return (
            <div>
                <Container labelText='First ' counterCaption='First' />
                <Container labelText='Second ' counterCaption='Second' />
                <Container labelText='Tried ' counterCaption='Tried' />
                <div className='count'>
                    <label>当前总量：{this.state.count}</label>
                </div>
            </div>
        )
    }
}
export default Panel;