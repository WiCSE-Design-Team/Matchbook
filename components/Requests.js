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