import React from 'react'

const UserContext = React.createContext();

export default UserContext; 

{/* <UserContext>
  <login/>
  <card/>
  <signUp/>
</UserContext> 


// context api is the provider jo ke sare components ko data/perticular value provide karata hai jeske usea jarurat hai
// esliye hum esa rapper banate hai sare components ke (kyoke ye ek global variable/data provider ka kaam kre)
// or uske andar ke sare components data ko use kr sakte hai

*/}