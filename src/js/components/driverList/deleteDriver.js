// db에 있는 보험자 데이터를 삭제하는 Component
import db from "../../firebase/db.js";
import { doc, deleteDoc } from "firebase/firestore";

export default async function deleteDriver(driverId) {
  await deleteDoc(doc(db, "drivers", driverId));
}
