## firebase Auth methods
### import {  } from 'firebase/auth'
0 - getAuth : to get access of whole Authentication methods without this we will not able to use all methods given below
1 - createUserWithEmailAndPassword : Signup / Register with email and password.\
2 - signInWithEmailAndPassword : SignIn / Login with email and password.\
3 - signInWithPopup : SignIn / Login with google.\
4 - GoogleAuthProvider : Google instance to authenticate user for SignIn / Login with google.\
5 - onAuthStateChanged : to check wether the user is logged in or not.\
6 - signOut : for logout.\

## firebase Firestore methods
### import { } from 'firebase/firestore'
0 - getFirestore : to get access of whole firestore without this we will not able to use all methods given below.\
1 - addDoc : to add or create the document to the firestore collection.\
2 - collection : it is the folder where the created documents will be stored.\
3 - deleteDoc : to delete the document by id.\
4 - getDoc : to get single document by id.\
5 - getDocs : to get all documents.\
6 - updateDoc : update the document by id.\
7 - doc : used while getting single document.\
8 - query : The Query instance to use as a base for the new constraints..\ 
9 - where : it is used with query to apply condition with the operators such as ""<", "<=", "==", "<", "<=", "!=".".\

## firebase FireStorage methods
### import { } from 'firebase/storage' //used to images
0 - getStorage : to get access of whole storage.\ 
1 - uploadBytes : first we have to upload the photo to firbaseStorage.\
2 - ref : to provide location where images will store in fireStorage.\
3 - getDownloadURL : download the uploaded images and provide the imgURL.\