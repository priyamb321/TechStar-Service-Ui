import React, { useState } from "react";
//Astate variable can be string,array,object,boolean
function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        {/* <input type="text" value={name.firstName} onChange={e=>setName({firstName:e.target.value})}/>
             <input type="text" value={name.lastName} onChange={e=>setName({lastName:e.target.value})}/> */}
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is-{name.firstName}</h2>
        <h2>Your Last name is-{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
        {/* first name is coming..second is not cominggg */}
      </form>
    </div>
  );
}

export default HookCounterThree;
