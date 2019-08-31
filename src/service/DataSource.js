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
                            "time":"1:15 PM",
                            "isRead":false
                        },
                        {
                            "id":2,
                            "from":"offers@amazon.com",
                            "subject":"Hurry!!! Amazon announces big billion day!",
                            "time":"1:10 PM",
                            "isRead":true
                        },
                        {
                            "id":3,
                            "from":"fb-networks@fb.com",
                            "subject":"Ramzon has changed his profile",
                            "time":"1:00 PM",
                            "isRead":true
                        }
                    ],
            "unreadMessageCount":1
                });
    }

    static fetchSentMessages(){
        return ({
            "messages":[
                        {
                            "id":1,
                            "subject":"Hurry!!! Flipkart announces big billion day!",
                            "time":"1:15 PM"
                        },
                        {
                            "id":2,                           
                            "subject":"Hurry!!! Amazon announces big billion day!",
                            "time":"1:10 PM"                     
                        },
                        {
                            "id":3,
                            "subject":"Ramzon has changed his profile",
                            "time":"1:00 PM"
                        }
                    ]
                });
    }
}

export default DataSource;