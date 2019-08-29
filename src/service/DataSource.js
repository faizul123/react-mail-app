class DataSource {
    constructor(){
        this.fetchMessages = this.fetchMessages.bind(this);
    }

    static fetchMessages(){
        return ({
            "messages":[
                        {
                            "id":1,
                            "from":"offers@Flipkart.com",
                            "subject":"Hurry!!! Flipkart announces big billion day!",
                            "receivedTime":"1:15 PM",
                            "isRead":false
                        },
                        {
                            "id":2,
                            "from":"offers@amazon.com",
                            "subject":"Hurry!!! Amazon announces big billion day!",
                            "receivedTime":"1:10 PM",
                            "isRead":true
                        },
                        {
                            "id":3,
                            "from":"fb-networks@fb.com",
                            "subject":"Ramzon has changed his profile",
                            "receivedTime":"1:00 PM",
                            "isRead":true
                        }
                    ],
            "unreadMessageCount":1
                });
    }
}

export default DataSource;