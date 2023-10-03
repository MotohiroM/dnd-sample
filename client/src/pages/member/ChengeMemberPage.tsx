import styled from 'styled-components';
import { SBasePage } from '../../components/atoms/BasePageSet';
import { ReadOnlyMemberDataCard } from '../../components/layout/Member/ReadOnlyMemberDataCard';
import { useRecoilValue } from 'recoil';
import { MemberSelector } from '../../stores/MemberAtom';
import { DndContextProvider } from '../../lib/dnd';
import React from 'react';

const ChengeMemberPage = () => {
  const memberList = useRecoilValue(MemberSelector);
  return (
    <SPage>
      <SFlex>
        <SMemberLayout>
          <DndContextProvider
            items={memberList}
            Element={ReadOnlyMemberDataCard}
          ></DndContextProvider>
        </SMemberLayout>
      </SFlex>
    </SPage>
  );
};

const SPage = styled.div`
  ${SBasePage};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
`;

const SFlex = styled.div`
  display: flex;
`;

const SMemberLayout = styled.div`
  padding: 3%;
  width: 87%;
  overflow-x: scroll;
  height: calc(100vh - ${({ theme }) => theme.headerHeight.height});
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

export default ChengeMemberPage;
