import React from 'react';
import './Check.css';


class Check extends React.Component {
    render() {
        let count_end = this.props.check_count > 3 ? 'area2' : '';
        let count_ends = this.props.check_count > 3 ? "Game Over" : "Time : " + this.props.check_count;
        let test = `area ${count_end}`
        return (
            <div>
                <div className={test}>
                    <h1 className={test}>{this.count_end}{count_ends}</h1>
                </div>
            </div>
        )
    }
}
export default Check;