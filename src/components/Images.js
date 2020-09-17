import React from "react";
import styled from "styled-components";

const Images = () => {
  return(
    <>
      <ImagesWrap>
        <ImagesBox>
          <picture className="images">
            <img className="imgone" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/51fa8980-f8b8-46c3-a969-bf3ad93fb7fd/bvlatuR/std/3296x1798/CN-D-3" alt="model s"/>
          </picture>
        </ImagesBox>
        <ImageInterface></ImageInterface>
      </ImagesWrap>
    </>
  )
};

export default Images;

const ImagesWrap = styled.div`
`; // 최상단 랩핑

const ImagesBox = styled.section`
  .images {
    .imgone {
      width: 100vw;
      max-width: 2048px;
    }
  }
`; // 이미지 한개당 섹션

const ImageInterface = styled.div`
  position: sticky;
  
`; // 이미지 한개당 인터페이스