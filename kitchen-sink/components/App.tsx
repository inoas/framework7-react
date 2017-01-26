import * as React from 'react';
import {
    Framework7App,    
    Views, View,
    Pages, Page, PageContent,
    Navbar, NavLeft, NavCenter, NavRight, Toolbar,
    Panel, Statusbar, Link, List, ListItem
} from 'framework7-react';

import {routes} from '../routes';

export interface IKitchenSinkPage {
    path: string;
    pageTitle: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any>;
}

let framework7: any;
let currentRoute: any;

export const getFramework7 = () => {
    return framework7;
}

const onRouteChange = (route: any) => {
    currentRoute = route;
}

export const getCurrentRoute = () => {
    return currentRoute;
}

export const App = (props: React.Props<any>) => {
    return (
        <Framework7App onFramework7Init={(f7) => {framework7 = f7}} themeType="ios" routes={routes} onRouteChange={onRouteChange}>
            <Statusbar></Statusbar>
            <Panel left reveal layout="dark" theme="pink">
                <View navbarFixed>
                    <Pages>
                        <Page>
                            <Navbar title="Left Panel"></Navbar>
                            <List>
                                <ListItem link="/cards/" title="Cards" />
                                <ListItem link="/lists/" title="Lists" />
                            </List>
                        </Page>
                    </Pages>
                </View>
            </Panel>
            <Panel right cover>
                <p>Panel right content</p>
            </Panel>
            <Views navbarThrough>
                <View main url="/" dynamicNavbar>
                    <Navbar>
                        <NavLeft>
                            <Link icon="icon-bars" openPanel="left"></Link>
                        </NavLeft>
                        <NavCenter sliding>Hello World</NavCenter>
                        <NavRight>
                            <Link icon="icon-bars" openPanel="right"></Link>
                        </NavRight>
                    </Navbar>
                    <Pages>
                        <Page toolbarFixed>
                            <Toolbar>
                                <Link>Left</Link>
                                <Link>Right</Link>
                            </Toolbar>
                            <List>
                                <ListItem title="Content Block" link="/content-block/" />
                                <ListItem title="Cards" link="/cards/" />
                                <ListItem title="Lists" link="/lists/" />
                                <ListItem title="Contacts" link="/contacts/" />
                                <ListItem title="Sortable" link="/sortable/" />
                                <ListItem title="Swipeout" link="/swipeout/" />
                                <ListItem title="Accordion" link="/accordion/" />
                                <ListItem title="Forms" link="/forms/" />
                                <ListItem title="Smart Select" link="/smart-select/" />
                                <ListItem title="Chips" link="/chips/" />
                                <ListItem title="Grid" link="/grid/" />
                                <ListItem title="Preloader" link="/preloader/" />
                                <ListItem title="Progress Bar" link="/progressbar/" />
                                <ListItem title="Pull To Refresh" link="/pull-to-refresh/" />
                                <ListItem title="Infinite Scroll" link="/infinite/" />
                                <ListItem title="Swiper" link="/swiper/" />
                                <ListItem title="Messages" link="/messages/" />
                                <ListItem title="Searchbar" link="/searchbar/" />
                                <ListItem title="Tabs" link="/tabs/" />
                                <ListItem title="Tabs Swipeable" link="/tabs-swipeable/" />
                                <ListItem title="Navbars & Toolbars" link="/bars/" />
                                <ListItem title="FAB" link="/fab/" />
                                <ListItem title="FAB Speed Dial" link="/fab-dial/" />
                                <ListItem title="Login Screen" link="/login-screen/" />
                                <ListItem title="Virtual List" link="/virtual-list/" />
                                <ListItem title="Photo Browser" link="/photo-browser/" />
                                <ListItem title="Modals" link="/modals/" />
                                <ListItem title="Timeline Vertical" link="/timeline-vertical/" />
                                <ListItem title="Timeline Horizontal" link="/timeline-horizontal/" />
                                <ListItem title="Timeline Calendar" link="/timeline-calendar/" />
                            </List>
                            <List>
                                <ListItem title="Dynamic Route" link="/user/45/posts/28/?sort=first#opened" />
                                <ListItem title="Nested Routes" link="/nested-routes/" />
                                <ListItem title="Data Binding" link="/data-binding/" />
                            </List>
                        </Page>
                    </Pages>
                </View>
            </Views>       
        </Framework7App>
    );
};