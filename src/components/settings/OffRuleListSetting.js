import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as reducers from '../../reducers'
import {selectOnRuleDetail} from '../../actions/index'
import * as commons from '../../shared/commons'

class OffRuleListSetting extends Component {
    showOnRuleDetail(rule) {
        this.props.selectOnRule(rule)
    }
    createListItems() {
        return this.props.rules.map(rule => {
            return (
                <tr key={rule.accountId}>
                    <td>{rule.accountId}</td>
                    <td>{commons.formatOffRule(rule.offRuleExpression)}</td>
                    <td><button className="btn btn-default" data-toggle="modal" data-target="#onRuleDetailModal" onClick={this.showOnRuleDetail.bind(this, rule)}>参照</button></td>
                    <td>{commons.getTimeRange(rule.timeRangeType)}</td>
                    <td><button className="btn btn-default"><i className="fa fa-edit"></i></button> &nbsp; <button className="btn btn-default btn-delete"><i className="fa fa-trash-o"></i></button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="panel-body">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Account ID</th>
                                <th>OFFロジック</th>
                                <th>ONロジック</th>
                                <th>参照期間</th>
                                <th>アクション</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.createListItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rules: state.settingReducer.offRuleList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectOnRule: selectOnRuleDetail}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(OffRuleListSetting)


