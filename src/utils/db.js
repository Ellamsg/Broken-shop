import mongoose from "mongoose";

//make a connection
const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        handleError(error);
      }

}

export default connect





