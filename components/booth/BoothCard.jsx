import {
  BoothCardDetailDes,
  BoothCardDetailHeartWrapper,
  BoothCardDetailWrapper,
  BoothCardImage,
  BoothCardWrapper,
  CardDetailHeartCntWrapper,
  CardDetailHeartIcon,
  Ribbon,
} from "@/pages/booth/search_style";
import DeafultImage from "../image/common/booth_deafault.png";
import {
  RankBoothDetailLocation,
  RankBoothDetailTitle,
  RannkBoothDetailOperator,
} from "@/pages/booth/style";
import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

function BoothCard({ id, name, operator, logoImage, likeCnt, isLike, location, type }) {
  return (
    <Link href={`/booth/detail/${id}`}>
      <BoothCardWrapper>
        <BoothCardImage src={DeafultImage} />
        <BoothCardDetailWrapper>
          <Ribbon type={type}>{type}</Ribbon>
          <BoothCardDetailDes>
            <RankBoothDetailTitle>{name}</RankBoothDetailTitle>
            <RannkBoothDetailOperator>{operator}</RannkBoothDetailOperator>
            <RankBoothDetailLocation>{location}</RankBoothDetailLocation>
          </BoothCardDetailDes>

          <BoothCardDetailHeartWrapper>
            {/* 하트 어떻게..? */}
            <CardDetailHeartIcon icon={isLike ? faHeart : emptyHeart} />
            <CardDetailHeartCntWrapper>{likeCnt}</CardDetailHeartCntWrapper>
          </BoothCardDetailHeartWrapper>
        </BoothCardDetailWrapper>
      </BoothCardWrapper>
    </Link>
  );
}

export default BoothCard;