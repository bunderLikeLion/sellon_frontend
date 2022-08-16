import { useForm } from 'react-hook-form';
import registerValidation from 'validations/registerValidation';
import { useSignInMutation } from 'queries/auth';
import styled from 'styled-components';
import ChangeItemId from 'components/MyPage/ItemInfoChange/ChangeItemId';
import ChangeItemImage from 'components/MyPage/ItemInfoChange/ChangeItemImage';
import ChangeItemExtraImage from 'components/MyPage/ItemInfoChange/ChangeItemExtraImage';
import ChangeItemStatus from 'components/MyPage/ItemInfoChange/ChangeItemStatus';
import ChangeItemCategory from 'components/MyPage/ItemInfoChange/ChangeItemCategory';
import ChangeItemTextarea from 'components/MyPage/ItemInfoChange/ChangeItemTextarea';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 90vh;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 60rem;
  height: fit-content;
  padding-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  padding: 1rem;
`;

const GuideContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 65%;
  height: 4rem;
  margin-bottom: 0.5rem;
`;

const Guide = styled.h1`
  font-size: 1.7rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const UserInfoChange = () => {
  const { handleSubmit } = useForm(registerValidation);

  const { mutate: signInMutate } = useSignInMutation();

  const submit = async (inputData) => {
    signInMutate(inputData);
  };
  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit(submit)}>
          <GuideContainer>
            <Guide>아이템 정보 수정</Guide>
          </GuideContainer>
          <ChangeItemId />
          <ChangeItemImage />
          <ChangeItemExtraImage />
          <ChangeItemStatus />
          <ChangeItemCategory />
          <ChangeItemTextarea />
        </Form>
      </Card>
    </Container>
  );
};

export default UserInfoChange;
