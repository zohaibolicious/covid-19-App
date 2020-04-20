import React, {Component} from 'react'
import Navbar from 'navbar-react'

export default class App extends Component {
    state = {
        items: [
            {
                href: '#',
                name: 'Home'
            },
            {
                href: 'https://covid.learningtools.com.pk',
                name: "Pakistan's Data"
            },
            {
                href: 'https://learningtools.com.pk',
                name: 'About Me'
            },
        ]
    }

    render() {
        return (
            <Navbar
                items={this.state.items}
                color={'#8e9eab'}
                itemTextColor={'#101010'}
                titleColor={'#fff'}
                title={''}
                hoverColor={'#000'}
                logo={'https://learningtools.com.pk/covid/static/media/image.d7265326.png'}
            />
        )
    }
}
