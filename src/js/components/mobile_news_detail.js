import React from 'react';
import {Row, Col, Carousel, BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
export default class MobileNewsDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?" +
            "action=getnewsitem" +
            "&uniquekey=" + this.props.params.uniquekey,
            myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title + '- React News';
            });
    }

    createMarkup() {
        return {
            __html: this.state.newsItem.pagecontent
        };
    }

    render() {
        return (
            <div id="mobileDetailsContainer">
                <MobileHeader/>
                <div className="ucmobileList">
                    <Row>
                        <Col span={24} className="container">
                            <div dangerouslySetInnerHTML={this.createMarkup()} className="articleContainer"></div>
                        </Col>
                    </Row>
                </div>
                <MobileFooter/>
                <BackTop/>
            </div>
        )
    }
}
