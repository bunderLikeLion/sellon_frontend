import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    height: fit-content;
    margin: 3rem auto;
    padding : 2rem 1rem;
    background-color : #121212;
    color: white;
`
const ItemContainer = styled.div`
    // background-color:lightblue;
    width: 100%;
    height: 100%;
    padding: 1rem;

`

const Button = styled.button`
    float: right;
    margin: 0.5rem;
    border: none;
    background-color : white;
`

const itemImageStyle = {
    width: '70%',
    // height:'50%',
    objectFit: 'cover',
    float: 'left',
    margin: '0 auto',
    
}

const itemExtraImageStyle = {
    width: '20%',
    margin: '1rem'

}

const ItemImage = () => {
    return (
        <img src="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580"
         style={itemImageStyle}/>
    )
}

const ItemExtraImage = () => {
    return (
        <img src="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580"
         style={itemExtraImageStyle}/>
    )
}

const ItemImageContainerStyle = {
    float: 'left',
    clear: 'both',
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
}

const ItemExtraImageContainerStyle = {
    // backgroundColor: 'red',
    float: 'left',
    clear: 'both',
    display: 'flex',
    justifyContent: 'center',
}

const ItemExtraImageContainer = () => {
    return (
        <div style={ItemExtraImageContainerStyle}>
            
            <ItemExtraImage />
            <ItemExtraImage />
            <ItemExtraImage/>
        </div>
        
    )
}

const ItemImageContainer = () => {
    return (
        <div style={ItemImageContainerStyle}>
            <ItemImage />
            <ItemExtraImageContainer/>
        </div>
    )
}

const ItemDetailInformationContainerStyle = {
    width: '50%',
    float: 'right',
    margin: '1rem auto',
    padding: '1rem',
    paddingRight: 0,
}

const ItemDetailTitleStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    margin: '1rem'
}

const ItemDetailInformationStyle = {
    backgroundColor: 'grey',
    padding: '1rem',
}

const ItemDetailTextStyle = {
    backgroundColor: 'grey',
    minHeight: '10rem',
    clear: 'both',
    padding: '1rem',
}

const ItemDetailInformation = () => {
    return (
        <div style={ ItemDetailInformationContainerStyle }>
            <p style={ ItemDetailTitleStyle }>나이키 덩크 로우</p>
            <div style={ ItemDetailInformationStyle }>
                <p>개수 : 1개</p>
                <p>상태 : 좋음</p>
                <p>카테고리 : 스포츠</p>
            </div>
            
        </div>
        
        
    );
};

const ItemDetailText = () => {
    return (
        <div style={ItemDetailTextStyle }>내용</div>
    );
};


const ItemDetail = () => {

    return (
        <Container>
            <Button type="submit">수정하기</Button>
            <Button type="submit">삭제하기</Button>
            
            <ItemContainer>
                <ItemImageContainer/>
                
                <ItemDetailInformation />
                <ItemDetailText/>
            </ItemContainer>
            
        </Container>
        
        // <Box>
        //     뭐지
        //     <Button>

        //     </Button>
        //     <Card>
        //         test
        //         <CardMedia
        //             component="img"
        //             height="200"
        //             image="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580"
        //         />
        //     </Card>
        // </Box>
    );

};

export default ItemDetail;