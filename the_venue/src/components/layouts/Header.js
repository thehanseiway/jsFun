import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import {ListItem, List, Drawer, IconButton} from '@material-ui/core';

export default class Header extends Component {
    state = {
        isMenuShowen: false,
        showHeader: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                showHeader: false
            })
        } else {
            this.setState({
                showHeader: true
            })
        }
    }
    
    toggleMenu = () => {
        this.setState({
            isMenuShowen: !this.state.isMenuShowen,
        });
    };
    
    render() {
        const sideList = (
            <List component="nav">
                <ListItem button onClick={() => console.log('Event')}>Event starts in</ListItem>
                <ListItem button onClick={() => console.log('Venue')}>Venue NFO</ListItem>
                <ListItem button onClick={() => console.log('Highlights')}>Highlights</ListItem>
                <ListItem button onClick={() => console.log('Pricing')}>Pricing</ListItem>
                <ListItem button onClick={() => console.log('Location')}>Location</ListItem>
            </List>
        );

        return (
            <AppBar 
                position="fixed"
                style={{
                    background: this.state.showHeader ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar variant="dense">
                    <div className="header_logo">
                        <div className="header_logo_venue font_righteous">The Venue</div>
                        <div className="header_logo_title">Musical Evants</div>
                    </div>
                        
                    <IconButton color="inherit" aria-label="Menu" onClick={this.toggleMenu}>   
                        <MenuIcon />
                    </IconButton>
                </Toolbar>

                <Drawer anchor="right" open={this.state.isMenuShowen} onClose={this.toggleMenu}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleMenu}
                        onKeyDown={this.toggleMenu}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </AppBar>
        );
    }
}