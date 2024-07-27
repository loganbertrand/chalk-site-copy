import axios from 'axios'

const { MAILCHIMP_SECRET: secret } = process.env

export default async (req, res) => {
const email = req.body.emailAddress
const fullName = req.body.fullName
try {
const response = await axios({
    method: 'post',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': secret,
    },
    url: 'https://us17.api.mailchimp.com/3.0/lists/399bc81eaa/members',
    data: {
    email_address: email,
    status: 'subscribed',
    tags: ["Android Waitlist"],
    merge_fields: {
        NNAME: fullName,
    }
    }
})

if (response.status === 200) {
    res.statusCode = 200
    res.end()
} else {
    console.log(res)
    res.statusCode = 400
    res.send("testing message")
}
} catch(err) { 
    console.log(err.response.data.title, "errors")
    if(err.response.data.title === "Member Exists"){
        res.statusCode = 401
        res.send("member exists")
    }else{
        res.statusCode = 400
        res.send("error submission")
    }
    res.send(err.response.data.title)
}
}