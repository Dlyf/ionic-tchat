import User from "./user.model";

class Message {
    public date = Date.now();

    constructor(public text: string, public user: User) {    
    }
}

export default Message;