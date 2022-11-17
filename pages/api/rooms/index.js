import nc from "next-connect";
import dbConnect from '../../../Config/dbConnect'
import { allRooms , newRoom } from '../../../Controller/roomCtrl'
import onError from '../../../middleware/errors'

const handler = nc({onError});
dbConnect();

handler.get(allRooms)
handler.post(newRoom)

export default handler;
