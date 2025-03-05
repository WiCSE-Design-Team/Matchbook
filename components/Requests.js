import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import {collection, getDocs, getDoc, orderBy, query, doc, setDoc} from "firebase/firestore";



export const getUserByID = async() => {
  //gets userbyid - should work

  var data = null;
  var err = '';

  //access user
  var user = FIREBASE_AUTH.currentUser;
  const docRef = doc(FIREBASE_DB, 'UserInfo', String(user.uid));
  
  //get user's info, getDoc = getRow in userInfo table
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()){
      console.log(docSnap.data());
      //set the data
      data = docSnap.data();

  } else{
      err = "User with the id doesn't exist. Fetch failed.";
  }

  return { data: res, err: err };

}

export const getAllUsers = async(processing) => {
  const collectionRef = collection(FIREBASE_DB, 'UserInfo');
  var data = null;
  var err = '';

  //query(collectionRef, orderBy('id'))
  await getDocs(query(collectionRef, orderBy('email'))).then( res => {
      if (processing) {
          console.log(res)
          data = res.docs.map((doc) => ({...doc.data(), docId: doc.id}))
          console.log(data)
      }
  }).catch((e) => {
    console.error(e);
    err = e;
  });

  return { data: res, err: err };
  
}

const setUserDetails = async(...args)=> {
  //add user to db
  try{

      //get user reference from data base
      var user = FIREBASE_AUTH.currentUser;
      const docRef = doc(FIREBASE_DB, 'UserInfo', String(user.uid));

      //set the details of the doc - these are just standins for actual data!
      const docRes = await setDoc(docRef, {
          first_name: args[0], 
          last_name: args[1],
          pronouns: args[2],
          age: args[3],
          school: args[4],
          year: args[5],
          major: args[6],
          course: args[7],
          bio: args[8],
          /*study_style: 'Solitary', 
          favSpot: 'Library West', 
          leastSpot: 'Marston', */
          prompt_choice: args[9],
          prompt_answer: args[10],
          img_url: args[11],
          wants: [],
          matches: [],
      });

      console.log(docRes);

  } catch(e){
      console.log(e);
  }
  
}


const addUserDB = async(response)=>{
  //add user to db
  try{

      //create document (basically row in db table/collection) reference
      const docRef = doc(FIREBASE_DB, "UserInfo1", response.user.uid);
      //doesnt set any data
      //console.log(docRes);

  } catch(e){
      console.log(e);
  }
  
}