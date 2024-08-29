export const getUser = async (req, res) => {
  try {
    res.status(200).json({
        status: true,
        statusCode: 200,
        message: "get user SucessFully!",
        data:{
            name:"Aman"
        }
      });
   
  } catch (error) {
    console.log(error)
  }
};


