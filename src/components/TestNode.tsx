import { useRef } from 'react';
import Draggable from 'react-draggable';

const TestNode = () => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} defaultPosition={{ x: 50, y: 50 }}>
      <div
        ref={nodeRef}
        className="px-[1rem] py-[0.5rem] w-fit bg-blue-500 rounded-[1rem] cursor-move"
      >
        hidsafsadfdsadsfdfsa
      </div>
    </Draggable>
  );
};

export default TestNode;
