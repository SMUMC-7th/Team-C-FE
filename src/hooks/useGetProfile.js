import { useContext } from 'react';
import {
  useMutation,
  useQuery,
  useInfiniteQuery,
  QueryClient,
} from '@tanstack/react-query';
import { getGoogleOAuth, getKakaoOAuth, getNaverOAuth } from '../apis/auth';
import {
  getProfile,
  getProfileDetails,
  postInitProfile,
  getProfileBookmarks,
  getAlarm,
  getEditProfile,
} from '../apis/profile';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import { deleteBookmark } from '../apis/bookmark';

function useGetKakaoOAuth(code) {
  return useQuery({
    queryFn: () => getKakaoOAuth(code),
    queryKey: ['getKakaoOAuth', code],
  });
}

function useGetNaverOAuth(code) {
  return useQuery({
    queryFn: () => getNaverOAuth(code),
    queryKey: ['getNaverOAuth', code],
  });
}

function useGetGoogleOAuth(code) {
  return useQuery({
    queryFn: () => getGoogleOAuth(code),
    queryKey: ['getGoogleOAuth', code],
  });
}

function usePostInitProfile() {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(LoginContext);

  const onSuccess = () => {
    alert('회원가입이 완료되었습니다.');
    setIsLogin(true);
    navigate('/home');
  };

  return useMutation({
    mutationFn: (data) => postInitProfile(data),
    mutationKey: ['initProfile'],
    onSuccess: onSuccess,
    onError: (error) => console.log('프로필 초기 설정 오류', error),
  });
}

function useGetProfile() {
  return useQuery({
    queryFn: () => getProfile(),
    queryKey: ['getProfile'],
  });
}

function useGetProfileDetails() {
  return useQuery({
    queryFn: () => getProfileDetails(),
    queryKey: ['getProfileDetails'],
  });
}

function useGetProfileBookmarks() {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) =>
      getProfileBookmarks({
        cursor: pageParam,
        offset: 10,
      }),
    queryKey: ['profileBookmarks'],
    getNextPageParam: (lastPage) => {
      return lastPage.data.hasNext ? lastPage.data.cursor : undefined;
    },
  });
}

function useDeleteBookmark() {
  return useMutation({
    mutationFn: (bookmarkId) => deleteBookmark(bookmarkId),
    mutationKey: ['deleteBookmark'],
    onSuccess: (data) => console.log('북마크 삭제', data),
    onError: (error) => console.log('북마크 삭제 오류', error),
  });
}

function useGetAlarm() {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 7 }) => {
      return getAlarm({ cursor: pageParam, offset: 20 });
    },
    queryKey: ['profileAlarm'],
    getNextPageParam: (lastPage) => {
      console.log(lastPage.data?.nextCursor);
      return lastPage.data?.hasNext ? lastPage.data?.nextCursor : undefined;
    },
  });
}

function useEditProfile() {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(LoginContext);

  const onSuccess = () => {
    alert('프로필 수정이 완료되었습니다.');
    navigate('/my');
  };

  return useMutation({
    mutationFn: (data) => getEditProfile(data),
    mutationKey: ['editProfile'],
    onSuccess: onSuccess,
    onError: (error) => console.log('프로필 수정 오류', error),
  });
}

export {
  useGetKakaoOAuth,
  usePostInitProfile,
  useGetProfile,
  useGetProfileDetails,
  useGetProfileBookmarks,
  useDeleteBookmark,
  useGetNaverOAuth,
  useGetGoogleOAuth,
  useGetAlarm,
  useEditProfile,
};
