import styled from "@emotion/styled";

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
  z-index: 2;
  background-color: red;
  /* position: relative; */
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: flex-end;
`;

const DetailViewProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
  z-index: 4;
  position: relative;
`;

function FriendDetailView(props) {
  return (
    <DetailViewContainer>
      <DetailViewBackgroundImage src="/images/cover/cover_1.jpeg" alt="cover" />
      <DetailViewContentContainer>
        <DetailViewProfilePicture src="/images/profile/profile_1.jpg" />
      </DetailViewContentContainer>
    </DetailViewContainer>
  );
}

export default FriendDetailView;
