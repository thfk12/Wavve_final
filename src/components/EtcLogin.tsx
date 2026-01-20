interface EtcLoginProps {
  handleGoogle: () => void; // Google 로그인 처리를 위한 함수
  handleKakao: () => void; // Kakao 로그인 처리를 위한 함수
}
// EtcLogin 컴포넌트 정의 수정
const EtcLogin = ({ handleGoogle, handleKakao }: EtcLoginProps) => {
  return (
    <div className="btn-box-other">
      <p className="text-top">또는 다른 서비스 계정으로 로그인</p>
      <ul>
        <li>
          <button onClick={handleKakao}>
            <img src="/images/icons/icon-kakao-login.svg" alt="kakao login" />
          </button>
        </li>
        <li>
          <button onClick={handleGoogle}>
            <img src="/images/icons/icon-google-login.svg" alt="google login" />
          </button>
        </li>
        <li style={{ cursor: "no-drop" }}>
          <img src="/images/icons/icon-naver-login.svg" alt="naver login" />
        </li>
        <li style={{ cursor: "no-drop" }}>
          <img src="/images/icons/icon-apple-login.svg" alt="apple login" />
        </li>
      </ul>
      <div className="text-bottom">
        <p>SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.</p>
        <p>
          기존 POOQ 계정 또는 Wavve 계정과는 연동되지 않으니 이용에 참고하세요.
        </p>
      </div>
      <div>
        <p>포트폴리오 확인용 아이디, 비밀번호</p>
        <p>아이디: wnfkrlrhddnjs@explore.com</p>
        <p>비밀번호: wnfkrlrhddnjs</p>
      </div>
    </div>
  );
};

export default EtcLogin;
