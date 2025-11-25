 let index = 0;
 let state = [];
function useToggle(initialValue = false) {
 let currentIndex = index;
  if (state[currentIndex] == undefined) {
    state[currentIndex] = initialValue;
  }

  function setValue(newValue){
    state[currentIndex] = newValue;
  }
  index++;
  return [state[currentIndex],setValue];
}

export default function Toggle() {
 
  const [isOn, toggle] = useToggle(false);
  return (
  
    <button data-testid="toggle-button" onClick={() => { debugger;toggle(!isOn)}}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
