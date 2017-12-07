import React, { Component, PropTypes } from 'react';
import Page from './../Page/Page.jsx';
import Header from './../Page/Header.jsx';
import Container from './../Page/Container.jsx';
import SearchBar from './../SearchBar/SearchBar.jsx';
import SearchBoard from './../SearchBoard/SearchBoard.jsx';

export default class Search extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    show: PropTypes.bool,
    container: PropTypes.node,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    storeKey: PropTypes.string,
  };
  static defaultProps = {
    show: true,
    storeKey: 'storeSearchHistory'
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchValue: PropTypes.string,
      history: []
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }
  /*
  *  历史记录操作:start
  */
  // 历史记录操作
  onSubmit = (value) => {
    this.setState({searchValue: value});
    this.submitToStore(value);
    if (this.props.onSubmit) this.props.onSubmit(value);
  }
  onClickHistory = (key) => {
    this.onSubmit(key);
  }
  onClear = () => {
    window.localStorage.removeItem(this.props.storeKey);
    this.setState({
      history: []
    });
  }
  // 读取store，并注入到当前state中
  updateByStore = () => {
    if (window.localStorage.getItem(this.props.storeKey)) {
      this.setState({
        history: window.localStorage.getItem(this.props.storeKey).split('&-&')
      });
    }
  }
  // 保存到store中
  saveToStore = () => {
    window.localStorage.setItem(this.props.storeKey, this.state.history.join('&-&'));
  }
  // 提交值
  submitToStore = (val) => {
    var value = val.trim();
    // 保存查询内容
    if (value.length > 0) {
      // 查询是否有相同的搜索内容
      for (var i in this.state.history) {
        if (this.state.history[i] === value) {
          this.state.history.splice(i, 1);
          break;
        }
      }
      this.state.history.splice(0, 0, value);
    }
    // 超过限制删除尾查
    if (this.state.history.length > 5) {
      this.state.history.pop();
    }
    this.saveToStore();
  }
  /*
  *  历史记录操作:end
  */
  render() {
    const { placeholder, show, onClose, container } = this.props;
    return (
      <Page>
        <Header>
          <SearchBar placeholder={placeholder} value={this.state.searchValue} onSubmit={this.onSubmit} onClose={onClose}/>
        </Header>
        <Container>
          {show && <SearchBoard history={this.state.history} onClick={this.onClick} onClear={this.onClear}/>}
          {container}
        </Container>
      </Page>
    );
  }
}
