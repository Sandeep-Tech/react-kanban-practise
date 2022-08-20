import React, { useState } from "react";
import Board, { moveCard, addCard, addColumn } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

// import board from "./board";

let board = {
  columns: [
    {
      id: "column-1",
      title: "column title",
      cards: [
        {
          id: "card-1",
          title: "demo title",
          description: "demo description",
        },
      ],
    },
  ],
};

function ControlledBoard() {
  // You need to control the state yourself.
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <>
      <Board onCardDragEnd={handleCardMove} disableColumnDrag>
        {controlledBoard}
      </Board>
      <div>
        <label>Add new column</label>
        <form>
          <input type="text" placeholder="new column title"></input>
          <button type="submit">add</button>
        </form>
      </div>
    </>
  );
}

export default ControlledBoard;
