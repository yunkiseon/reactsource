import { useEffect } from 'react';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

function Logout() {
  // 로그인 정보를 가져옴
  const { logout, id } = useAuth();
  const navigate = useNavigate();
  // [] 컴포넌트 실행될 때 같이 실행
  useEffect(() => {
    if (id) {
      logout();
    }
    // 홈으로 이동(경로,{옵션}) replace 옵션 : boolean, state 옵션: any
    // 어디로 갈건지, 어떻게 갈건지 등
    // replace 의 경우 현재 페이지를 히스토리에 남기지않는것
    navigate('/', { replace: true });
  }, []);
  return null;
}

export default Logout;
