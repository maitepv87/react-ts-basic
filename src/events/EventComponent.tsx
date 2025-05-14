export const EventComponent: React.FC = () => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleOnDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={handleOnChange} />

      <div draggable onDragStart={handleOnDragStart}>
        Drag Me!
      </div>
    </div>
  );
};
