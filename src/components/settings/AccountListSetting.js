import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../../reducers'

class AccountListSetting extends Component {

    createListItems() {
        return this.props.accounts.map(account => {
            return (
                <option key={account.accountId}>{account.accountId}</option>
            )
        })
    }

    render() {
        return (
            <select className="form-control optimize-rule-element optimize-rule-selector">
                {this.createListItems()}
            </select>
        )
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.settingReducer.accountList
    }
}

export default connect(mapStateToProps)(AccountListSetting)

