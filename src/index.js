const express = require("express");
const { ServerConfig,Logger } = require("./config");
const apiRoutes = require("./routes");

const mailsender = require('./config/email-config')

const app = express();

app.use('/api' , apiRoutes);
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(ServerConfig.PORT,async () => {
  console.log(`Listening.... at port  :${ServerConfig.PORT}`);
   try {
    const response = await mailsender.sendMail({
      from:ServerConfig.GMAIL_EMAIL,
      to:'h***8@gmail.com',
      subject:'Is the service working ?',
      text:'Yes it is working'
    });
    console.log(response);
   } catch (error) {
    console.log(error); 
   }
});
