import nc from "next-connect";
import dbConnect from '../../../Config/dbConnect'
import { getSingleRoom , updateRoom , deleteRoom } from '../../../Controller/roomCtrl'
import onError from '../../../middleware/errors'

const handler = nc({ onError });
dbConnect();

handler.get(getSingleRoom)
handler.put(updateRoom)
handler.delete(deleteRoom)

export default handler;
