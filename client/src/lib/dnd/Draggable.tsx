import { useDraggable } from '@dnd-kit/core';
import { DndType } from './type';

export const Draggable = ({ id, children }: DndType) => {
  const { attributes, active, listeners, setNodeRef, transform } = useDraggable(
    {
      id: id,
    },
  );

  const style =
    active && transform
      ? {
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          color: `#f5f5f5a6`,
        }
      : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};
