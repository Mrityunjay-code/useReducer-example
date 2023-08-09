import React, { useState, useReducer } from 'react';

// Action types for the useReducer
const ActionType = {
  START_DRAWING: 'START_DRAWING',
  STOP_DRAWING: 'STOP_DRAWING',
  DRAW: 'DRAW',
  CLEAR: 'CLEAR',
};

// Reducer function to handle drawing actions
const drawingReducer = (state, action) => {
  switch (action.type) {
    case ActionType.START_DRAWING:
      return { ...state, isDrawing: true };
    case ActionType.STOP_DRAWING:
      return { ...state, isDrawing: false };
    case ActionType.DRAW:
      return { ...state, path: [...state.path, action.payload] };
    case ActionType.CLEAR:
      return { isDrawing: false, path: [] };
    default:
      return state;
  }
};

const Color = () => {
  const [drawingState, dispatch] = useReducer(drawingReducer, {
    isDrawing: false,
    path: [],
  });

  const [drawingColor, setDrawingColor] = useState('#000000'); // Default color: black

  const handleStartDrawing = () => {
    dispatch({ type: ActionType.START_DRAWING });
  };

  const handleStopDrawing = () => {
    dispatch({ type: ActionType.STOP_DRAWING });
  };

  const handleDraw = (event) => {
    if (drawingState.isDrawing) {
      const { clientX, clientY } = event.touches ? event.touches[0] : event;
      const x = clientX - event.target.offsetLeft;
      const y = clientY - event.target.offsetTop;

      dispatch({ type: ActionType.DRAW, payload: { x, y, color: drawingColor } });
    }
  };

  const handleClear = () => {
    dispatch({ type: ActionType.CLEAR });
  };

  return (
    <div>
      <div
        style={{
          position: 'relative',
          border: '1px solid #000',
          width: '400px',
          height: '400px',
        }}
        onTouchStart={handleStartDrawing}
        onTouchEnd={handleStopDrawing}
        onTouchMove={handleDraw}
        onMouseDown={handleStartDrawing}
        onMouseUp={handleStopDrawing}
        onMouseMove={handleDraw}
      >
        {drawingState.path.map((point, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: point.x,
              top: point.y,
              width: '5px',
              height: '5px',
              backgroundColor: point.color,
            }}
          />
        ))}
      </div>
      <div>
        <button onClick={handleClear}>Clear Drawing</button>
        <input
          type="color"
          value={drawingColor}
          onChange={(e) => setDrawingColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Color;
