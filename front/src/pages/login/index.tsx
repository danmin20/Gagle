import React from 'react';
import { Logo, LoginLogo, KakaoIcon } from 'assets';
import KakaoLogin from 'react-kakao-login';
import { useDispatch } from 'react-redux';
import { UserActionTypes, UserActionCreators } from 'store/user/action';

const LoginPage: React.FC = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        backgroundColor: '#373cff',
        flexDirection: 'column',
      }}
    >
      <LoginLogo style={{ margin: '180px auto 0px' }} />

      <div
        style={{
          textAlign: 'center',
          fontSize: 35,
          fontWeight: 300,
          marginTop: 36,
          color: 'white',
        }}
      >
        가까운 글쓰기, <b style={{ color: '#a5ffae' }}>가글</b>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 14,
          color: '#ffffff',
        }}
      >
        주변의 사람들은 지금 뭐하고 있을까요?
      </div>

      {/*디자인변경예정이라 이정도만하고스탑*/}

      <KakaoLogin
        jsKey={process.env.REACT_APP_KAKAO_AUTH_API_KEY as string}
        onSuccess={(resp) => dispatch(UserActionCreators.login(resp))}
        onFailure={(result) => console.log(result)}
        getProfile={true}
        render={(props) => (
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: '126px auto',
              borderRadius: 24,
              backgroundColor: '#ffffff',
              padding: '8px',
              display: 'flex',
              width: 280,
            }}
            onClick={() => props.onClick()}
          >
            <KakaoIcon />
            <span style={{ marginLeft: '8px' }}>카카오톡으로 시작하기</span>
          </div>
        )}
      />
    </div>
  );
};

export default LoginPage;
