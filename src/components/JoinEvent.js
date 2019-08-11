import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JoinEvent.scss";

class JoinEvent extends Component {
  constructor(props) {
    super(props);
    this.topDoor = null;
    this.bottomDoor = null;
    this.startMotion = this.startMotion.bind(this);
  }
  startMotion() {
    setTimeout(() => {
      this.topDoor.style.animationPlayState = "running";
      this.topDoor.style.display = "block";
      this.bottomDoor.style.animationPlayState = "running";
      this.bottomDoor.style.display = "block";
    }, 500);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="JoinEvent">
        <div className="contents-top" ref={ref => (this.topDoor = ref)}>
          <img
            src={process.env.PUBLIC_URL + "/imgs/joinevent/contents-top.jpg"}
            alt="이벤트 계좌로 1원 보내봐!"
          />
          <Link className="close-btn" to="/">
            <img
              src={process.env.PUBLIC_URL + "/imgs/joinevent/closebutton.png"}
              alt="닫기버튼 -> 창닫고 프로모션페이지로 가기"
            />
          </Link>
        </div>
        <div className="contents-bottom" ref={ref => (this.bottomDoor = ref)}>
          <img
            src={process.env.PUBLIC_URL + "/imgs/joinevent/contents-bottom.jpg"}
            alt="송금할 1원이 없다면? -> 1원 쿠폰 버튼 / 송금 후, 즉시 당첨 확인 가능 & 1원 환불 (카카오페이 플러스친구 메시지로 안내) 매일 10회 참여 가능 / 매주 경품 변경 / 카톡최신 버전에만 참여 가능 -> 카톡업데이트 버튼"
            onLoad={this.startMotion}
          />
          <Link to="/" className="coupon-btn">
            1원 쿠폰 버튼
          </Link>
          <Link to="/" className="update-btn">
            카톡 업데이트 버튼
          </Link>
        </div>
        <div className="main-btn">
          <Link to={"/"}>
            <img
              src={process.env.PUBLIC_URL + "/imgs/joinevent/mainbutton.png"}
              alt="송금하기"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default JoinEvent;
