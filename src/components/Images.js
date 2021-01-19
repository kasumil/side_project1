import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from './Nav';

const Images = () => {
  const [data, setData] = useState();

  useEffect(()=> {
    fetch(`http://localhost:3000/data/MockupData.json`)
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
      .catch (error => {
        console.log(error);
      });
  }, []);
  return(
    <>
      <Nav />
      <ImagesWrap>
        <ImagesBox>
          {data && data.map((el, i)=> {
            console.log(el.img_src)
            return (
              <picture className="images" key={i}>
                <img  className='image'src={el.img_src} alt={el.img_src}  />
              </picture>
            );
          })};
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
    .image {
      width: 2030px;
      height: 100%;
      max-width: 2048px;
      display: flex;
      justify-content: center;
      
    }
  }
`; // 이미지 한개당 섹션

const ImageInterface = styled.div`
  position: sticky;
`; // 이미지 한개당 인터페이스