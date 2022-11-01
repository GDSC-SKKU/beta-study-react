/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const DetailViewContainer = styled.div`
  position: absolute;
  width: 420px;
  height: 860px;
  margin: 0 -60px;
  overflow: hidden;
  top: 10px;
  z-index: 2;
  border-radius: 50px;
  background-color: black;
`;

const DetailViewBackgroundImage = styled.img`
  z-index: 1;
  position: absolute;
  object-fit: fill;
  height: 150%;

  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5));
  opacity: 0.7;
`;

const DetailViewContentContainer = styled.div`
  /* display: flex; */
  z-index: 3;
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  color: white;
`;

const DetailViewProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
`;

const DetailViewProfileName = styled.p`
  font-weight: 900;
  font-size: 20px;
`;
const DetailViewProfileMessage = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: lightgray;
`;

const Button = styled.button`
  border-radius: 20px;
  background-color: transparent;
  color: inherit;
  border: 1px solid white;
  padding: 10px 20px;
  font-weight: 900;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 4;
  font-weight: 900;
  cursor: pointer;
`;

function FriendDetailView(props) {
  return (
    <DetailViewContainer>
      <DetailViewBackgroundImage
        //이미지를 불러와 보세요!
        // HINT: 이제 친구마다 고유한 friendId 값이 1 부터 4까지 부여되어 있어요!
        // 파일명과 연결시켜 생각해 보세요!
        // 예시 ) src={`/images/cover/...`}
        alt="cover"
      />
      {/* 이 자리에 이미 정의된 CloseButton 스타일드 컴포넌트를 이용해 눌렀을 때 상세보기가 닫히는 버튼을 만들어 보세요! */}
      {/* 예시: <CloseButton onClick=...>X</CloseButton> */}
      <DetailViewContentContainer>
        <DetailViewProfilePicture src={props.imageSource} />

        <DetailViewProfileName>
          {/* 친구 이름을 넣어보세요! */}
        </DetailViewProfileName>
        <DetailViewProfileMessage>
          {/* 친구의 상태 메시지를 넣어보세요! */}&nbsp;
        </DetailViewProfileMessage>
        <div
          css={css`
            display: flex;
            column-gap: 60px;
            flex-direction: row;
            margin-bottom: 60px;
          `}
        >
          <Button>채팅하기</Button>
          <Button>전화하기</Button>
        </div>
      </DetailViewContentContainer>
    </DetailViewContainer>
  );
}

export default FriendDetailView;
