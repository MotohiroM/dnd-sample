import { useDroppable } from '@dnd-kit/core';
import { DndType } from './type';
import React from 'react';

export const Droppable = ({ id, children }: DndType) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? 'white' : undefined,
  };
  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
