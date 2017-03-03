import React from 'react';
import {Row, Col, Carousel, BackTop} from 'antd';
import PCNewsImageBlock from './pc_news_image_block';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
export default class PCNewsDetail extends React.Component {
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
                console.log(json);
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
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div dangerouslySetInnerHTML={this.createMarkup()} className="articleContainer"></div>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={40} type="top" width="400px" imageWidth="160" cardTitle="相关新闻"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter/>
                <BackTop/>
            </div>
        )
    }
}
