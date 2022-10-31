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
  background-color: lightgray;
`;

const DetailViewBackgroundImage = styled.img`
  width: 100%;
  z-index: 1;
  position: absolute;
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

const Button = styled.button`
  border-radius: 20px;
  background-color: transparent;
  color: inherit;
  border: 1px solid white;
  padding: 10px 20px;
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
      <DetailViewBackgroundImage src="/images/cover/cover_1.jpeg" alt="cover" />
      <CloseButton onClick={props.closeDetail}>X</CloseButton>
      <DetailViewContentContainer>
        <DetailViewProfilePicture src="/images/profile/profile_1.jpg" />
        <p>홍길동</p>
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
