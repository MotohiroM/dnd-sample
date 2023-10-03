import { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';
import { DndContextType } from './type';
import React from 'react';

/**
 * Drrag & Droppの機能を実現するためのProvider
 * @param {DndContextType} {items, Element} itemsはlistを指定 Elementは表示用のElementを指定
 *
 * listのidは1始まりとすること
 * @returns Drrag & Droppの機能を兼ね備えたHTMLElement
 */
export const DndContextProvider = ({ items, Element }: DndContextType) => {
  const [isDropped, setIsDropped] = useState(false);
  const [list, setList] = useState(items);

  /**
   * DnDした際のlist定義
   * @param {number} activeId 移動対象のID
   * @param {number} overId 移動先のID
   * @returns list
   */
  const setListDnd = (activeId: number, overId: number) => {
    return [...list]
      .map((listItem) => {
        const itemObj = { ...listItem };
        const itemId = Number(itemObj.id) - 1;

        if (overId === 999999) {
          // 範囲外への移動を検知したため、何もしない
          return itemObj;
        }

        if (activeId > overId) {
          // 上に移動した場合
          if (itemId === overId) {
            itemObj.id = activeId;
          } else if (itemId === activeId) {
            itemObj.id = overId + 1;
          }

          if (itemId < overId && itemId !== activeId) {
            itemObj.id = itemObj.id + 1;
          }
        } else {
          // 下に移動した場合
        }

        return itemObj;
      })
      .sort((a, b) => Number(a.id) - Number(b.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (!event.active) {
      return;
    }

    /**
     * 移動対象のID
     */
    const activeId = Number(event.active.id);

    /**
     * 移動先のID
     */
    // 初回は「event.over.id」はundefinendとなるため、強制的にダミーを代入
    const overId = event.over?.id ? Number(event.over.id) : 999999;

    if (activeId === overId) {
      // 移動しようとしたが、結局移動していない
      return;
    }

    console.log(`activeId: ${activeId}`);
    console.log(`overId: ${overId}`);
    console.log(items);

    setList(setListDnd(activeId, overId));

    console.log(list);

    setIsDropped(true);
  };

  return (
    <DndContext autoScroll={true} onDragEnd={handleDragEnd}>
      {list.map((item: any, index: number) => (
        <div key={index}>
          {!isDropped ? (
            <Draggable id={index}>
              <Element member={item} />
            </Draggable>
          ) : null}
          <Droppable id={index}>
            {isDropped ? (
              <Draggable id={index}>
                <Element member={item} />
              </Draggable>
            ) : (
              <></>
            )}
          </Droppable>
        </div>
      ))}
    </DndContext>
  );
};
