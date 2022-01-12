import React, { useState } from 'react'
import PropTypes from 'prop-types';

// useState is a hook

// props are passed in in this function; destructuring the prop
const Search = ({ searchUsers, showClear, clearUsers }) => {

    // created text state
    const [text, setText] = useState('');

    // function within a function add const
    const onChange = (event) => {
        setText(event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter a string', 'light');

        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }
    // render not needed cause not a class anymore
    // need a return
    return (
        <div>
            <form onSubmit = {onSubmit} className="form">
                <input type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}
                />
                <input type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {showClear && (
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
            )}
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
