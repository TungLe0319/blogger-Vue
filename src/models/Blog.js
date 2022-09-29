import { Account } from "./Account.js"

export class Blog{
  constructor(data) {
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tags = data.tags//is an Array
    this.published = data.published
    this.creatorId = new Account( data.creatorId)
  }
}
// {
//   "title": {
//     "type": "String",
//     "required": true
//   },
//   "body": {
//     "type": "String",
//     "required": true
//   },
//   "imgUrl": {
//     "type": "String"
//   },
//   "tags": [
//     {
//       "type": "String"
//     }
//   ],
//   "published": {
//     "type": "Boolean",
//     "default": true
//   },
//   "creatorId": {
//     "type": "ObjectId",
//     "required": true
//   }
// }