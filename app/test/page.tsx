"use client";

import styled from "styled-components";

export default function Test() {
  return (
    <Mc>
      테스트
      <div className=" [&>*:nth-child(3)_p:first-child]:text-teal-500 ">
        {/* 3번쨰 자식 중 자손이 p로 시작하는 친구들  */}
        sad
        <div>
          asd
          <div>색</div>
          <div>색</div>
          <p>색</p>
        </div>
        <div>
          asd
          <div>색</div>
        </div>
        <div>
          as
          <div>
            색<p>이것도</p>
          </div>
          <p>test</p>
          <p>이test것도</p>
          <p>
            test
            <p>이것도</p>
          </p>
          <p>test</p>
        </div>
      </div>
      페이지
    </Mc>
  );
}

const Mc = styled.div`
  background-color: white;
`;
