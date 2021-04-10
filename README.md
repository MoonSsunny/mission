# Mission

## 1. Header(메뉴)

> PC

- [x] 헤더 좌측에는 서비스 로고, 헤더 우측에는 메뉴 네비게이션이 존재한다.
- [x] 메뉴 네비게이션에는 좌측부터 순서대로 3가지 메뉴가 존재한다.
- [ ] 메뉴는 클릭(선택) 된 경우 색이 변경된다.

  ```

  ⭕ 새로고침시 현재 path의 값과 menu의 path의 값이 일치하면 class를 바꿔서 색을 변환한다

  ❌ 클릭시 메뉴의 색깔의 변화가 일어나지 않는다.

  ```

- [x] 메뉴는 클릭 시, 해당 페이지로 이동 된다.

<img src="https://user-images.githubusercontent.com/62421526/114258189-cf62c900-99ff-11eb-9cfa-caf6238c489c.PNG" alt='header' styled="width:500px">

> Mobile

- [x] 좌측에 로고, 우측에는 메뉴 '햄버거 버튼'이 존재한다.
- [x] 햄버거 버튼을 클릭하면 화면 전체를 덮는 최상위 뷰가 나오며, 해당 뷰에는 메뉴가 3개 존재한다.
- [x] 메뉴는 클릭 시, 해당 페이지로 이동 된다.

<img src="https://user-images.githubusercontent.com/62421526/114258244-3a140480-9a00-11eb-87c0-a2e0edc54376.PNG" alt='header' styled="width:500px">

<img src="https://user-images.githubusercontent.com/62421526/114258245-3b453180-9a00-11eb-8069-a9024982154e.PNG" alt='header' styled="width:500px">

## 2. Service

- [x] 프로젝트 실행 시 최초로 로딩 되는 페이지이다.
  - URL : /
- [x] 서비스 상단에 이미지가 있다.
- [x] 이미지 하단에 주문 하기 버튼이 있다.
- [x] 로그인을 하지 않은 사용자의 경우(토큰 없음) 주문 하기 버튼을 클릭 시, 로그인을 하라는 Alert이 발생한다. 그리고 /sign-up 페이지로 이동 된다.
- [x] 로그인을 한 사용자의 경우(토큰 있음) 신청하기 버튼을 클릭 시, 주문 성공 Alert이 발생한다.

## 3. 회원가입

- [x] 회원가입 할 때에 사용 되는 페이지 이다.
- [x] 회원가입 시 다음과 같은 값을 Input 으로 수집한다.
  - 이메일, 비밀번호, 비밀번호 확인, 연락처
  - 각 항목은 위에서 아래로 배치 된다.
- [x] 하단에 가입하기 버튼을 넣는다.

  - [ ] 가입 후 받아온 토큰 값은 전역 값으로 관리해야 한다.
  - [ ] 전역 상태 라이브러리는 지원자가 제일 자신있는 것을 사용한다. (Context, Redux 등)

  ```

  ❌ 전역값으로 관리하는 부분구현못함

  > Api 호출 후 sessionStorage에 저장해서 관리하도록 함

  localStorage vs sessionStorage

  공통점 : 브라우저내에 키 - 값을 저장

  차이점 :

    - localStorage : 브라우저를 다시 실행해도 저장하고 있다. 클라이언트에 대한 정보를 영구적으로 보관
    - sessionStorage : 새로고침해도 키값 저장, but 세션을 종료하면 클라이언트에 대한 정보를 삭제한다

    로그인구현을 위해서는 세션 종료후에 클라이언트에 대한 정보 삭제를 하도록 한다 -> sessionStorage에 저장해서 관리

  단점 : 보안이 취약하다

  ```

- [x] 사용자가 이메일을 입력 시, 올바른 이메일 형식인지 유효성 검증을 해야 한다.
  - [x] 유효하지 않은 경우, focus 가 넘어 갈 때에 Input 테두리가 빨간색으로 변한다.
  - [x] 유효하지 않은 경우, 가입하기 버튼 클릭 시, 이메일 확인 Alert이 발생한다. **그 후 이메일 필드로 cursor가 이동된다.**
- [x] 비밀번호는 8~15자를 입력해야 한다.
  - [x] 유효하지 않은 경우, 사용자가 입력할 때, Input 테두리가 빨간색으로 변한다.
  - [x] 유효하지 않은 경우, 가입하기 버튼 클릭 시 비밀번호 확인 Alert이 발생한다.
- [x] 비밀번호 확인은 비밀번호와 일치하는지 확인해야 한다.
  - [x]일치하지 않은 경우, 가입하기 버튼 클릭 시 비밀번호 불일치 Alert이 발생한다.
- [x] 회원가입 성공 시, 서비스 페이지로 이동 된다.

## 4. 로그인

### PC/Mobile

- [x] 로그인 할 때에 사용 되는 페이지 이다.
  - URL : /login
- [x] 로그인 시, 아래와 같은 값을 입력한다.
  - 이메일, 비밀번호
  - 각 항목은 위에서 아래로 배치 된다.
- [x] 하단에 로그인 버튼을 넣는다.
- [x] 로그인 성공 시, 서비스 페이지로 이동된다.
  - URL : /
- [x] 로그인 실패 시, 비밀번호를 확인해 달라는 Alert이 발생 한다.
  - 비밀번호를 8글자 미만으로 하여 백엔드 API 호출 시, 401 Unauthorized 실패 응답 코드를 받는다.

```

    ❌ 로그인 Api 호출시 statusCode 500 반환 , 문제발생

    ⭕ 회원가입 Api 호출시 정상적으로 호출됌

```

## 5. 마이 페이지

- [x] 주문 목록을 볼 때에 사용되는 페이지이다.
  - URL : /mypage/order
- [x] 해당 페이지에 진입하면, 주문 목록을 불러와야 한다.

  - [x] 주문 목록 불러오기 백엔드 API : GET /order
    - 해당 API는 백엔드에서 의도적으로 1초 sleep 후 보내준다.
    ```
    ⭕ setTimer 함수 이용해서 1초후에 Data 호출하도록 한다
    ```
  - [x] 주문 목록은 주문 아이템을 컴포넌트로 가지며, 주문 아이템은 각각 좌측에 ID, 우측에 아이템 itemName을 배치한다.

- [x] 주문 목록은 페이징 기능이 구현되어야 한다.
  - 기본적으로 10개씩 노출시키며 페이징한다.
  - 페이지 번호가 1인 경우, 백엔드 API 는 /order?page=0 을 호출한다.
- [x] 각 주문 아이템을 클릭 시, 상세 주문 페이지로 이동 된다.
  - URL : /mypage/order/{id}

## 6. 마이 페이지 상세

- [x] 주문 아이템 상세 내용을 보기 위한 페이지이다.
  - URL : /mypage/order/{id}
  - 주문 목록 불러오기 백엔드 API 에서 획득한 id 값을 URL에 입력 시에, 해당 주문에 대한 상세 내용을 볼 수 있다.
- [x] 주문 상세 내용 페이지에 진입하면, 주문 상세 내용을 가져온다.
- [x] 주문 상세 내용은 좌측에 id, 우측에 itemName을 배치한다.
