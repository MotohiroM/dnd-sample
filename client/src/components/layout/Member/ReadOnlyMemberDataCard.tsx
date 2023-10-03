import { FC } from 'react';
import styled from 'styled-components';
import { memberType } from '../../../stores/MemberAtom';
import { MdOutlineDragIndicator } from 'react-icons/md';
import React from 'react';

export const ReadOnlyMemberDataCard: FC<{ member: memberType }> = ({
  member,
}) => {
  const { nameJa, nameEn, position, finalEducation, message } = member;
  return (
    <SMemberBox>
      <SMemberContents>
        <SFlex>
          <SIcon>
            <MdOutlineDragIndicator />
          </SIcon>
          <div>
            {nameJa ? (
              <>
                <SMemberPadding>
                  {nameJa} / {nameEn}
                </SMemberPadding>
              </>
            ) : (
              <SMemberPadding>{nameEn}</SMemberPadding>
            )}
            {finalEducation ? (
              <SMemberPadding>
                {position} / {finalEducation}
              </SMemberPadding>
            ) : (
              <SMemberPadding>{position} </SMemberPadding>
            )}
            <div>{message}</div>
          </div>
        </SFlex>
      </SMemberContents>
    </SMemberBox>
  );
};

const SMemberBox = styled.div`
  padding: 1% 0% 1% 0%;
`;

const SMemberContents = styled.div`
  padding: 1%;
  border: solid 2px #454444;
  background-color: ${({ theme }) => theme.background.header.primary};
  cursor: grab;
  & :active {
    cursor: grabbing;
  }
`;

const SMemberPadding = styled.div`
  padding-bottom: 0.9%;
`;

const SFlex = styled.div`
  display: flex;
`;

const SIcon = styled.div`
  width: 5%;
  display: flex;
  justify-items: center;
  align-items: center;
  transform: scale(2);
  padding: 0% 1% 0% 0.5%;
`;
