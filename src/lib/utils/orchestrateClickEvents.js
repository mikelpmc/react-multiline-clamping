const orchestrateClickEvents = (elementClick, myClick) => {
    elementClick && elementClick();
    myClick();
  };
  
  export default orchestrateClickEvents;
  