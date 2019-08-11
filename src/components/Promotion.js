import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Promotion.scss";

class Promotion extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.neonTimeLine1 = null;
    this.snsNeon = null;
    this.coins = null;
  }
  handleScroll(e) {
    let scrollTop = window.pageYOffset;
    let clientHeight = window.innerHeight;
    let scrollPosition = Math.floor((scrollTop / clientHeight) * 250);
    if (this.coins !== null) {
      let allCoins = this.coins.childNodes;
      allCoins[0].style.transform = `translateY(-${scrollPosition}%)`;
      allCoins[1].style.transform = `translateY(-${scrollPosition * 0.8}%)`;
      allCoins[2].style.transform = `translateY(-${scrollPosition * 1.5}%)`;
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    let allCoins = this.coins.childNodes;
    for (let i of allCoins) {
      i.style.animationPlayState = "running";
      i.style.display = "block";
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    clearTimeout(this.neonTimeLine1);
  }
  render() {
    return (
      <div className="Promotion">
        {/* 상단바 */}
        <div className="topBar">
          <Link className="logo" to="/">
            <img src="/imgs/promotion/topbar-logo.png" alt="pay 송금" />
          </Link>
          <span className="title">
            <img
              src="/imgs/promotion/topbar-title.png"
              alt="10주간의 현금스웩"
            />
          </span>
          <Link className="smtm" to="/">
            <img
              src="/imgs/promotion/topbar-smtm.png"
              alt="SHOW ME THE MONEY 6"
            />
          </Link>
        </div>
        {/* 상단바 마침 */}
        {/* 메인 타이틀 */}
        <div className="mainTitle">
          <img
            src="/imgs/promotion/main-title-neon1.png"
            alt="송금만해도 현금이 쏟아진다!"
          />
          {/* 네온 */}
          <span className="title-text1">
            <img src="/imgs/promotion/main-title-neon2.png" alt="DROP THE" />
          </span>
          <span className="title-text2">
            <img src="/imgs/promotion/main-title-neon3.png" alt="MONEY" />
          </span>
          {/* 네온 마침 */}
          {/* 불꽃 */}
          <span className="title-flame1">
            <img
              src="/imgs/promotion/main-title-flame1.png"
              alt="불꽃1 이미지"
            />
          </span>
          <span className="title-flame2">
            <img
              src="/imgs/promotion/main-title-flame2.png"
              alt="불꽃1 이미지"
            />
          </span>
          <span className="title-flame3">
            <img
              src="/imgs/promotion/main-title-flame3.png"
              alt="불꽃1 이미지"
            />
          </span>
          <span className="title-flame4">
            <img
              src="/imgs/promotion/main-title-flame4.png"
              alt="불꽃1 이미지"
            />
          </span>
          {/* 불꽃 마침 */}
        </div>
        {/* 메인 타이틀 마침 */}
        {/* G 머니 */}
        <div className="g-money">
          <div className="money-image">
            <img src="/imgs/promotion/g-money.png" alt="G머니" />
          </div>
          <div className="money-title">
            <span className="text">
              <img src="/imgs/promotion/g-money-text.png" alt="총 1억원" />
            </span>
            <span className="left-hand">
              <img
                src="/imgs/promotion/g-money-left-hand.png"
                alt="스웩왼손검지"
              />
            </span>
            <span className="right-hand">
              <img
                src="/imgs/promotion/g-money-right-hand.png"
                alt="스웩오른손검지"
              />
            </span>
          </div>
        </div>
        {/* G 머니 마침 */}
        {/* 리워드설명 */}
        <div className="reward-detail">
          <img
            src="/imgs/promotion/reward-detail.png"
            alt="추첨을 통해 카카오머니를 드립니다."
          />
        </div>
        {/* 리워드설명 마침 */}
        {/* SNS SHARE */}
        <div className="sns-share">
          <img src="/imgs/promotion/sns-share-nav.png" alt="sns로 공유하세요" />
          <div className="share-neon" ref={ref => (this.snsNeon = ref)}>
            <img
              src="/imgs/promotion/sns-share-neon.png"
              alt="친구들도 우리와 함께 갑시다!"
            />
          </div>
          <div className="share-link-btns">
            <Link to="/">카카오톡으로 공유</Link>
            <Link to="/">##로 공유</Link>
            <Link to="/">페이스북으로 공유</Link>
            <Link to="/">트위터로 공유</Link>
          </div>
        </div>
        {/* SNS SHARE 마침 */}
        {/* 하단 동전들 */}
        <div className="deco-coins">
          <img src="/imgs/promotion/deco-coins.png" alt="배너꾸미기용 동전들" />
        </div>
        {/* 하단 동전들 마침 */}
        {/* 배너 */}
        <div className="banner">
          <img src="/imgs/promotion/banner01.png" alt="배너01" />
        </div>
        {/* 배너마침 */}
        {/* 유의사항 */}
        <div className="caution">
          <img src="/imgs/promotion/caution.png" alt="유의사항" />
        </div>
        {/* 유의사항 마침 */}
        {/* 동전들 */}
        <div className="coins" ref={ref => (this.coins = ref)}>
          <span className="coin-01">
            <img
              src="/imgs/promotion/coin-03.png"
              alt="떨어지는 모션용 동전3"
            />
          </span>
          <span className="coin-02">
            <img
              src="/imgs/promotion/coin-02.png"
              alt="떨어지는 모션용 동전2"
            />
          </span>
          <span className="coin-03">
            <img
              src="/imgs/promotion/coin-01.png"
              alt="떨어지는 모션용 동전1"
            />
          </span>
        </div>
        {/* 동전들 마침 */}
        {/* 참역하기 버튼 */}
        <div className="enter-btn">
          <Link to="/joinEvent">
            <img src="/imgs/promotion/join-event-btn.png" alt="참여하기" />
          </Link>
        </div>
        {/* 참여하기 버튼 마침 */}
      </div>
    );
  }
}

export default Promotion;
