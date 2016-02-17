/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import 'normalize.css';
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import Colors from 'material-ui/lib/styles/colors';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    },
    appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: 2,
        top: 0
    },
    leftNav: {
        zIndex: 1,
        paddingTop: 60
    }
};

const muiTheme = getMuiTheme({
    accent1Color: Colors.deepOrange500
});

class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false
        };
    }

    handleRequestClose() {
        this.setState({
            open: false
        });
    }

    handleTouchTap() {
        this.setState({
            open: true
        });
    }

    render() {
        const standardActions = (
            <FlatButton
                label="Okey"
                secondary={true}
                onTouchTap={this.handleRequestClose}
            />
        );

        return (
            <div>
                <AppBar
                    style={styles.appBar}
                    title="Java Professionals By"
                />


                <LeftNav style={styles.leftNav}>
                    <List>
                        <ListItem primaryText="Meetup 1"></ListItem>
                        <ListItem primaryText="Meetup 2"></ListItem>
                        <ListItem primaryText="Meetup 3"></ListItem>
                        <ListItem primaryText="Meetup 4"></ListItem>
                        <ListItem primaryText="Meetup 5"></ListItem>
                        <ListItem primaryText="Meetup 6"></ListItem>
                        <ListItem primaryText="Meetup 7"></ListItem>
                        <ListItem primaryText="Meetup 8"></ListItem>
                    </List>
                </LeftNav>

                <Dialog
                    open={this.state.open}
                    title="Super Secret Password"
                    actions={standardActions}
                    onRequestClose={this.handleRequestClose}
                >
                    1-2-3-4-5
                </Dialog>
                <h1>material-ui</h1>
                <h2>example project</h2>
                <RaisedButton
                    label="Super Secret Password"
                    primary={true}
                    onTouchTap={this.handleTouchTap}
                />
            </div>
        );
    }
}

export default themeDecorator(muiTheme)(Main);
