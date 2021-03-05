// https://ansonlowzf.com/how-to-build-a-material-ui-navbar/
import React from 'react';
import {
    AppBar,
    List,
    Toolbar,
    Typography
} from "@material-ui/core"
import './Header.css';

import ListItemLink from "./ListItemLink";

const navLinks = [
    { title: `Page 1`, path: `/page/1` },
    { title: `Page 2`, path: `/page/2` },
    { title: `Page 3`, path: `/page/3` },
    { title: `Contact`, path: `/contact` },
    { title: `FAQ`, path: `/faq` },
]

function Header() {
    return (
        <div className="root">
            <AppBar position="static">
                <Toolbar>
                    <Typography align='left' variant="h6" className="title">
                        AXA PoC
                    </Typography>
                    <List className="navDisplayFlex" component="nav" aria-labelledby="main navigation">
                        {navLinks.map(({ title, path }) => (
                            <ListItemLink to={path} primary={title} />
                        ))}
                    </List>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Header;